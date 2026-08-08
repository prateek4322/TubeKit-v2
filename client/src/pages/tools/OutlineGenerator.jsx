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
      <section className="mt-12 space-y-10">
  {/* How to Use */}
  <div>
    <h2 className="text-2xl font-bold">
      How to Use the AI YouTube Outline Generator
    </h2>

    <p className="mt-3 text-muted-foreground">
      TubeKit's AI YouTube Outline Generator helps creators organize
      their video ideas into a clear structure before writing or
      recording. Enter your topic, generate an outline, review the
      sections, and customize them for your video.
    </p>

    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>Enter the topic or main idea of your video.</li>
      <li>Click the Generate Outline button.</li>
      <li>Review the suggested video structure.</li>
      <li>Add, remove, or rearrange sections when needed.</li>
      <li>Use the final outline as a guide for your script or recording.</li>
    </ol>
  </div>

  {/* What Is an Outline */}
  <div>
    <h2 className="text-2xl font-bold">
      What Is a YouTube Video Outline?
    </h2>

    <p className="mt-3 text-muted-foreground">
      A YouTube video outline is a structured plan that organizes the
      main sections and ideas of a video before the full script is
      written. It helps creators decide what information should be
      presented and in what order.
    </p>

    <p className="mt-3 text-muted-foreground">
      A good outline can make the writing and recording process more
      organized while helping the video stay focused on its main topic.
    </p>
  </div>

  {/* Structure */}
  <div>
    <h2 className="text-2xl font-bold">
      What Should a YouTube Video Outline Include?
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>A clear introduction to the video's topic.</li>
      <li>The main points or sections of the video.</li>
      <li>Examples, explanations, or supporting information.</li>
      <li>Logical transitions between sections.</li>
      <li>A conclusion that summarizes the main ideas.</li>
      <li>A relevant call to action when appropriate.</li>
    </ul>
  </div>

  {/* Features */}
  <div>
    <h2 className="text-2xl font-bold">
      AI YouTube Outline Generator Features
    </h2>

    <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-muted-foreground">
      <li>✓ AI-generated video outlines</li>
      <li>✓ Topic-based structure</li>
      <li>✓ Multiple section ideas</li>
      <li>✓ Organized video planning</li>
      <li>✓ Easy copy functionality</li>
      <li>✓ Free to use</li>
    </ul>
  </div>

  {/* Tips */}
  <div>
    <h2 className="text-2xl font-bold">
      Tips for Creating Better YouTube Outlines
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Start with one clear goal for the video.</li>
      <li>Arrange sections in a logical order.</li>
      <li>Keep each section focused on one main idea.</li>
      <li>Remove information that does not support the video's purpose.</li>
      <li>Include examples when they help explain the topic.</li>
      <li>Adjust the outline to suit your audience and video format.</li>
    </ul>
  </div>

  {/* FAQ */}
  <div>
    <h2 className="text-2xl font-bold">
      Frequently Asked Questions
    </h2>

    <div className="mt-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          What is a YouTube video outline?
        </h3>
        <p className="mt-2 text-muted-foreground">
          A video outline is a structured plan containing the main
          sections and ideas that will be covered in a YouTube video.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Why should I create a YouTube outline?
        </h3>
        <p className="mt-2 text-muted-foreground">
          An outline can help organize ideas, maintain focus, and make
          the scripting and recording process easier.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Can AI create a complete video outline?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Yes. AI can generate a starting structure based on a topic.
          Review and customize the result so it matches your actual
          video and audience.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Can I use an outline for YouTube Shorts?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Yes. Shorts can also benefit from a simple structure that
          organizes the hook, main point, and conclusion.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is the TubeKit Outline Generator free?
        </h3>
        <p className="mt-2 text-muted-foreground">
          TubeKit provides the AI Outline Generator as a free tool for
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

export default OutlineGenerator;