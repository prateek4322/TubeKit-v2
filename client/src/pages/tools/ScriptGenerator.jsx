import { useState } from "react";
import api from "@/services/api";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";
import ToolOutput from "@/components/tool-layout/ToolOutput";

function ScriptGenerator() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState("");
  const [lastFormData, setLastFormData] = useState(null);

  const handleGenerate = async (formData) => {
    try {
      setLoading(true);
      setLastFormData(formData);

      const response = await api.post("/generate", {
        tool: "script-generator",
        ...formData,
      });

      if (response.data.success) {
        setResults(response.data.data);
      } else {
        setResults("");
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to generate script"
      );

      setResults("");
    } finally {
      setLoading(false);
    }
  };

  const copyScript = async () => {
    await navigator.clipboard.writeText(results);
    alert("Script copied!");
  };

  return (
    <> <SEO
title="AI YouTube Script Generator | TubeKit"
description="Generate complete YouTube scripts using AI."
url="/tools/script-generator"
/>
    <ToolLayout>
      <ToolHeader
        title="AI Script Writer"
        description="Generate complete YouTube video scripts."
      />

      <ToolForm
        onGenerate={handleGenerate}
        loading={loading}
        config={{
          buttonText: "Generate Script",
          topicLabel: "Video Topic",
          topicPlaceholder: "Example: How to Learn React",
          showCount: false,
        }}
      />

      <ToolOutput
        results={results}
        loading={loading}
        onCopy={copyScript}
        onCopyAll={copyScript}
        onRegenerate={() => {
          if (lastFormData) {
            handleGenerate(lastFormData);
          }
        }}
      />
    </ToolLayout>
    </>
  );
}

export default ScriptGenerator;