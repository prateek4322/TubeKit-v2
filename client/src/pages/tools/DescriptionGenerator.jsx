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
      <section className="mt-12 space-y-10">
  <div>
    <h2 className="text-2xl font-bold">
      How to Use the YouTube Description Generator
    </h2>

    <p className="mt-3 text-muted-foreground">
      TubeKit's AI YouTube Description Generator helps creators create
      clear and useful video descriptions from their video topic. Enter
      your topic, generate a description, review the result, and edit it
      before publishing.
    </p>

    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>Enter your YouTube video topic or main idea.</li>
      <li>Click the Generate button.</li>
      <li>Review the generated description.</li>
      <li>Edit the description when necessary.</li>
      <li>Copy the final description to YouTube Studio.</li>
    </ol>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      What Should a YouTube Description Include?
    </h2>

    <p className="mt-3 text-muted-foreground">
      A useful YouTube description gives viewers context about the video
      and can provide additional information such as important links,
      resources, timestamps, or relevant details.
    </p>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>A clear summary of the video.</li>
      <li>Important information viewers may need.</li>
      <li>Relevant keywords used naturally.</li>
      <li>Useful links or resources when applicable.</li>
      <li>Calls to action when they are relevant.</li>
    </ul>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      YouTube Description Generator Features
    </h2>

    <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-muted-foreground">
      <li>✓ AI-generated descriptions</li>
      <li>✓ Topic-based content</li>
      <li>✓ SEO-friendly suggestions</li>
      <li>✓ Easy copy functionality</li>
      <li>✓ Regenerate descriptions</li>
      <li>✓ Free to use</li>
    </ul>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      Tips for Better YouTube Descriptions
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Explain the video's main topic clearly.</li>
      <li>Put important information near the beginning.</li>
      <li>Use keywords naturally instead of keyword stuffing.</li>
      <li>Add useful links when they provide value to viewers.</li>
      <li>Make sure the description accurately represents the video.</li>
    </ul>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      Frequently Asked Questions
    </h2>

    <div className="mt-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          What is a YouTube description generator?
        </h3>
        <p className="mt-2 text-muted-foreground">
          It is a tool that creates description ideas based on the topic
          or information provided by a creator.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Can I edit the generated description?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Yes. Review and customize the generated text before publishing
          it so that it accurately represents your video.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Should I add keywords to my YouTube description?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Relevant keywords can help describe the topic of your video,
          but they should be used naturally and should not make the
          description difficult to read.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Can I use the generator for YouTube Shorts?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Yes. You can generate description ideas for Shorts as well as
          longer YouTube videos.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is the TubeKit description generator free?
        </h3>
        <p className="mt-2 text-muted-foreground">
          TubeKit provides the description generator as a free tool for
          creators.
        </p>
      </div>
    </div>
  </div>
</section>
    </ToolLayout>
    </>
  );
}

export default DescriptionGenerator;