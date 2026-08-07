import { useState } from "react";
import api from "@/services/api";

import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";
import ToolOutput from "@/components/tool-layout/ToolOutput";
import SEO from "@/components/common/SEO";
function KeywordGenerator() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [lastFormData, setLastFormData] = useState(null);

  const handleGenerate = async (formData) => {
    try {
      setLoading(true);
      setLastFormData(formData);

      const response = await api.post("/generate", {
        tool: "keyword-generator",
        ...formData,
      });

      if (response.data.success) {
        const keywords = response.data.data
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean);

        setResults(keywords);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to generate keywords"
      );

      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const copyKeyword = async (text) => {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(results.join("\n"));
    alert("All keywords copied!");
  };

  return (
    <> <SEO
  title="AI YouTube Keyword Generator | TubeKit"
  description="Discover high-ranking YouTube keywords to improve SEO and video visibility."
  url="/tools/keyword-generator"
/>
    <ToolLayout>
      <ToolHeader
        title="AI Keyword Generator"
        description="Generate high-ranking YouTube SEO keywords."
      />

      <ToolForm
        onGenerate={handleGenerate}
        loading={loading}
        config={{
          buttonText: "Generate Keywords",
          topicLabel: "Video Topic",
          topicPlaceholder: "Example: React Tutorial",
          showTone: false,
          showCount: false,
        }}
      />

      <ToolOutput
        results={results}
        loading={loading}
        onCopy={copyKeyword}
        onCopyAll={copyAll}
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

export default KeywordGenerator;