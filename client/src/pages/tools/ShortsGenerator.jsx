import { useState } from "react";
import api from "@/services/api";

import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";
import ToolOutput from "@/components/tool-layout/ToolOutput";
import SEO from "@/components/common/SEO";
function ShortsGenerator() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [lastFormData, setLastFormData] = useState(null);

  const handleGenerate = async (formData) => {
    try {
      setLoading(true);
      setLastFormData(formData);

      const response = await api.post("/generate", {
        tool: "shorts-generator",
        ...formData,
      });

      if (response.data.success) {
        const ideas = response.data.data
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean);

        setResults(ideas);
      } else {
        setResults([]);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to generate ideas");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const copyIdea = async (text) => {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(results.join("\n"));
    alert("All ideas copied!");
  };

  return (
    <> <SEO
  title="AI YouTube Shorts Generator | TubeKit"
  description="Generate engaging YouTube Shorts ideas and scripts instantly with AI."
  url="/tools/shorts-generator"
/>
    <ToolLayout>
      <ToolHeader
        title="AI Shorts Generator"
        description="Generate viral YouTube Shorts ideas."
      />

      <ToolForm
        onGenerate={handleGenerate}
        loading={loading}
        config={{
          buttonText: "Generate Shorts Ideas",
          topicLabel: "Shorts Topic",
          topicPlaceholder: "Example: AI Facts",
          showTone: false,
          showCount: false,
        }}
      />

      <ToolOutput
        results={results}
        loading={loading}
        onCopy={copyIdea}
        onCopyAll={copyAll}
        onRegenerate={() => lastFormData && handleGenerate(lastFormData)}
      />
    </ToolLayout>
    </>
  );
}

export default ShortsGenerator;