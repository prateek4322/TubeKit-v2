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
      <section className="mt-12 space-y-10">
  {/* How to Use */}
  <div>
    <h2 className="text-2xl font-bold">
      How to Use the YouTube Keyword Generator
    </h2>

    <p className="mt-3 text-muted-foreground">
      TubeKit's AI YouTube Keyword Generator helps creators discover
      relevant keyword ideas based on their video topic. Enter your topic,
      generate suggestions, review them, and select keywords that
      accurately describe your content and audience.
    </p>

    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>Enter the main topic of your YouTube video.</li>
      <li>Click the Generate Keywords button.</li>
      <li>Review the generated keyword ideas.</li>
      <li>Identify keywords that are relevant to your actual content.</li>
      <li>Use suitable keywords naturally in your title, description, or content strategy.</li>
    </ol>
  </div>

  {/* What Are YouTube Keywords */}
  <div>
    <h2 className="text-2xl font-bold">
      What Are YouTube Keywords?
    </h2>

    <p className="mt-3 text-muted-foreground">
      YouTube keywords are words or phrases that describe the subject of
      a video. They can help creators understand how to describe their
      content and align it with the topics their intended audience may
      be interested in.
    </p>

    <p className="mt-3 text-muted-foreground">
      Good keyword choices should be closely related to the video's
      actual subject. Using unrelated keywords simply because they appear
      popular can make the content less relevant to viewers.
    </p>
  </div>

  {/* Search Intent */}
  <div>
    <h2 className="text-2xl font-bold">
      Understanding YouTube Search Intent
    </h2>

    <p className="mt-3 text-muted-foreground">
      Search intent describes what a person is trying to find when they
      search for a particular phrase. Understanding intent can help
      creators choose keywords that better match the purpose of their
      video.
    </p>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Informational keywords help people find answers or explanations.</li>
      <li>How-to keywords are useful for tutorials and guides.</li>
      <li>Comparison keywords can match videos comparing products or ideas.</li>
      <li>Review keywords can describe product or service review content.</li>
      <li>Topic-specific keywords can target a narrower audience.</li>
    </ul>
  </div>

  {/* Features */}
  <div>
    <h2 className="text-2xl font-bold">
      YouTube Keyword Generator Features
    </h2>

    <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-muted-foreground">
      <li>✓ AI-generated keyword ideas</li>
      <li>✓ Topic-based suggestions</li>
      <li>✓ Keyword variations</li>
      <li>✓ Search-intent ideas</li>
      <li>✓ Easy copy functionality</li>
      <li>✓ Free to use</li>
    </ul>
  </div>

  {/* Tips */}
  <div>
    <h2 className="text-2xl font-bold">
      Tips for Choosing Better YouTube Keywords
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Choose keywords that accurately describe your video.</li>
      <li>Think about the words your target viewers may use.</li>
      <li>Consider specific phrases instead of only broad topics.</li>
      <li>Use keywords naturally rather than repeating them excessively.</li>
      <li>Match your keywords with the actual content of your video.</li>
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
          What is a YouTube keyword generator?
        </h3>
        <p className="mt-2 text-muted-foreground">
          It is a tool that generates keyword ideas based on the topic
          or subject of a YouTube video.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Do YouTube keywords help videos rank?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Relevant keywords can help creators describe their content more
          clearly, but they do not guarantee higher rankings. YouTube
          discovery depends on multiple factors.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Should I use keywords in my YouTube title?
        </h3>
        <p className="mt-2 text-muted-foreground">
          When a keyword naturally describes the video's topic, it can be
          included in the title. The title should remain clear and useful
          to viewers.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Should I use the same keyword repeatedly?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Repeating keywords unnecessarily can make content difficult to
          read. Use relevant terms naturally and focus on accurately
          describing the video.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is the TubeKit Keyword Generator free?
        </h3>
        <p className="mt-2 text-muted-foreground">
          TubeKit provides the YouTube Keyword Generator as a free tool
          for creators.
        </p>
      </div>
    </div>
  </div>
</section>
    </ToolLayout>
    </>
  );
}

export default KeywordGenerator;