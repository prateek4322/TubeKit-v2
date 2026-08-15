import { Link } from "react-router-dom";

function RgybHeading({ number, children }) {
  return (
    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
      {number && (
        <span className="mr-2 text-red-400">
          {number}
        </span>
      )}

      <span className="text-yellow-300">
        {children}
      </span>
    </h2>
  );
}

function ToolLink({ to, children, primary = false }) {
  return (
    <Link
      to={to}
      className={
        primary
          ? "inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          : "inline-flex rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-green-400/40 hover:bg-white/[0.06]"
      }
    >
      {children}
    </Link>
  );
}

function ShortsGuide() {
  return (
    <article className="space-y-12 text-base leading-8 text-slate-300">

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            YouTube Shorts Guide
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            YouTube Shorts: Ideas, Tips and Content Workflow
          </h1>

          <p className="mt-5">
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

        </div>
      </section>

      {/* =====================================================
          WHAT ARE SHORTS
      ====================================================== */}

      <section>
        <RgybHeading>
          What Are YouTube Shorts?
        </RgybHeading>

        <p className="mt-5">
          YouTube Shorts are short-form videos designed for quick,
          mobile-friendly viewing. Creators can use Shorts to share
          educational content, entertainment, tutorials, commentary,
          product ideas, tips, facts, and other focused content.
        </p>

        <p className="mt-4">
          Because Shorts are designed around short-form viewing, creators
          should focus on one clear idea instead of trying to explain too
          many unrelated topics in one video.
        </p>
      </section>

      {/* =====================================================
          WHY CREATE SHORTS
      ====================================================== */}

      <section>
        <RgybHeading>
          Why Create YouTube Shorts?
        </RgybHeading>

        <p className="mt-5">
          Shorts can give creators another format for reaching viewers and
          experimenting with content ideas. They can also be useful for
          testing topics before developing longer videos.
        </p>

        <p className="mt-4">
          Shorts should still provide a clear reason for viewers to keep
          watching rather than simply being short versions of long videos.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {[
            ["01", "Experiment", "Test different content ideas."],
            ["02", "Reach", "Create focused short-form content."],
            ["03", "Learn", "Understand which topics interest viewers."],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="text-sm font-bold text-green-400">
                {number}
              </span>

              <h3 className="mt-2 font-semibold text-white">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                {description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          IDEA 1
      ====================================================== */}

      <section>
        <RgybHeading number="1.">
          Educational Tips
        </RgybHeading>

        <p className="mt-5">
          Share one useful tip in a short and focused format. Choose a
          specific problem instead of trying to explain an entire subject
          in one Short.
        </p>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2">

          {[
            "Quick YouTube tips.",
            "Software shortcuts.",
            "Study tips.",
            "Technology facts.",
            "Simple how-to tutorials.",
          ].map((item) => (
            <li
              key={item}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <span className="mr-2 text-green-400">
                ✓
              </span>
              {item}
            </li>
          ))}

        </ul>
      </section>

      {/* =====================================================
          IDEA 2
      ====================================================== */}

      <section>
        <RgybHeading number="2.">
          Quick Tutorials
        </RgybHeading>

        <p className="mt-5">
          Demonstrate how to complete one specific task. Start by
          identifying the problem and then show the solution without
          unnecessary steps.
        </p>

        <p className="mt-4">
          A short tutorial works best when viewers can understand the
          outcome quickly.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
          <p className="font-semibold text-white">
            Simple tutorial structure
          </p>

          <ol className="mt-4 list-decimal space-y-2 pl-6">
            <li>Introduce the problem.</li>
            <li>Show the important steps.</li>
            <li>Demonstrate the result.</li>
          </ol>
        </div>
      </section>

      {/* =====================================================
          IDEA 3
      ====================================================== */}

      <section>
        <RgybHeading number="3.">
          Facts and Interesting Information
        </RgybHeading>

        <p className="mt-5">
          Share a useful or interesting fact related to your niche. Make
          sure the information is accurate and provide enough context to
          avoid creating a misleading impression.
        </p>

        <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
          <p className="text-sm leading-7 text-slate-300">
            Focus on one fact per Short and explain why that information
            matters to the viewer.
          </p>
        </div>
      </section>

      {/* =====================================================
          IDEA 4
      ====================================================== */}

      <section>
        <RgybHeading number="4.">
          Before-and-After Content
        </RgybHeading>

        <p className="mt-5">
          Show a clear transformation or improvement when the format makes
          sense for your niche.
        </p>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2">

          {[
            "Design improvements.",
            "Editing transformations.",
            "Room or workspace changes.",
            "Learning progress.",
            "Project development.",
          ].map((item) => (
            <li
              key={item}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <span className="mr-2 text-yellow-300">
                →
              </span>
              {item}
            </li>
          ))}

        </ul>
      </section>

      {/* =====================================================
          IDEA 5
      ====================================================== */}

      <section>
        <RgybHeading number="5.">
          Behind-the-Scenes Content
        </RgybHeading>

        <p className="mt-5">
          Show how you create your videos, prepare a project, edit content,
          or work on something related to your niche.
        </p>

        <p className="mt-4">
          Behind-the-scenes content can help viewers understand the process
          behind the finished result.
        </p>

        <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
          <p className="font-semibold text-green-400">
            Content idea
          </p>

          <p className="mt-2">
            Show the process first, then reveal the finished result.
          </p>
        </div>
      </section>

      {/* =====================================================
          IDEA 6
      ====================================================== */}

      <section>
        <RgybHeading number="6.">
          Answer Common Questions
        </RgybHeading>

        <p className="mt-5">
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
              YouTube Hook Generator
            </Link>{" "}
            to create starting ideas.
          </p>
        </div>
      </section>

      {/* =====================================================
          HOOK
      ====================================================== */}

      <section>
        <RgybHeading number="7.">
          Use a Strong Opening
        </RgybHeading>

        <p className="mt-5">
          The beginning of a Short should quickly communicate why the viewer
          should continue watching. Start with the main question, result,
          problem, or interesting idea.
        </p>

        <p className="mt-4">
          Avoid long introductions that delay the actual content.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
            <p className="font-semibold text-red-400">
              Avoid
            </p>

            <p className="mt-3">
              Long introductions that delay the main topic.
            </p>
          </div>

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
            <p className="font-semibold text-green-400">
              Better
            </p>

            <p className="mt-3">
              Start directly with the question, problem, result, or idea.
            </p>
          </div>

        </div>

        <div className="mt-6">
          <ToolLink
            to="/tools/hook-generator"
            primary
          >
            Generate Hook Ideas →
          </ToolLink>
        </div>
      </section>

      {/* =====================================================
          ONE IDEA
      ====================================================== */}

      <section>
        <RgybHeading number="8.">
          Keep One Clear Idea Per Short
        </RgybHeading>

        <p className="mt-5">
          Trying to explain too many unrelated ideas can make a Short
          difficult to follow. Choose one main idea and structure the video
          around it.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">

          <ol className="list-decimal space-y-3 pl-6">
            <li>Introduce the idea quickly.</li>
            <li>Explain or demonstrate it.</li>
            <li>Provide the useful result or takeaway.</li>
            <li>Finish with an appropriate next step.</li>
          </ol>

        </div>
      </section>

      {/* =====================================================
          MISTAKES
      ====================================================== */}

      <section>
        <RgybHeading>
          Common YouTube Shorts Mistakes
        </RgybHeading>

        <p className="mt-5">
          Avoiding common mistakes can make your Shorts clearer and easier
          to follow.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Using a long introduction.",
            "Trying to cover too many topics.",
            "Using misleading hooks.",
            "Ignoring audio quality.",
            "Adding unnecessary visual effects.",
            "Copying another creator without adding original value.",
            "Publishing without checking whether the content is useful.",
          ].map((mistake, index) => (
            <div
              key={mistake}
              className="rounded-xl border border-red-500/20 bg-red-500/5 p-4"
            >
              <span className="mr-2 font-bold text-red-400">
                {index + 1}.
              </span>

              {mistake}
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          WORKFLOW
      ====================================================== */}

      <section>
        <RgybHeading>
          Create a YouTube Shorts Content Workflow
        </RgybHeading>

        <p className="mt-5">
          A simple workflow can make Shorts easier to produce consistently.
          Start with a topic, create a hook, outline the main points, and
          then record and edit the video.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 sm:p-8">

          <ol className="space-y-4">

            {[
              "Choose a specific topic.",
              "Research the audience's question or problem.",
              "Create a strong opening.",
              "Write a short outline or script.",
              "Record the video.",
              "Edit for clarity and pacing.",
              "Review the final Short before publishing.",
            ].map((step, index) => (
              <li
                key={step}
                className="flex gap-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>

                <span>
                  {step}
                </span>
              </li>
            ))}

          </ol>

        </div>

        <div className="mt-6 flex flex-wrap gap-3">

          <ToolLink
            to="/tools/shorts-generator"
            primary
          >
            Generate Shorts Ideas →
          </ToolLink>

          <ToolLink to="/tools/script-generator">
            Generate Script →
          </ToolLink>

          <ToolLink to="/tools/outline-generator">
            Generate Outline →
          </ToolLink>

        </div>
      </section>

      {/* =====================================================
          TUBEKIT INTERNAL TOOLS
      ====================================================== */}

      <section>
        <RgybHeading>
          TubeKit Tools for YouTube Shorts
        </RgybHeading>

        <p className="mt-5">
          TubeKit provides AI-powered tools that can help creators plan
          different parts of their YouTube content workflow.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {[
            [
              "Shorts Generator",
              "Generate short-form video ideas.",
              "/tools/shorts-generator",
            ],
            [
              "Hook Generator",
              "Create opening hook ideas.",
              "/tools/hook-generator",
            ],
            [
              "Script Generator",
              "Create a starting script draft.",
              "/tools/script-generator",
            ],
            [
              "Outline Generator",
              "Organize your video structure.",
              "/tools/outline-generator",
            ],
            [
              "Title Generator",
              "Generate YouTube title ideas.",
              "/tools/title-generator",
            ],
            [
              "Hashtag Generator",
              "Generate relevant hashtag ideas.",
              "/tools/hashtag-generator",
            ],
          ].map(([title, description, path]) => (
            <Link
              key={title}
              to={path}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-400/40 hover:bg-white/[0.06]"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                {description}
              </p>

              <span className="mt-3 inline-block text-sm font-semibold text-blue-400">
                Use Tool →
              </span>
            </Link>
          ))}

        </div>
      </section>

      {/* =====================================================
          FINAL THOUGHTS
      ====================================================== */}

      <section>
        <RgybHeading>
          Final Thoughts
        </RgybHeading>

        <p className="mt-5">
          YouTube Shorts can be a useful format for experimenting with
          topics and reaching viewers with focused content. The key is to
          create a clear idea that provides value instead of trying to make
          every Short follow the same formula.
        </p>

        <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <h3 className="text-xl font-bold text-white">
            Plan Your Next YouTube Short
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            Use TubeKit to generate ideas and build a starting point for
            your next Short.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">

            <ToolLink
              to="/tools/shorts-generator"
              primary
            >
              Generate Shorts Ideas →
            </ToolLink>

            <ToolLink to="/tools/hook-generator">
              Generate Hooks →
            </ToolLink>

            <ToolLink to="/tools/script-generator">
              Generate Script →
            </ToolLink>

          </div>

        </div>
      </section>

    </article>
  );
}

export default ShortsGuide;