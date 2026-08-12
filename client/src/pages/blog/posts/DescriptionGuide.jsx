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

function DescriptionGuide() {
  return (
    <article className="space-y-12 text-base leading-8 text-slate-300">

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            YouTube Description Guide
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            How to Write a YouTube Description That Helps Viewers
          </h1>

          <p className="mt-5">
            A YouTube description gives viewers additional information about
            your video. It can explain what the video covers, provide useful
            links, add context, and help viewers understand what they can
            expect from the content.
          </p>

          <p className="mt-4">
            A useful description should be written primarily for people.
            Keywords can be included naturally when they accurately describe
            the video, but repeatedly adding keywords can make the
            description difficult to read.
          </p>

        </div>
      </section>

      {/* =====================================================
          WHY DESCRIPTIONS MATTER
      ====================================================== */}

      <section>
        <RgybHeading>
          Why YouTube Descriptions Matter
        </RgybHeading>

        <p className="mt-5">
          Your YouTube description provides additional context about your
          video and can help viewers understand the topic before or after
          watching.
        </p>

        <p className="mt-4">
          It can also provide links, resources, timestamps, additional
          information, and relevant calls to action.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            [
              "Explain",
              "Tell viewers what the video is about.",
              "red",
            ],
            [
              "Inform",
              "Provide useful context and resources.",
              "yellow",
            ],
            [
              "Organize",
              "Use sections and timestamps when useful.",
              "green",
            ],
            [
              "Guide",
              "Give viewers a relevant next step.",
              "blue",
            ],
          ].map(([title, description, color]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3
                className={
                  color === "red"
                    ? "font-semibold text-red-400"
                    : color === "yellow"
                    ? "font-semibold text-yellow-300"
                    : color === "green"
                    ? "font-semibold text-green-400"
                    : "font-semibold text-blue-400"
                }
              >
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
          1 INTRODUCTION
      ====================================================== */}

      <section>
        <RgybHeading number="1.">
          Start With a Clear Introduction
        </RgybHeading>

        <p className="mt-5">
          The beginning of your description should quickly explain what the
          video is about. Mention the main topic and the value viewers can
          expect from watching.
        </p>

        <p className="mt-4">
          Avoid starting with unnecessary information. Put the most useful
          context near the beginning so viewers can understand the video
          quickly.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

          <h3 className="font-semibold text-white">
            A simple opening structure
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-400">

            <p>
              <span className="font-semibold text-blue-400">
                What:
              </span>{" "}
              Explain the main subject.
            </p>

            <p>
              <span className="font-semibold text-green-400">
                Why:
              </span>{" "}
              Tell viewers why the content is useful.
            </p>

            <p>
              <span className="font-semibold text-yellow-300">
                What next:
              </span>{" "}
              Briefly explain what the video covers.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          2 WHAT VIEWERS LEARN
      ====================================================== */}

      <section>
        <RgybHeading number="2.">
          Explain What Viewers Will Learn
        </RgybHeading>

        <p className="mt-5">
          A good description can summarize the main points covered in the
          video. This is particularly useful for tutorials, educational
          videos, reviews, and other content where viewers want to know what
          they will learn.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Explain the main topic.",
            "Mention important sections or topics.",
            "Describe the main benefit of watching.",
            "Keep the information accurate.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-green-500/20 bg-green-500/5 p-4"
            >
              <span className="mr-2 text-green-400">
                ✓
              </span>

              {item}
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          3 KEYWORDS
      ====================================================== */}

      <section>
        <RgybHeading number="3.">
          Use Relevant Keywords Naturally
        </RgybHeading>

        <p className="mt-5">
          Include words and phrases that accurately describe your video.
          Think about the language your audience would naturally use when
          searching for information about the topic.
        </p>

        <p className="mt-4">
          Do not turn the description into a list of unrelated search
          terms. Write naturally and prioritize useful information.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

          <h3 className="font-semibold text-white">
            Find Relevant Keyword Ideas
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Use keyword research to understand relevant topics and phrases,
            then include them only when they naturally fit your actual
            video.
          </p>

          <div className="mt-5">
            <ToolLink
              to="/tools/keyword-generator"
              primary
            >
              Generate YouTube Keywords →
            </ToolLink>
          </div>

        </div>
      </section>

      {/* =====================================================
          4 LINKS
      ====================================================== */}

      <section>
        <RgybHeading number="4.">
          Add Useful Links
        </RgybHeading>

        <p className="mt-5">
          If your video refers to a website, resource, product, social
          profile, or another relevant page, you can include the appropriate
          link in the description.
        </p>

        <p className="mt-4">
          Keep links relevant to the video and organize them clearly so
          viewers can understand where each link leads.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">

          <h3 className="font-semibold text-yellow-300">
            Example Link Structure
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-400">

            <li>
              <span className="font-semibold text-white">
                Official Website:
              </span>{" "}
              Relevant website or resource
            </li>

            <li>
              <span className="font-semibold text-white">
                Recommended Tool:
              </span>{" "}
              Tool directly related to the video
            </li>

            <li>
              <span className="font-semibold text-white">
                Related Video:
              </span>{" "}
              Another useful piece of content
            </li>

          </ul>

        </div>
      </section>

      {/* =====================================================
          5 TIMESTAMPS
      ====================================================== */}

      <section>
        <RgybHeading number="5.">
          Add Timestamps When Useful
        </RgybHeading>

        <p className="mt-5">
          Longer videos can benefit from timestamps that help viewers move
          directly to important sections. Use clear and descriptive labels
          for each section.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">

          <p className="font-semibold text-yellow-300">
            Example:
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-400">

            <li>00:00 Introduction</li>
            <li>01:25 Getting Started</li>
            <li>04:10 Main Strategy</li>
            <li>08:35 Common Mistakes</li>
            <li>11:20 Final Tips</li>

          </ul>

        </div>
      </section>

      {/* =====================================================
          6 CTA
      ====================================================== */}

      <section>
        <RgybHeading number="6.">
          Include a Clear Call to Action
        </RgybHeading>

        <p className="mt-5">
          When appropriate, tell viewers what they can do next. This could
          include watching another relevant video, visiting a resource,
          subscribing to the channel, or trying a useful tool.
        </p>

        <p className="mt-4">
          Keep the call to action relevant instead of adding a long list of
          unrelated requests.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {[
            [
              "Watch Next",
              "Direct viewers to another relevant video.",
            ],
            [
              "Learn More",
              "Provide a useful resource or website.",
            ],
            [
              "Take Action",
              "Suggest a relevant tool or next step.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="font-semibold text-white">
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
          DESCRIPTION STRUCTURE
      ====================================================== */}

      <section>
        <RgybHeading>
          YouTube Description Structure
        </RgybHeading>

        <p className="mt-5">
          A simple structure can make descriptions easier to write and
          easier for viewers to understand.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 sm:p-8">

          <ol className="space-y-4">

            {[
              "Short introduction to the video.",
              "Summary of the main information.",
              "Important links or resources.",
              "Timestamps for longer videos.",
              "Relevant call to action.",
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
          DESCRIPTION TEMPLATE
      ====================================================== */}

      <section>
        <RgybHeading>
          Simple YouTube Description Template
        </RgybHeading>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-red-400">
                Introduction
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Explain what the video is about and what viewers will
                learn.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-yellow-300">
                Main Content
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Summarize the important points covered in the video.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-400">
                Resources
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Add useful and relevant links or references.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-400">
                Timestamps
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Add timestamps when they make navigation easier.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Call to Action
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Give viewers one relevant next step.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          COMMON MISTAKES
      ====================================================== */}

      <section>
        <RgybHeading>
          Common YouTube Description Mistakes
        </RgybHeading>

        <p className="mt-5">
          Avoid treating the description as a place to insert as many
          keywords or links as possible. The content should remain useful
          and relevant to the actual video.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Using unrelated keywords.",
            "Writing a description that does not match the video.",
            "Adding excessive repetitive text.",
            "Leaving important resources difficult to find.",
            "Using misleading information.",
            "Ignoring the viewer's need for useful context.",
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
          DESCRIPTION + SEO WORKFLOW
      ====================================================== */}

      <section>
        <RgybHeading>
          YouTube Description SEO Workflow
        </RgybHeading>

        <p className="mt-5">
          A description works best as part of a broader YouTube content
          workflow rather than as an isolated SEO task.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {[
            [
              "01",
              "Research Topic",
              "Understand the audience and topic.",
              "/tools/keyword-generator",
            ],
            [
              "02",
              "Create Title",
              "Develop a clear and relevant title.",
              "/tools/title-generator",
            ],
            [
              "03",
              "Write Description",
              "Summarize the actual video content.",
              "/tools/description-generator",
            ],
            [
              "04",
              "Create Script",
              "Structure the information before recording.",
              "/tools/script-generator",
            ],
            [
              "05",
              "Create Thumbnail",
              "Develop a clear visual concept.",
              "/tools/thumbnail-generator",
            ],
            [
              "06",
              "Review",
              "Check that everything accurately represents the video.",
              "/",
            ],
          ].map(([number, title, description, path]) => (
            <Link
              key={number}
              to={path}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-400/40 hover:bg-white/[0.06]"
            >
              <span className="text-sm font-bold text-green-400">
                {number}
              </span>

              <h3 className="mt-2 font-semibold text-white group-hover:text-blue-400">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                {description}
              </p>

              <span className="mt-3 inline-block text-sm font-semibold text-blue-400">
                Continue →
              </span>
            </Link>
          ))}

        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section>
        <RgybHeading>
          Frequently Asked Questions About YouTube Descriptions
        </RgybHeading>

        <div className="mt-6 space-y-5">

          {[
            [
              "What should I write in a YouTube description?",
              "Start by explaining what the video is about, summarize the important information, add relevant resources or links, include timestamps when useful, and provide an appropriate call to action.",
            ],
            [
              "Do YouTube descriptions help with SEO?",
              "Descriptions can provide additional context about a video's topic. Relevant information and keywords can be included naturally, but descriptions should not be treated as a keyword-stuffing field.",
            ],
            [
              "Should I add keywords to my YouTube description?",
              "Use relevant words and phrases naturally when they accurately describe the video. Avoid repeating keywords excessively or adding unrelated search terms.",
            ],
            [
              "Should I add links to my YouTube description?",
              "Relevant links can be useful when they provide additional information, resources, products, websites, or other destinations directly related to the video.",
            ],
            [
              "Should YouTube descriptions include timestamps?",
              "Timestamps can be useful for longer videos when they help viewers navigate between important sections.",
            ],
            [
              "Can TubeKit generate YouTube descriptions?",
              "Yes. TubeKit's AI Description Generator can create a starting draft based on your video topic. The generated description should be reviewed and customized before publishing.",
            ],
          ].map(([question, answer]) => (
            <div
              key={question}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {question}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                {answer}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Create Better YouTube Descriptions With TubeKit
          </h2>

          <p className="mt-3 text-slate-400">
            Writing descriptions manually for every video can take time.
            TubeKit's AI tools can help you generate a starting draft that
            you can review and customize for the actual video.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <ToolLink
              to="/tools/description-generator"
              primary
            >
              Generate YouTube Description →
            </ToolLink>

            <ToolLink to="/tools/keyword-generator">
              Find Keywords
            </ToolLink>

            <ToolLink to="/tools/title-generator">
              Generate Titles
            </ToolLink>

            <ToolLink to="/tools/script-generator">
              Generate Script
            </ToolLink>

          </div>

        </div>
      </section>

    </article>
  );
}

export default DescriptionGuide;