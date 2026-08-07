import { useState } from "react";
import api from "@/services/api";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";
import ToolOutput from "@/components/tool-layout/ToolOutput";

function OutlineGenerator() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState("");
  const [lastFormData, setLastFormData] = useState(null);

  const handleGenerate = async (formData) => {
    try {
      setLoading(true);
      setLastFormData(formData);

      const response = await api.post("/generate", {
        tool: "outline-generator",
        ...formData,
      });

      if (response.data.success) {
        setResults(response.data.data);
      } else {
        setResults("");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to generate outline");
      setResults("");
    } finally {
      setLoading(false);
    }
  };

  const copyOutline = async () => {
    await navigator.clipboard.writeText(results);
    alert("Outline copied!");
  };

  return (
    <> <SEO
  title="AI YouTube Outline Generator | TubeKit"
  description="Generate structured outlines for YouTube videos with AI in seconds."
  url="/tools/outline-generator"
/>
    <ToolLayout>
      <ToolHeader
        title="AI Outline Generator"
        description="Generate complete YouTube video outlines."
      />

      <ToolForm
        onGenerate={handleGenerate}
        loading={loading}
        config={{
          buttonText: "Generate Outline",
          topicLabel: "Video Topic",
          topicPlaceholder: "Example: React Tutorial",
          showTone: false,
          showCount: false,
        }}
      />

      <ToolOutput
        results={results}
        loading={loading}
        onCopy={copyOutline}
        onCopyAll={copyOutline}
        onRegenerate={() => lastFormData && handleGenerate(lastFormData)}
      />
    </ToolLayout>
    </>
  );
}

export default OutlineGenerator;