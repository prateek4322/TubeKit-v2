import { useState } from "react";
import api from "@/services/api";

import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";
import ToolOutput from "@/components/tool-layout/ToolOutput";

function TagsGenerator() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [lastFormData, setLastFormData] = useState(null);

  const handleGenerate = async (formData) => {
    try {
      setLoading(true);
      setLastFormData(formData);

      const response = await api.post("/generate", {
        tool: "tags-generator",
        ...formData,
      });

      if (response.data.success) {
        const tags = response.data.data
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean);

        setResults(tags);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to generate tags"
      );

      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const copyTag = async (text) => {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(results.join(", "));
    alert("All tags copied!");
  };

  return (
    <ToolLayout>
      <ToolHeader
        title="AI Tags Generator"
        description="Generate SEO-friendly YouTube tags instantly."
      />

      <ToolForm
        onGenerate={handleGenerate}
        loading={loading}
        config={{
          buttonText: "Generate Tags",
          topicLabel: "Video Topic",
          topicPlaceholder: "Example: React JS Tutorial",
          showCount: false,
          showTone: false,
        }}
      />

      <ToolOutput
        results={results}
        loading={loading}
        onCopy={copyTag}
        onCopyAll={copyAll}
        onRegenerate={() => {
          if (lastFormData) {
            handleGenerate(lastFormData);
          }
        }}
      />
    </ToolLayout>
  );
}

export default TagsGenerator;