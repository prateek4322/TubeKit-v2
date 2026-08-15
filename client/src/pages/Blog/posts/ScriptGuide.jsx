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

function ScriptGuide() {
  return (
    <article className="space-y-12 text-base leading-8 text-slate-300">

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            YouTube Script Writing Guide
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            How to Write a YouTube Script
          </h1>

          <p className="mt-5">
            A YouTube script gives a video a clear structure before
            recording begins. It can help creators organize their ideas,
            avoid unnecessary sections, and make sure the important
            information is covered.
          </p>

          <p className="mt-4">
            A script does not always need to be written word-for-word. The
            right format depends on the type of video, the creator's style,
            and how comfortable they are speaking without a full script.
          </p>

        </div>
      </section>

      {/* =====================================================
          WHY SCRIPTS MATTER
      ====================================================== */}

      <section>
        <RgybHeading>
          Why YouTube Scripts Matter
        </RgybHeading>

        <p className="mt-5">
          A well-planned script can make the recording process more
          organized and help keep the video focused on its main purpose.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {[
            [
              "01",
              "Structure",
              "Organize the main points before recording.",
            ],
            [
              "02",
              "Clarity",
              "Reduce unnecessary information and repetition.",
            ],
            [
              "03",
              "Consistency",
              "Create a repeatable workflow for future videos.",
            ],
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
          1
      ====================================================== */}

      <section>
        <RgybHeading number="1.">
          Start With the Main Idea
        </RgybHeading>

        <p className="mt-5">
          Before writing the script, define exactly what the viewer should
          learn, understand, or experience by the end of the video.
        </p>

        <p className="mt-4">
          A clear main idea makes it easier to remove information that does
          not contribute to the video's purpose.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
          <p className="font-semibold text-white">
            Ask yourself:
          </p>

          <p className="mt-3">
            "What is the one main thing I want the viewer to take away from
            this video?"
          </p>
        </div>
      </section>

      {/* =====================================================
          2
      ====================================================== */}

      <section>
        <RgybHeading number="2.">
          Understand Your Audience
        </RgybHeading>

        <p className="mt-5">
          Think about the knowledge level, interests, and problems of the
          people watching the video. A beginner tutorial should be
          structured differently from an advanced technical explanation.
        </p>

        <p className="mt-4">
          Knowing your audience also helps you choose the right language,
          examples, pacing, and level of detail.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
            <h3 className="font-semibold text-white">
              Beginner Audience
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Use simple explanations, definitions, examples, and
              step-by-step instructions.
            </p>
          </div>

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
            <h3 className="font-semibold text-white">
              Advanced Audience
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              You can assume more background knowledge and focus on deeper
              explanations or practical details.
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          3 HOOK
      ====================================================== */}

      <section>
        <RgybHeading number="3.">
          Write a Strong Opening
        </RgybHeading>

        <p className="mt-5">
          The opening should quickly establish the topic and give viewers
          a reason to continue watching. Avoid unnecessary introductions
          that delay the main subject.
        </p>

        <p className="mt-4">
          You can start with a question, problem, result, surprising fact,
          or direct explanation of what the viewer will learn.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
            <p className="font-semibold text-red-400">
              Avoid
            </p>

            <p className="mt-3">
              Long introductions that delay the main subject.
            </p>
          </div>

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
            <p className="font-semibold text-green-400">
              Better
            </p>

            <p className="mt-3">
              Start with the problem, question, result, or useful idea.
            </p>
          </div>

        </div>

        <div className="mt-6">
          <ToolLink
            to="/tools/hook-generator"
            primary
          >
            Generate YouTube Hook Ideas →
          </ToolLink>
        </div>
      </section>

      {/* =====================================================
          4 STRUCTURE
      ====================================================== */}

      <section>
        <RgybHeading number="4.">
          Create a Simple Video Structure
        </RgybHeading>

        <p className="mt-5">
          Divide the video into logical sections. A simple structure can
          make both recording and editing easier.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 sm:p-8">

          <ol className="space-y-4">

            {[
              "Hook and introduction.",
              "Explain the problem or topic.",
              "Present the main information.",
              "Give examples or demonstrations.",
              "Summarize the key points.",
              "Provide an appropriate next step.",
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
            to="/tools/outline-generator"
            primary
          >
            Create a Video Outline →
          </ToolLink>

          <ToolLink to="/tools/script-generator">
            Generate Script →
          </ToolLink>

        </div>
      </section>

      {/* =====================================================
          5
      ====================================================== */}

      <section>
        <RgybHeading number="5.">
          Keep Each Section Focused
        </RgybHeading>

        <p className="mt-5">
          Each section should have a clear purpose. If several points are
          unrelated, consider separating them into different sections or
          videos.
        </p>

        <p className="mt-4">
          Focused sections make it easier for viewers to follow the
          information and for creators to edit the final video.
        </p>

        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="font-semibold text-white">
            Simple rule:
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            If a section does not support the main purpose of the video,
            consider removing it or moving it to another video.
          </p>
        </div>
      </section>

      {/* =====================================================
          6
      ====================================================== */}

      <section>
        <RgybHeading number="6.">
          Use Examples
        </RgybHeading>

        <p className="mt-5">
          Examples can make abstract information easier to understand.
          Whenever possible, connect an idea to a realistic situation,
          demonstration, or practical use case.
        </p>

        <p className="mt-4">
          The examples should support the main topic rather than becoming
          unrelated stories that make the video longer without adding
          value.
        </p>

        <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
          <p className="font-semibold text-green-400">
            Useful example structure
          </p>

          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li>Introduce the concept.</li>
            <li>Show a realistic example.</li>
            <li>Explain why the example matters.</li>
          </ol>
        </div>
      </section>

      {/* =====================================================
          7
      ====================================================== */}

      <section>
        <RgybHeading number="7.">
          Write for Speaking, Not Just Reading
        </RgybHeading>

        <p className="mt-5">
          A script can look natural on a page but sound unnatural when
          spoken aloud. Use sentences and transitions that match the way
          people normally communicate.
        </p>

        <p className="mt-4">
          Reading the script aloud before recording can help identify
          awkward phrases and sections that need simplification.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">

          <ul className="space-y-3">

            <li>
              <span className="mr-2 text-yellow-300">
                ✓
              </span>
              Use natural sentences.
            </li>

            <li>
              <span className="mr-2 text-yellow-300">
                ✓
              </span>
              Avoid unnecessary repetition.
            </li>

            <li>
              <span className="mr-2 text-yellow-300">
                ✓
              </span>
              Read the script aloud before recording.
            </li>

          </ul>

        </div>
      </section>

      {/* =====================================================
          8
      ====================================================== */}

      <section>
        <RgybHeading number="8.">
          Add a Clear Conclusion
        </RgybHeading>

        <p className="mt-5">
          The conclusion should briefly reinforce the main takeaway.
          Depending on the video, you can also direct viewers toward a
          related resource or another useful piece of content.
        </p>

        <p className="mt-4">
          Avoid extending the ending unnecessarily after the main value of
          the video has already been delivered.
        </p>
      </section>

      {/* =====================================================
          COMMON MISTAKES
      ====================================================== */}

      <section>
        <RgybHeading>
          Common YouTube Script Mistakes
        </RgybHeading>

        <p className="mt-5">
          A good script is not only about adding information. It is also
          about removing unnecessary material and keeping the video focused.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Starting with an unnecessarily long introduction.",
            "Trying to cover too many unrelated topics.",
            "Writing language that sounds unnatural when spoken.",
            "Repeating the same information.",
            "Using examples that do not support the main topic.",
            "Ignoring the target audience.",
            "Ending without a clear conclusion.",
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
          TEMPLATE
      ====================================================== */}

      <section>
        <RgybHeading>
          Simple YouTube Script Template
        </RgybHeading>

        <div className="mt-6 space-y-4">

          {[
            [
              "01",
              "Hook",
              "Introduce the main problem, question, or result.",
              "red",
            ],
            [
              "02",
              "Introduction",
              "Explain what the viewer will learn.",
              "yellow",
            ],
            [
              "03",
              "Main Content",
              "Explain the important points and provide examples.",
              "green",
            ],
            [
              "04",
              "Conclusion",
              "Summarize the key takeaway and provide the next step.",
              "blue",
            ],
          ].map(([number, title, description, color]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-start gap-4">

                <span
                  className={
                    color === "red"
                      ? "font-bold text-red-400"
                      : color === "yellow"
                      ? "font-bold text-yellow-300"
                      : color === "green"
                      ? "font-bold text-green-400"
                      : "font-bold text-blue-400"
                  }
                >
                  {number}
                </span>

                <div>
                  <h3 className="font-semibold text-white">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-slate-400">
                    {description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          SCRIPT WORKFLOW
      ====================================================== */}

      <section>
        <RgybHeading>
          YouTube Script Writing Workflow
        </RgybHeading>

        <p className="mt-5">
          A repeatable workflow can make script creation faster while
          keeping the content focused.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 sm:p-8">

          <ol className="space-y-4">

            {[
              "Choose a specific video topic.",
              "Understand the target audience.",
              "Define the main takeaway.",
              "Create a strong hook.",
              "Build the video outline.",
              "Write the main content and examples.",
              "Write a concise conclusion.",
              "Read and edit the script before recording.",
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
      </section>

      {/* =====================================================
          TUBEKIT TOOLS
      ====================================================== */}

      <section>
        <RgybHeading>
          TubeKit Tools for YouTube Script Creation
        </RgybHeading>

        <p className="mt-5">
          TubeKit provides AI-powered tools that can help creators with
          different stages of the YouTube content planning process.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {[
            [
              "Hook Generator",
              "Create opening ideas for your video.",
              "/tools/hook-generator",
            ],
            [
              "Outline Generator",
              "Organize your video's main sections.",
              "/tools/outline-generator",
            ],
            [
              "Script Generator",
              "Generate a starting script draft.",
              "/tools/script-generator",
            ],
            [
              "Title Generator",
              "Explore different title ideas.",
              "/tools/title-generator",
            ],
            [
              "Keyword Generator",
              "Find relevant topic and keyword ideas.",
              "/tools/keyword-generator",
            ],
            [
              "Thumbnail Generator",
              "Explore visual concepts for your video.",
              "/tools/thumbnail-generator",
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
          AI SCRIPT NOTE
      ====================================================== */}

      <section>
        <RgybHeading>
          Using AI to Write YouTube Scripts
        </RgybHeading>

        <p className="mt-5">
          AI can help creators generate a starting structure or draft for a
          YouTube script. The generated content should then be reviewed,
          edited, and adapted to the creator's own knowledge, voice, and
          audience.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">

          <p className="font-semibold text-white">
            Best practice
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Treat AI output as a starting point rather than a final script.
            Add your own examples, experience, opinions where appropriate,
            and verify important information before recording.
          </p>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <h2 className="text-2xl font-bold text-white">
            Create Your YouTube Script With TubeKit
          </h2>

          <p className="mt-3 text-slate-400">
            Generate a starting script for your YouTube video and customize
            it before recording.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <ToolLink
              to="/tools/script-generator"
              primary
            >
              Generate YouTube Script →
            </ToolLink>

            <ToolLink to="/tools/hook-generator">
              Generate Hook →
            </ToolLink>

            <ToolLink to="/tools/outline-generator">
              Generate Outline →
            </ToolLink>

          </div>

        </div>
      </section>

    </article>
  );
}

export default ScriptGuide;