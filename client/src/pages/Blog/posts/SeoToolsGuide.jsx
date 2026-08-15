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

function SeoToolsGuide() {
  return (
    <article className="space-y-12 text-base leading-8 text-slate-300">

      {/* INTRO */}

      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            YouTube SEO Guide
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            YouTube SEO Tools: Complete Guide for Creators
          </h1>

          <p className="mt-5">
            YouTube SEO is the process of making your video content easier
            for viewers and search systems to understand. It includes
            choosing relevant topics, creating useful titles and
            descriptions, researching keywords, and presenting the video
            with an accurate thumbnail.
          </p>

          <p className="mt-4">
            SEO is only one part of YouTube growth. The quality of the video,
            audience satisfaction, relevance, and overall content strategy
            also matter.
          </p>

        </div>
      </section>

      {/* WHAT IS SEO */}

      <section>
        <RgybHeading>
          What Is YouTube SEO?
        </RgybHeading>

        <p className="mt-5">
          YouTube SEO helps creators organize and present their content so
          that viewers and YouTube systems can better understand what a
          video is about.
        </p>

        <p className="mt-4">
          This can involve topic research, titles, descriptions, keywords,
          thumbnails, audience intent, and the overall quality and
          usefulness of the video.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            ["Topics", "Choose subjects relevant to your audience."],
            ["Keywords", "Understand terms related to your topic."],
            ["Titles", "Clearly communicate what the video offers."],
            ["Descriptions", "Provide useful context about the video."],
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

      {/* WHY TOOLS */}

      <section>
        <RgybHeading>
          Why YouTube SEO Tools Are Useful
        </RgybHeading>

        <p className="mt-5">
          Creating and optimizing videos manually can take a significant
          amount of time. Tools can help creators generate ideas, organize
          information, explore keywords, and create starting drafts.
        </p>

        <p className="mt-4">
          The best approach is to use generated suggestions as a starting
          point and then review them against the actual content of the
          video.
        </p>

        <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

          <p className="font-semibold text-green-400">
            Important
          </p>

          <p className="mt-2">
            AI-generated suggestions should be reviewed before publishing.
            Your final title, description, tags, keywords, and thumbnail
            should accurately represent the actual video.
          </p>

        </div>
      </section>

      {/* TITLE */}

      <section>
        <RgybHeading number="1.">
          YouTube Title Generator
        </RgybHeading>

        <p className="mt-5">
          A title generator can help create multiple title ideas from a
          single video topic. Having several options makes it easier to
          compare different ways of presenting the same content.
        </p>

        <p className="mt-4">
          Titles should remain accurate, understandable, and relevant to
          the video instead of relying on misleading claims.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
          <p className="font-semibold text-white">
            Good title principle
          </p>

          <p className="mt-2">
            Make the main subject understandable while keeping the title
            relevant to the actual content.
          </p>
        </div>

        <div className="mt-6">
          <ToolLink
            to="/tools/title-generator"
            primary
          >
            Try AI Title Generator →
          </ToolLink>
        </div>
      </section>

      {/* KEYWORD */}

      <section>
        <RgybHeading number="2.">
          YouTube Keyword Generator
        </RgybHeading>

        <p className="mt-5">
          Keyword research can help creators understand the terms and
          phrases associated with a topic. This can be useful when planning
          titles, descriptions, scripts, and video topics.
        </p>

        <p className="mt-4">
          Keywords should be relevant to the actual content. Avoid adding
          unrelated terms simply because they appear popular.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">

          {[
            "Topic keywords",
            "Long-tail phrases",
            "Audience questions",
            "Related search ideas",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4"
            >
              <span className="mr-2 text-yellow-300">
                #
              </span>
              {item}
            </div>
          ))}

        </div>

        <div className="mt-6">
          <ToolLink to="/tools/keyword-generator">
            Try Keyword Generator →
          </ToolLink>
        </div>
      </section>

      {/* DESCRIPTION */}

      <section>
        <RgybHeading number="3.">
          YouTube Description Generator
        </RgybHeading>

        <p className="mt-5">
          A description generator can help create a first draft for the
          video's description. It can be useful when a creator needs to
          summarize the topic, explain the content, and organize relevant
          information.
        </p>

        <p className="mt-4">
          Always review the generated description before publishing and
          remove anything that does not accurately describe the video.
        </p>

        <div className="mt-6">
          <ToolLink to="/tools/description-generator">
            Try Description Generator →
          </ToolLink>
        </div>
      </section>

      {/* TAGS */}

      <section>
        <RgybHeading number="4.">
          YouTube Tags Generator
        </RgybHeading>

        <p className="mt-5">
          A tags generator can provide related tag ideas based on a video
          topic. Tags can be useful for describing content, although
          creators should not rely on tags as their only YouTube SEO
          strategy.
        </p>

        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm leading-7 text-slate-400">
            Use tags that genuinely describe the subject, terminology, and
            relevant variations associated with your video.
          </p>
        </div>

        <div className="mt-6">
          <ToolLink to="/tools/tags-generator">
            Try Tags Generator →
          </ToolLink>
        </div>
      </section>

      {/* HASHTAGS */}

      <section>
        <RgybHeading number="5.">
          YouTube Hashtag Generator
        </RgybHeading>

        <p className="mt-5">
          Hashtag tools can help creators find topic-related hashtag ideas.
          Use hashtags that are genuinely relevant to the video rather
          than filling the description with unrelated terms.
        </p>

        <div className="mt-6">
          <ToolLink to="/tools/hashtag-generator">
            Try Hashtag Generator →
          </ToolLink>
        </div>
      </section>

      {/* SCRIPT */}

      <section>
        <RgybHeading number="6.">
          YouTube Script Generator
        </RgybHeading>

        <p className="mt-5">
          Script generators can help creators create an initial structure
          for a video. They can be particularly useful when planning an
          introduction, main sections, examples, and conclusion.
        </p>

        <p className="mt-4">
          Generated scripts should be edited so that the final video
          reflects the creator's own knowledge, voice, examples, and
          audience.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          <ToolLink
            to="/tools/script-generator"
            primary
          >
            Try Script Generator →
          </ToolLink>

          <ToolLink to="/tools/outline-generator">
            Create Outline →
          </ToolLink>

        </div>
      </section>

      {/* THUMBNAIL */}

      <section>
        <RgybHeading number="7.">
          YouTube Thumbnail Generator
        </RgybHeading>

        <p className="mt-5">
          Thumbnail idea generators can help creators explore visual
          concepts before designing the final thumbnail. A strong concept
          should make the video's subject easy to understand.
        </p>

        <p className="mt-4">
          The final thumbnail should accurately represent the video and
          remain readable across different screen sizes.
        </p>

        <div className="mt-6">
          <ToolLink to="/tools/thumbnail-generator">
            Try Thumbnail Generator →
          </ToolLink>
        </div>
      </section>

      {/* WORKFLOW */}

      <section>
        <RgybHeading>
          How to Build a YouTube SEO Workflow
        </RgybHeading>

        <p className="mt-5">
          Instead of optimizing every element independently, creators can
          use a simple workflow that connects topic research, content
          planning, optimization, and final review.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 sm:p-8">

          <ol className="space-y-4">

            {[
              "Choose a clear video topic.",
              "Research relevant keywords and audience questions.",
              "Create several title ideas.",
              "Plan the video structure or script.",
              "Write an accurate description.",
              "Create a relevant thumbnail concept.",
              "Review the final package before publishing.",
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

      {/* COMPLETE TOOL WORKFLOW */}

      <section>
        <RgybHeading>
          Complete YouTube SEO Tool Workflow
        </RgybHeading>

        <p className="mt-5">
          TubeKit tools can be used at different stages of the content
          planning process. A practical workflow could look like this:
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {[
            [
              "01",
              "Research",
              "Find topic and keyword ideas.",
              "/tools/keyword-generator",
            ],
            [
              "02",
              "Title",
              "Create multiple title ideas.",
              "/tools/title-generator",
            ],
            [
              "03",
              "Outline",
              "Organize the video structure.",
              "/tools/outline-generator",
            ],
            [
              "04",
              "Script",
              "Create a starting script.",
              "/tools/script-generator",
            ],
            [
              "05",
              "Description",
              "Create a description draft.",
              "/tools/description-generator",
            ],
            [
              "06",
              "Thumbnail",
              "Explore thumbnail concepts.",
              "/tools/thumbnail-generator",
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
                Use Tool →
              </span>
            </Link>
          ))}

        </div>
      </section>

      {/* COMMON SEO MISTAKES */}

      <section>
        <RgybHeading>
          Common YouTube SEO Mistakes
        </RgybHeading>

        <p className="mt-5">
          SEO tools can help with repetitive tasks, but poor optimization
          decisions can still reduce the usefulness of the final content.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Using unrelated keywords.",
            "Writing misleading titles.",
            "Adding irrelevant hashtags.",
            "Creating descriptions that do not match the video.",
            "Relying entirely on tags.",
            "Using clickbait that does not deliver the promised content.",
            "Ignoring the target audience.",
            "Publishing AI-generated content without reviewing it.",
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

      {/* SEO CHECKLIST */}

      <section>
        <RgybHeading>
          YouTube SEO Checklist
        </RgybHeading>

        <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6 sm:p-8">

          <ul className="grid gap-4 sm:grid-cols-2">

            {[
              "Topic is relevant to the target audience.",
              "Title accurately represents the video.",
              "Primary topic is clear.",
              "Description accurately explains the content.",
              "Keywords are relevant.",
              "Tags describe the video where appropriate.",
              "Hashtags are relevant.",
              "Thumbnail represents the actual video.",
              "Script provides useful information.",
              "Final content has been reviewed before publishing.",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3"
              >
                <span className="font-bold text-green-400">
                  ✓
                </span>

                <span>
                  {item}
                </span>
              </li>
            ))}

          </ul>

        </div>
      </section>

      {/* FINAL */}

      <section>
        <RgybHeading>
          Final Thoughts
        </RgybHeading>

        <p className="mt-5">
          YouTube SEO tools are most useful when they reduce repetitive
          work and help creators explore ideas faster. They should not
          replace audience research, original thinking, or careful review.
        </p>

        <p className="mt-4">
          Use tools to generate possibilities, then select and improve the
          ideas that genuinely fit your video and audience.
        </p>

        <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <h3 className="text-xl font-bold text-white">
            Explore TubeKit Creator Tools
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            Use TubeKit's collection of AI YouTube tools to speed up your
            content planning and optimization workflow.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">

            <ToolLink
              to="/tools/keyword-generator"
              primary
            >
              Keyword Generator
            </ToolLink>

            <ToolLink to="/tools/title-generator">
              Title Generator
            </ToolLink>

            <ToolLink to="/tools/script-generator">
              Script Generator
            </ToolLink>

            <ToolLink to="/tools/thumbnail-generator">
              Thumbnail Generator
            </ToolLink>

          </div>

        </div>
      </section>

    </article>
  );
}

export default SeoToolsGuide;