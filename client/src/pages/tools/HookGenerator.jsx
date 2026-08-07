import { useState } from "react";
import api from "@/services/api";

import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";
import ToolOutput from "@/components/tool-layout/ToolOutput";

function HookGenerator() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [lastFormData, setLastFormData] = useState(null);

  const handleGenerate = async (formData) => {
    try {
      setLoading(true);
      setLastFormData(formData);

      const response = await api.post("/generate", {
        tool: "hook-generator",
        ...formData,
      });

      if (response.data.success) {
        const hooks = response.data.data
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean);

        setResults(hooks);
      } else {
        setResults([]);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to generate hooks");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const copyHook = async (text) => {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(results.join("\n"));
    alert("All hooks copied!");
  };

  return (
    <ToolLayout>
      <ToolHeader
        title="AI Hook Generator"
        description="Generate highly engaging YouTube hooks."
      />

      <ToolForm
        onGenerate={handleGenerate}
        loading={loading}
        config={{
          buttonText: "Generate Hooks",
          topicLabel: "Video Topic",
          topicPlaceholder: "Example: AI Tools",
          showTone: false,
          showCount: false,
        }}
      />

      <ToolOutput
        results={results}
        loading={loading}
        onCopy={copyHook}
        onCopyAll={copyAll}
        onRegenerate={() => lastFormData && handleGenerate(lastFormData)}
      />
    </ToolLayout>
  );
}

export default HookGenerator;