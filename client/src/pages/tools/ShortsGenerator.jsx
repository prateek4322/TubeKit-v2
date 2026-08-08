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
      <section className="mt-12 space-y-10">
  {/* How to Use */}
  <div>
    <h2 className="text-2xl font-bold">
      How to Use the AI YouTube Shorts Generator
    </h2>

    <p className="mt-3 text-muted-foreground">
      TubeKit's AI YouTube Shorts Generator helps creators develop ideas
      and content concepts for short-form videos. Enter your topic,
      generate suggestions, review them, and customize the result for
      your audience and video style.
    </p>

    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>Enter the topic or idea for your Short.</li>
      <li>Click the Generate button.</li>
      <li>Review the generated ideas or script suggestions.</li>
      <li>Choose the concept that fits your content.</li>
      <li>Edit the result to match your style before recording.</li>
    </ol>
  </div>

  {/* What Are YouTube Shorts */}
  <div>
    <h2 className="text-2xl font-bold">
      What Are YouTube Shorts?
    </h2>

    <p className="mt-3 text-muted-foreground">
      YouTube Shorts are short-form videos designed for quick,
      mobile-friendly viewing. Creators can use Shorts to share
      educational content, entertainment, tutorials, tips, stories,
      product information, and other short-form ideas.
    </p>

    <p className="mt-3 text-muted-foreground">
      A successful Short usually has a clear topic, a strong opening,
      focused information, and an ending that gives the viewer a reason
      to continue engaging with the channel.
    </p>
  </div>

  {/* Shorts Structure */}
  <div>
    <h2 className="text-2xl font-bold">
      How to Structure a YouTube Short
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Start with a clear and relevant hook.</li>
      <li>Introduce the main idea quickly.</li>
      <li>Deliver the most useful or interesting information.</li>
      <li>Keep the content focused on one main topic.</li>
      <li>End naturally with a conclusion or relevant call to action.</li>
    </ul>
  </div>

  {/* Features */}
  <div>
    <h2 className="text-2xl font-bold">
      AI YouTube Shorts Generator Features
    </h2>

    <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-muted-foreground">
      <li>✓ AI-generated Shorts ideas</li>
      <li>✓ Short-form content concepts</li>
      <li>✓ Topic-based suggestions</li>
      <li>✓ Hook and script ideas</li>
      <li>✓ Easy copy functionality</li>
      <li>✓ Free to use</li>
    </ul>
  </div>

  {/* Tips */}
  <div>
    <h2 className="text-2xl font-bold">
      Tips for Creating Better YouTube Shorts
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Focus each Short on one clear idea.</li>
      <li>Get to the main topic quickly.</li>
      <li>Use simple language that is easy to understand.</li>
      <li>Keep the pacing appropriate for short-form content.</li>
      <li>Make sure the opening matches the actual content.</li>
      <li>Avoid misleading claims just to attract attention.</li>
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
          What is a YouTube Shorts generator?
        </h3>
        <p className="mt-2 text-muted-foreground">
          It is an AI-powered tool that can generate ideas, concepts, or
          script suggestions for short-form YouTube videos.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Can AI create YouTube Shorts ideas?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Yes. AI can generate topic ideas and content concepts that
          creators can review and adapt for their audience.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          How should a YouTube Short start?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Start with a clear opening that quickly establishes the topic
          or gives viewers a reason to continue watching.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Can I edit the generated Shorts content?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Yes. Review and customize AI-generated content so that it
          matches your style, audience, and the information you want to
          present.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is the TubeKit Shorts Generator free?
        </h3>
        <p className="mt-2 text-muted-foreground">
          TubeKit provides the Shorts Generator as a free tool for
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

export default ShortsGenerator;