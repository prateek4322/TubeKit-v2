import { Link } from "react-router-dom";

function ShortsGuide() {
  return (
    <div className="space-y-8 text-base leading-8 text-slate-300">
      <section>
        <h2 className="text-2xl font-bold text-white">
          What Are YouTube Shorts?
        </h2>

        <p className="mt-4">
          YouTube Shorts are short-form videos designed for quick,
          mobile-friendly viewing. They can be used to share educational
          tips, entertainment, tutorials, commentary, product ideas, and
          many other types of content.
        </p>

        <p className="mt-4">
          The best Shorts are not necessarily the ones with the most
          complicated production. A clear idea, strong opening, and useful
          or entertaining content can make a Short easier to watch.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Why Create YouTube Shorts?
        </h2>

        <p className="mt-4">
          Shorts can give creators another format for reaching viewers and
          experimenting with content ideas. They can also be useful for
          testing topics before developing longer videos.
        </p>

        <p className="mt-4">
          Shorts should still provide a clear reason for viewers to keep
          watching rather than simply being short versions of long videos.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          1. Educational Tips
        </h2>

        <p className="mt-4">
          Share one useful tip in a short and focused format. Choose a
          specific problem instead of trying to explain an entire subject
          in one Short.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Quick YouTube tips.</li>
          <li>Software shortcuts.</li>
          <li>Study tips.</li>
          <li>Technology facts.</li>
          <li>Simple how-to tutorials.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          2. Quick Tutorials
        </h2>

        <p className="mt-4">
          Demonstrate how to complete one specific task. Start by
          identifying the problem and then show the solution without
          unnecessary steps.
        </p>

        <p className="mt-4">
          A short tutorial works best when viewers can understand the
          outcome quickly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          3. Facts and Interesting Information
        </h2>

        <p className="mt-4">
          Share a useful or interesting fact related to your niche. Make
          sure the information is accurate and provide enough context to
          avoid creating a misleading impression.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          4. Before-and-After Content
        </h2>

        <p className="mt-4">
          Show a clear transformation or improvement when the format makes
          sense for your niche.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Design improvements.</li>
          <li>Editing transformations.</li>
          <li>Room or workspace changes.</li>
          <li>Learning progress.</li>
          <li>Project development.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          5. Behind-the-Scenes Content
        </h2>

        <p className="mt-4">
          Show how you create your videos, prepare a project, edit content,
          or work on something related to your niche.
        </p>

        <p className="mt-4">
          Behind-the-scenes content can help viewers understand the process
          behind the finished result.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          6. Answer Common Questions
        </h2>

        <p className="mt-4">
          Turn frequently asked questions into individual Shorts. Focus on
          answering one question clearly instead of combining many topics
          into a single video.
        </p>

        <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <p className="text-sm leading-7 text-slate-300">
            Need help planning the opening? Try the{" "}
            <Link
              to="/tools/hook-generator"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              Hook Generator
            </Link>{" "}
            to create starting ideas.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          7. Use a Strong Opening
        </h2>

        <p className="mt-4">
          The beginning of a Short should quickly communicate why the viewer
          should continue watching. Start with the main question, result,
          problem, or interesting idea.
        </p>

        <p className="mt-4">
          Avoid long introductions that delay the actual content.
        </p>

        <Link
          to="/tools/hook-generator"
          className="mt-5 inline-flex font-semibold text-blue-400 hover:text-blue-300"
        >
          Generate Hook Ideas →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          8. Keep One Clear Idea Per Short
        </h2>

        <p className="mt-4">
          Trying to explain too many unrelated ideas can make a Short
          difficult to follow. Choose one main idea and structure the video
          around it.
        </p>

        <ol className="mt-5 list-decimal space-y-3 pl-6">
          <li>Introduce the idea quickly.</li>
          <li>Explain or demonstrate it.</li>
          <li>Provide the useful result or takeaway.</li>
          <li>Finish with an appropriate next step.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Common YouTube Shorts Mistakes
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Using a long introduction.</li>
          <li>Trying to cover too many topics.</li>
          <li>Using misleading hooks.</li>
          <li>Ignoring audio quality.</li>
          <li>Adding unnecessary visual effects.</li>
          <li>Copying another creator without adding original value.</li>
          <li>Publishing without checking whether the content is useful.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Create a Shorts Content Workflow
        </h2>

        <p className="mt-4">
          A simple workflow can make Shorts easier to produce consistently.
          Start with a topic, create a hook, outline the main points, and
          then record and edit the video.
        </p>

        <ol className="mt-5 list-decimal space-y-3 pl-6">
          <li>Choose a specific topic.</li>
          <li>Research the audience's question or problem.</li>
          <li>Create a strong opening.</li>
          <li>Write a short outline or script.</li>
          <li>Record the video.</li>
          <li>Edit for clarity and pacing.</li>
          <li>Review the final Short before publishing.</li>
        </ol>

        <Link
          to="/tools/shorts-generator"
          className="mt-5 inline-flex font-semibold text-blue-400 hover:text-blue-300"
        >
          Generate Shorts Ideas →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Final Thoughts
        </h2>

        <p className="mt-4">
          YouTube Shorts can be a useful format for experimenting with
          topics and reaching viewers with focused content. The key is to
          create a clear idea that provides value instead of trying to make
          every Short follow the same formula.
        </p>

        <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Plan Your Next YouTube Short
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Use TubeKit to generate ideas and build a starting point for
            your next Short.
          </p>

          <Link
            to="/tools/shorts-generator"
            className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Generate Shorts Ideas →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ShortsGuide;