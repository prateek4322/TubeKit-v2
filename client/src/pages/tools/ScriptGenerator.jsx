import { useState } from "react";
import api from "@/services/api";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";
import ToolOutput from "@/components/tool-layout/ToolOutput";

function ScriptGenerator({ query = "" }) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState("");
  const [lastFormData, setLastFormData] = useState(null);

  const handleGenerate = async (formData) => {
    try {
      setLoading(true);
      setLastFormData(formData);

      const response = await api.post("/generate", {
        tool: "script-generator",
        ...formData,
      });

      if (response.data.success) {
        setResults(response.data.data);
      } else {
        setResults("");
      }
    } catch (error) {
      console.error("SCRIPT GENERATOR ERROR:", error);
      console.error("RESPONSE:", error.response);
      console.error("REQUEST:", error.request);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Failed to generate script"
      );

      setResults("");
    } finally {
      setLoading(false);
    }
  };

  const copyScript = async () => {
    try {
      await navigator.clipboard.writeText(results);
      alert("Script copied!");
    } catch (error) {
      console.error("COPY ERROR:", error);
    }
  };

  return (
    <>
      <ToolLayout>
        <ToolHeader
          title="AI Script Generator"
          description="Generate structured and engaging YouTube video scripts from your topic."
        />

        <ToolForm
          onGenerate={handleGenerate}
          loading={loading}
          config={{
            buttonText: "Generate Script",
            topicLabel: "Video Topic",
            topicPlaceholder: "Example: How to Learn React",
            initialTopic: query,
            showCount: false,
          }}
        />

        <ToolOutput
          results={results}
          loading={loading}
          onCopy={copyScript}
          onCopyAll={copyScript}
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
              How to Use the YouTube Script Generator
            </h2>

            <p className="mt-3 text-muted-foreground">
              TubeKit's AI YouTube Script Generator helps creators turn a
              video topic into a structured script. Enter your topic and
              requirements, generate a draft, then review and customize it
              before recording.
            </p>

            <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
              <li>Enter the topic or idea for your YouTube video.</li>
              <li>Provide any relevant details or requirements.</li>
              <li>Click the Generate Script button.</li>
              <li>Review the generated script.</li>
              <li>Edit the script to match your voice and audience.</li>
              <li>Use the final script as a guide while recording.</li>
            </ol>
          </div>

          {/* What is a YouTube Script */}
          <div>
            <h2 className="text-2xl font-bold">
              What Is a YouTube Script?
            </h2>

            <p className="mt-3 text-muted-foreground">
              A YouTube script is a written plan for a video. It can
              organize the introduction, main points, examples, transitions,
              and conclusion before recording begins.
            </p>

            <p className="mt-3 text-muted-foreground">
              A structured script can make it easier to stay focused and
              present information clearly. However, the final script should
              be adapted to the creator's natural speaking style.
            </p>
          </div>

          {/* Script Structure */}
          <div>
            <h2 className="text-2xl font-bold">
              YouTube Script Structure
            </h2>

            <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>An opening that introduces the video's topic.</li>
              <li>A clear explanation of the main subject.</li>
              <li>
                Useful examples, details, or supporting information.
              </li>
              <li>Natural transitions between different sections.</li>
              <li>A conclusion that summarizes the main points.</li>
              <li>A relevant call to action when appropriate.</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold">
              Features
            </h2>

            <ul className="mt-5 grid gap-3 text-muted-foreground sm:grid-cols-2">
              <li>✓ AI-generated script drafts</li>
              <li>✓ Topic-based content</li>
              <li>✓ Structured video scripts</li>
              <li>✓ Multiple content ideas</li>
              <li>✓ Easy copy functionality</li>
              <li>✓ Free to use</li>
            </ul>
          </div>

          {/* Tips */}
          <div>
            <h2 className="text-2xl font-bold">
              Tips for Better YouTube Scripts
            </h2>

            <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Know who the video is intended for.</li>
              <li>Start with a clear purpose for the video.</li>
              <li>Keep the structure easy to follow.</li>
              <li>Use examples where they make the topic clearer.</li>
              <li>Write in a natural speaking style.</li>
              <li>Review AI-generated information before publishing.</li>
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
                  What is an AI YouTube script generator?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  It is a tool that creates a draft video script based on a
                  topic or instructions provided by the creator.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Can I edit the generated script?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Yes. AI-generated scripts should be reviewed and customized
                  to match your voice, audience, and the actual information
                  in your video.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Can I use the generator for YouTube Shorts?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Yes. Short-form video scripts can also be created by
                  providing a focused topic and concise requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Should I publish an AI-generated script without editing it?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  It is better to review and edit the generated draft first.
                  Verify factual information and make the script sound
                  natural for your audience.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Is the TubeKit AI Script Generator free?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  TubeKit provides the AI Script Generator as a free tool for
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

export default ScriptGenerator;