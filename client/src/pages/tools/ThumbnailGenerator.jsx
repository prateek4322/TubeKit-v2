import { useState } from "react";
import api from "@/services/api";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";
import ToolOutput from "@/components/tool-layout/ToolOutput";

function ThumbnailGenerator({ query = "" }) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [lastFormData, setLastFormData] = useState(null);

  const handleGenerate = async (formData) => {
    try {
      setLoading(true);
      setLastFormData(formData);

      const response = await api.post("/generate", {
        tool: "thumbnail-generator",
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
      console.error("THUMBNAIL GENERATOR ERROR:", error);
      console.error("RESPONSE:", error.response);
      console.error("REQUEST:", error.request);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Failed to generate thumbnail ideas"
      );

      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const copyIdea = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch (error) {
      console.error("COPY ERROR:", error);
    }
  };

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(results.join("\n"));
      alert("All ideas copied!");
    } catch (error) {
      console.error("COPY ALL ERROR:", error);
    }
  };

  return (
    <>
      <ToolLayout>
        <ToolHeader
          title="AI Thumbnail Generator"
          description="Generate creative YouTube thumbnail concepts based on your video topic."
        />

        <ToolForm
          onGenerate={handleGenerate}
          loading={loading}
          config={{
            buttonText: "Generate Ideas",
            topicLabel: "Video Topic",
            topicPlaceholder: "Example: Learn React in 30 Days",
            initialTopic: query,
            showTone: false,
            showCount: false,
          }}
        />

        <ToolOutput
          results={results}
          loading={loading}
          onCopy={copyIdea}
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
              How to Use the YouTube Thumbnail Generator
            </h2>

            <p className="mt-3 text-muted-foreground">
              TubeKit's AI YouTube Thumbnail Generator helps creators develop
              thumbnail concepts based on their video topic. Enter your topic,
              generate ideas, review the suggestions, and adapt the concept to
              match your video's content and visual style.
            </p>

            <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
              <li>Enter the topic or main idea of your YouTube video.</li>
              <li>Click the Generate Thumbnail Ideas button.</li>
              <li>Review the generated thumbnail concepts.</li>
              <li>
                Choose a concept that represents your video's actual content.
              </li>
              <li>
                Use the concept as a guide when creating your final thumbnail.
              </li>
            </ol>
          </div>

          {/* What Makes a Good Thumbnail */}
          <div>
            <h2 className="text-2xl font-bold">
              What Makes a Good YouTube Thumbnail?
            </h2>

            <p className="mt-3 text-muted-foreground">
              A YouTube thumbnail gives viewers a visual preview of a video.
              A useful thumbnail should communicate the subject clearly and be
              easy to understand at a small size.
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Use a clear visual that relates to the video.</li>
              <li>Keep the main subject easy to identify.</li>
              <li>Use readable text when text is necessary.</li>
              <li>
                Create enough visual contrast between important elements.
              </li>
              <li>
                Avoid misleading images that do not represent the video.
              </li>
            </ul>
          </div>

          {/* Thumbnail Elements */}
          <div>
            <h2 className="text-2xl font-bold">
              Important Thumbnail Elements
            </h2>

            <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Main subject:</strong> Make the primary person, object,
                or idea easy to recognize.
              </li>

              <li>
                <strong>Short text:</strong> Use only the words necessary to
                communicate the main idea.
              </li>

              <li>
                <strong>Visual hierarchy:</strong> Make the most important
                element stand out first.
              </li>

              <li>
                <strong>Consistency:</strong> Keep the design aligned with
                your channel's overall visual style.
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold">
              Features
            </h2>

            <ul className="mt-5 grid gap-3 text-muted-foreground sm:grid-cols-2">
              <li>✓ AI-generated thumbnail concepts</li>
              <li>✓ Topic-based ideas</li>
              <li>✓ Visual composition suggestions</li>
              <li>✓ Text and design ideas</li>
              <li>✓ Multiple concept variations</li>
              <li>✓ Free to use</li>
            </ul>
          </div>

          {/* Tips */}
          <div>
            <h2 className="text-2xl font-bold">
              Tips for Better YouTube Thumbnails
            </h2>

            <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Make the subject recognizable at a small size.</li>
              <li>
                Keep the design simple instead of overcrowding it.
              </li>
              <li>Use text only when it adds useful context.</li>
              <li>
                Make sure the thumbnail accurately represents the video.
              </li>
              <li>
                Maintain a consistent visual identity across your channel.
              </li>
              <li>
                Test different concepts to learn what works for your audience.
              </li>
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
                  What is an AI YouTube thumbnail generator?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  It is a tool that generates thumbnail concepts and design
                  ideas based on the topic of a YouTube video.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Can AI create a complete YouTube thumbnail?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  It depends on the tool. A thumbnail idea generator provides
                  concepts and creative direction that can be used to create
                  the final thumbnail.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  What should I put on a YouTube thumbnail?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Use a clear visual that represents the video and, when
                  useful, a short amount of readable text. Avoid unnecessary
                  elements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Should my thumbnail match my video title?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  The thumbnail and title should work together and accurately
                  communicate what viewers can expect from the video.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Is the TubeKit Thumbnail Generator free?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  TubeKit provides the AI Thumbnail Generator as a free tool
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

export default ThumbnailGenerator;