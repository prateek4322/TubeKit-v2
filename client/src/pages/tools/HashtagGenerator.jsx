import { useState } from "react";
import api from "@/services/api";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";
import ToolOutput from "@/components/tool-layout/ToolOutput";

function HashtagGenerator() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [lastFormData, setLastFormData] = useState(null);

  const handleGenerate = async (formData) => {
    try {
      setLoading(true);
      setLastFormData(formData);

      const response = await api.post("/generate", {
        tool: "hashtag-generator",
        ...formData,
      });

      if (response.data.success) {
        const hashtags = response.data.data
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean);

        setResults(hashtags);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to generate hashtags"
      );

      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const copyHashtag = async (text) => {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(results.join("\n"));
    alert("All hashtags copied!");
  };

  return (
    <> <SEO
  title="AI YouTube Hashtag Generator | TubeKit"
  description="Generate trending and SEO-friendly YouTube hashtags instantly using AI."
  url="/tools/hashtag-generator"
/>
    <ToolLayout>
      <ToolHeader
        title="AI Hashtag Generator"
        description="Generate trending YouTube hashtags instantly."
      />

      <ToolForm
        onGenerate={handleGenerate}
        loading={loading}
        config={{
          buttonText: "Generate Hashtags",
          topicLabel: "Video Topic",
          topicPlaceholder: "Example: React JS Tutorial",
          showTone: false,
          showCount: false,
        }}
      />

      <ToolOutput
        results={results}
        loading={loading}
        onCopy={copyHashtag}
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
      How to Use the YouTube Hashtag Generator
    </h2>

    <p className="mt-3 text-muted-foreground">
      TubeKit's AI YouTube Hashtag Generator helps creators discover
      relevant hashtag ideas for their videos. Enter your video topic,
      generate suggestions, review them, and select hashtags that
      accurately relate to your content.
    </p>

    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>Enter your YouTube video's main topic.</li>
      <li>Click the Generate Hashtags button.</li>
      <li>Review the generated hashtag suggestions.</li>
      <li>Remove hashtags that are not relevant to your content.</li>
      <li>Use the relevant hashtags when publishing your video.</li>
    </ol>
  </div>

  {/* What Are YouTube Hashtags */}
  <div>
    <h2 className="text-2xl font-bold">
      What Are YouTube Hashtags?
    </h2>

    <p className="mt-3 text-muted-foreground">
      YouTube hashtags are words or phrases preceded by the # symbol.
      They help identify the topic or category of content and can provide
      viewers with another way to discover related videos.
    </p>

    <p className="mt-3 text-muted-foreground">
      Hashtags should be relevant to the actual content of your video.
      Using unrelated or misleading hashtags can make your content less
      useful to viewers.
    </p>
  </div>

  {/* Features */}
  <div>
    <h2 className="text-2xl font-bold">
      YouTube Hashtag Generator Features
    </h2>

    <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-muted-foreground">
      <li>✓ AI-generated hashtag ideas</li>
      <li>✓ Topic-based suggestions</li>
      <li>✓ Relevant hashtag variations</li>
      <li>✓ Easy copy functionality</li>
      <li>✓ Multiple hashtag suggestions</li>
      <li>✓ Free to use</li>
    </ul>
  </div>

  {/* Tips */}
  <div>
    <h2 className="text-2xl font-bold">
      Tips for Using YouTube Hashtags
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Use hashtags that are directly related to your video.</li>
      <li>Choose specific hashtags when they accurately describe your topic.</li>
      <li>Avoid adding unrelated hashtags just because they are popular.</li>
      <li>Keep your hashtags relevant to your target audience.</li>
      <li>Review every hashtag before adding it to your video.</li>
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
          What is a YouTube hashtag generator?
        </h3>
        <p className="mt-2 text-muted-foreground">
          It is a tool that generates hashtag ideas based on the topic
          of a YouTube video.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Do YouTube hashtags help videos get discovered?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Hashtags can provide another way for viewers to find related
          content, but they are only one part of YouTube's overall
          discovery system.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          How many hashtags should I use?
        </h3>
        <p className="mt-2 text-muted-foreground">
          There is no single number that works for every video. Use
          relevant hashtags rather than adding a large number of
          unrelated ones.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Should YouTube hashtags match my video topic?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Yes. Hashtags should accurately relate to the subject and
          content of your video.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is the TubeKit Hashtag Generator free?
        </h3>
        <p className="mt-2 text-muted-foreground">
          TubeKit provides the YouTube Hashtag Generator as a free tool
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

export default HashtagGenerator;