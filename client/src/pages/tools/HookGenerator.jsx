import { useState } from "react";
import api from "@/services/api";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";
import ToolOutput from "@/components/tool-layout/ToolOutput";

function HookGenerator() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [lastFormData, setLastFormData] = useState(null);

  const handleGenerate = async (formData) => {
    try {
      setLoading(true);
      setLastFormData(formData);

      const response = await api.post("/generate", {
        tool: "hook-generator",
        ...formData,
      });

      if (response.data.success) {
        const hooks = response.data.data
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean);

        setResults(hooks);
      } else {
        setResults([]);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to generate hooks");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const copyHook = async (text) => {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(results.join("\n"));
    alert("All hooks copied!");
  };

  return (
    <> <SEO
  title="AI YouTube Hook Generator | TubeKit"
  description="Create powerful video hooks that grab attention and increase audience retention."
  url="/tools/hook-generator"
/>
    <ToolLayout>
      <ToolHeader
        title="AI Hook Generator"
        description="Generate highly engaging YouTube hooks."
      />

      <ToolForm
        onGenerate={handleGenerate}
        loading={loading}
        config={{
          buttonText: "Generate Hooks",
          topicLabel: "Video Topic",
          topicPlaceholder: "Example: AI Tools",
          showTone: false,
          showCount: false,
        }}
      />

      <ToolOutput
        results={results}
        loading={loading}
        onCopy={copyHook}
        onCopyAll={copyAll}
        onRegenerate={() => lastFormData && handleGenerate(lastFormData)}
      />
      <section className="mt-12 space-y-10">
  {/* How to Use */}
  <div>
    <h2 className="text-2xl font-bold">
      How to Use the AI YouTube Hook Generator
    </h2>

    <p className="mt-3 text-muted-foreground">
      TubeKit's AI YouTube Hook Generator helps creators develop opening
      lines and ideas designed to introduce a video topic quickly. Enter
      your topic, generate hook ideas, and choose or adapt the one that
      best fits your content and audience.
    </p>

    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>Enter your video's main topic or idea.</li>
      <li>Click the Generate Hooks button.</li>
      <li>Review the suggested opening hooks.</li>
      <li>Choose a hook that matches your video's actual content.</li>
      <li>Edit the wording to match your natural speaking style.</li>
    </ol>
  </div>

  {/* What Is a Hook */}
  <div>
    <h2 className="text-2xl font-bold">
      What Is a YouTube Hook?
    </h2>

    <p className="mt-3 text-muted-foreground">
      A YouTube hook is the opening part of a video that introduces the
      topic and gives viewers a reason to continue watching. A strong hook
      can quickly communicate what the video is about and establish
      context for the viewer.
    </p>

    <p className="mt-3 text-muted-foreground">
      Hooks can use questions, interesting facts, problems, challenges,
      demonstrations, or direct statements depending on the type of
      content.
    </p>
  </div>

  {/* Hook Types */}
  <div>
    <h2 className="text-2xl font-bold">
      Types of YouTube Hooks
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>
        <strong>Question hook:</strong> Start with a question related to
        the viewer's problem or interest.
      </li>
      <li>
        <strong>Problem hook:</strong> Introduce a problem that the video
        will address.
      </li>
      <li>
        <strong>Curiosity hook:</strong> Present an interesting idea that
        encourages viewers to learn more.
      </li>
      <li>
        <strong>Result hook:</strong> Explain what viewers can learn or
        accomplish from the video.
      </li>
      <li>
        <strong>Story hook:</strong> Begin with a short situation or
        experience connected to the topic.
      </li>
    </ul>
  </div>

  {/* Features */}
  <div>
    <h2 className="text-2xl font-bold">
      AI YouTube Hook Generator Features
    </h2>

    <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-muted-foreground">
      <li>✓ AI-generated hook ideas</li>
      <li>✓ Topic-based suggestions</li>
      <li>✓ Multiple hook variations</li>
      <li>✓ Different hook styles</li>
      <li>✓ Easy copy functionality</li>
      <li>✓ Free to use</li>
    </ul>
  </div>

  {/* Tips */}
  <div>
    <h2 className="text-2xl font-bold">
      Tips for Creating Better YouTube Hooks
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Get to the main topic quickly.</li>
      <li>Make the opening relevant to the video's actual content.</li>
      <li>Use clear language that your audience can understand.</li>
      <li>Create curiosity without making false promises.</li>
      <li>Keep the opening natural for your speaking style.</li>
      <li>Deliver on the expectation created by the hook.</li>
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
          What is a YouTube hook?
        </h3>
        <p className="mt-2 text-muted-foreground">
          A YouTube hook is the opening part of a video that introduces
          the topic and encourages viewers to continue watching.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          How long should a YouTube hook be?
        </h3>
        <p className="mt-2 text-muted-foreground">
          There is no fixed length that works for every video. The hook
          should communicate the video's main idea quickly without
          unnecessary information.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Can AI create good YouTube hooks?
        </h3>
        <p className="mt-2 text-muted-foreground">
          AI can provide useful hook ideas, but creators should review
          and adapt them to match their audience, content, and natural
          speaking style.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Should a YouTube hook be clickbait?
        </h3>
        <p className="mt-2 text-muted-foreground">
          A hook can create curiosity without being misleading. Avoid
          promises or claims that the video does not deliver.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is the TubeKit Hook Generator free?
        </h3>
        <p className="mt-2 text-muted-foreground">
          TubeKit provides the AI Hook Generator as a free tool for
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

export default HookGenerator;