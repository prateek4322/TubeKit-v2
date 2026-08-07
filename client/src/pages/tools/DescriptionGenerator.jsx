import { useState } from "react";
import api from "@/services/api";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";
import ToolOutput from "@/components/tool-layout/ToolOutput";

function DescriptionGenerator() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState("");
  const [lastFormData, setLastFormData] = useState(null);

  const handleGenerate = async (formData) => {
    try {
      setLoading(true);
      setLastFormData(formData);

      const response = await api.post("/generate", {
        tool: "description-generator",
        ...formData,
      });

      if (response.data.success) {
        setResults(response.data.data);
      } else {
        setResults("");
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to generate description");
      setResults("");
    } finally {
      setLoading(false);
    }
  };

  const copyDescription = async () => {
    await navigator.clipboard.writeText(results);
    alert("Description copied!");
  };

  return (
   <> <SEO
title="AI YouTube Description Generator | TubeKit"
description="Generate SEO friendly YouTube descriptions."
url="/tools/description-generator"
/>
    <ToolLayout>
      <ToolHeader
        title="AI Description Generator"
        description="Generate SEO-optimized YouTube descriptions in seconds."
      />

      <ToolForm
        onGenerate={handleGenerate}
        loading={loading}
        config={{
          buttonText: "Generate Description",
          topicLabel: "Video Topic",
          topicPlaceholder: "Example: YouTube SEO Tutorial",
          showCount: false,
        }}
      />

      <ToolOutput
        results={results}
        loading={loading}
        onCopy={copyDescription}
        onCopyAll={copyDescription}
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

export default DescriptionGenerator;