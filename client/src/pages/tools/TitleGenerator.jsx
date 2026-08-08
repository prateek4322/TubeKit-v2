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
      <section className="mt-12 space-y-10">
  {/* How to Use */}
  <div>
    <h2 className="text-2xl font-bold">
      How to Use the TubeKit AI YouTube Title Generator
    </h2>

    <p className="mt-3 text-muted-foreground">
      TubeKit's AI YouTube Title Generator helps you create title ideas
      based on your video topic. Enter your topic, generate suggestions,
      review the results, and choose a title that accurately represents
      your video.
    </p>

    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>Enter the main topic of your YouTube video.</li>
      <li>Click the Generate Titles button.</li>
      <li>Review the generated title suggestions.</li>
      <li>Choose a title that matches your video's actual content.</li>
      <li>Copy the title and use it when publishing your video.</li>
    </ol>
  </div>

  {/* What Makes a Good Title */}
  <div>
    <h2 className="text-2xl font-bold">
      What Makes a Good YouTube Title?
    </h2>

    <p className="mt-3 text-muted-foreground">
      A good YouTube title clearly communicates what viewers can expect
      from the video. It should be easy to understand and relevant to
      the topic of the video.
    </p>

    <p className="mt-3 text-muted-foreground">
      Strong titles can also create curiosity without misleading viewers.
      Avoid exaggerated claims or promises that your video does not
      actually deliver.
    </p>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Keep the topic clear and easy to understand.</li>
      <li>Use words that match what your target viewers are searching for.</li>
      <li>Create curiosity while staying accurate.</li>
      <li>Avoid unnecessary words and misleading clickbait.</li>
      <li>Make sure the title accurately represents the video.</li>
    </ul>
  </div>

  {/* Features */}
  <div>
    <h2 className="text-2xl font-bold">
      TubeKit AI Title Generator Features
    </h2>

    <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-muted-foreground">
      <li>✓ AI-generated YouTube title ideas</li>
      <li>✓ Multiple title variations</li>
      <li>✓ SEO-focused suggestions</li>
      <li>✓ One-click title copying</li>
      <li>✓ Regenerate title suggestions</li>
      <li>✓ Free to use</li>
    </ul>
  </div>

  {/* Tips */}
  <div>
    <h2 className="text-2xl font-bold">
      Tips for Creating Better YouTube Titles
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Put the main topic near the beginning when appropriate.</li>
      <li>Write for your target audience rather than everyone.</li>
      <li>Use specific wording instead of vague descriptions.</li>
      <li>Make sure the title matches the video's content.</li>
      <li>Test different title ideas and compare their clarity.</li>
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
          What is a YouTube title generator?
        </h3>
        <p className="mt-2 text-muted-foreground">
          A YouTube title generator creates title ideas based on the topic
          or information you provide. It can help creators explore
          different ways to describe their videos.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          How can I create better YouTube titles?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Start with a clear understanding of your video's topic and
          audience. Use specific, accurate wording and avoid misleading
          claims.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Are AI-generated titles good for YouTube?
        </h3>
        <p className="mt-2 text-muted-foreground">
          AI-generated titles can provide useful ideas, but you should
          review and edit them so they accurately describe your video and
          fit your audience.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Can I use these titles for YouTube Shorts?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Yes. You can use the generator to create title ideas for both
          long-form YouTube videos and Shorts. Make sure the final title
          accurately describes the content.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is the TubeKit AI Title Generator free?
        </h3>
        <p className="mt-2 text-muted-foreground">
          The TubeKit title generator is available as a free tool for
          creating YouTube title ideas.
        </p>
      </div>
    </div>
  </div>
</section>
    </ToolLayout>
  </>
);
}
export default TitleGenerator;