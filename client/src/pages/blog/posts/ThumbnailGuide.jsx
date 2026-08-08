import { Link } from "react-router-dom";

function ThumbnailGuide() {
  return (
    <div className="space-y-8 text-base leading-8 text-slate-300">
      <section>
        <h2 className="text-2xl font-bold text-white">
          Why YouTube Thumbnails Matter
        </h2>

        <p className="mt-4">
          A YouTube thumbnail gives viewers a quick visual idea of what
          your video is about. Along with the title, it can influence
          whether someone decides to explore the video.
        </p>

        <p className="mt-4">
          A good thumbnail should be clear, relevant to the video, and easy
          to understand across different screen sizes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          1. Keep the Main Idea Clear
        </h2>

        <p className="mt-4">
          A viewer should be able to understand the main subject of the
          thumbnail quickly. Avoid filling the design with too many
          unrelated elements.
        </p>

        <p className="mt-4">
          Choose one primary visual idea and build the thumbnail around
          it.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          2. Use Short, Readable Text
        </h2>

        <p className="mt-4">
          Text can help communicate an important idea, but too much text
          can make a thumbnail difficult to understand, especially on
          mobile screens.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Use short phrases.</li>
          <li>Make the text easy to read.</li>
          <li>Keep important words prominent.</li>
          <li>Avoid repeating the entire video title.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          3. Make the Subject Easy to Recognize
        </h2>

        <p className="mt-4">
          Whether your thumbnail features a person, product, screenshot,
          object, or illustration, the primary subject should be visually
          clear.
        </p>

        <p className="mt-4">
          Remove unnecessary elements that compete with the main subject.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          4. Create a Strong Visual Contrast
        </h2>

        <p className="mt-4">
          Contrast can make important elements easier to distinguish.
          Consider the relationship between the background, subject, and
          any text you include.
        </p>

        <p className="mt-4">
          The goal is not to make every element extremely bright or
          saturated. The goal is to create a clear visual hierarchy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          5. Make the Thumbnail Match the Video
        </h2>

        <p className="mt-4">
          A thumbnail should accurately represent the content viewers will
          find after clicking. Avoid using an image or claim that creates
          an expectation the video does not satisfy.
        </p>

        <p className="mt-4">
          Accurate thumbnails help create a consistent experience between
          the click and the actual video.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          6. Make Your Thumbnail Work With Your Title
        </h2>

        <p className="mt-4">
          Your title and thumbnail are often viewed together. Instead of
          repeating the same words in both, use them to communicate
          complementary information.
        </p>

        <p className="mt-4">
          For example, the thumbnail can highlight a visual result while
          the title explains the specific topic or benefit.
        </p>

        <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <p className="text-sm leading-7 text-slate-300">
            Need title ideas too? Try the{" "}
            <Link
              to="/tools/title-generator"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              TubeKit AI Title Generator
            </Link>
            .
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          7. Check Your Thumbnail at Small Sizes
        </h2>

        <p className="mt-4">
          A thumbnail may appear at different sizes across YouTube.
          Something that looks clear when designing it on a large monitor
          may become difficult to understand when displayed smaller.
        </p>

        <p className="mt-4">
          Before publishing, check whether the main subject and important
          text remain recognizable at a smaller size.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Common Thumbnail Mistakes
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Using too many visual elements.</li>
          <li>Adding too much text.</li>
          <li>Making text difficult to read.</li>
          <li>Using an image unrelated to the video.</li>
          <li>Repeating the complete title on the thumbnail.</li>
          <li>Creating a design that becomes unclear at small sizes.</li>
          <li>Using misleading visual claims.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          A Simple YouTube Thumbnail Workflow
        </h2>

        <ol className="mt-5 list-decimal space-y-3 pl-6">
          <li>Identify the main idea of the video.</li>
          <li>Choose one primary visual subject.</li>
          <li>Create a simple visual hierarchy.</li>
          <li>Add short text only if it improves clarity.</li>
          <li>Check the design at a small size.</li>
          <li>Make sure the thumbnail accurately represents the video.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Generate Thumbnail Ideas With TubeKit
        </h2>

        <p className="mt-4">
          Coming up with a visual concept can sometimes take longer than
          expected. An AI thumbnail tool can help generate starting ideas
          based on your video topic.
        </p>

        <p className="mt-4">
          Review the generated concepts and adapt them to your actual
          content, branding, and audience.
        </p>

        <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Try TubeKit Thumbnail Generator
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Generate thumbnail concept ideas for your next YouTube video.
          </p>

          <Link
            to="/tools/thumbnail-generator"
            className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Generate Thumbnail Ideas →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ThumbnailGuide;