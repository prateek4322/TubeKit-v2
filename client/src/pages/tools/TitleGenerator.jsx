import { useState } from "react";
import api from "@/services/api";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";
import ToolOutput from "@/components/tool-layout/ToolOutput";

function TitleGenerator() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [lastFormData, setLastFormData] = useState(null);

  const handleGenerate = async (formData) => {
    try {
      setLoading(true);
      setLastFormData(formData);

      const response = await api.post("/generate", {
        tool: "title-generator",
        ...formData,
      });

      if (response.data.success) {
        const titles = response.data.data
          .split("\n")
          .filter((item) => item.trim());

        setResults(titles);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to generate titles"
      );

      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const copyTitle = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch (error) {
      console.error(error);
    }
  };

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(results.join("\n"));
      alert("All titles copied!");
    } catch (error) {
      console.error(error);
    }
  };

 return (
  <>
    <SEO
      title="AI YouTube Title Generator | TubeKit"
      description="Generate SEO optimized YouTube titles instantly."
      url="/tools/title-generator"
    />

    <ToolLayout>
      <ToolHeader
        title="AI Title Generator"
        description="Generate viral, clickable and SEO-optimized YouTube titles in seconds."
      />

      <ToolForm
        onGenerate={handleGenerate}
        loading={loading}
        config={{
          buttonText: "Generate Titles",
          topicLabel: "Video Topic",
          topicPlaceholder: "Example: How to Grow on YouTube",
        }}
      />

      <ToolOutput
        results={results}
        loading={loading}
        onCopy={copyTitle}
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
export default TitleGenerator;