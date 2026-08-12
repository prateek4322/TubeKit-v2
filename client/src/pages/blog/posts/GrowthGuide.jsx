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

function GrowthGuide() {
  return (
    <article className="space-y-12 text-base leading-8 text-slate-300">

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            YouTube Growth Guide
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            How to Grow a YouTube Channel and Get More Views
          </h1>

          <p className="mt-5">
            Growing a YouTube channel requires more than simply uploading
            videos. Sustainable growth usually comes from understanding
            your audience, choosing useful topics, improving titles and
            thumbnails, creating engaging videos, and learning from
            performance data.
          </p>

          <p className="mt-4">
            Views are an important part of YouTube growth, but they should
            not be the only goal. Audience satisfaction, relevance, watch
            behavior, and the quality of your content also matter.
          </p>

        </div>
      </section>

      {/* =====================================================
          WHY VIEWS MATTER
      ====================================================== */}

      <section>
        <RgybHeading>
          Why YouTube Views Matter
        </RgybHeading>

        <p className="mt-5">
          Views are an important part of YouTube growth because they show
          that people are watching your content. However, getting more
          views should not be the only goal.
        </p>

        <p className="mt-4">
          The quality of those views, audience satisfaction, and whether
          viewers continue watching your content also matter.
        </p>

        <p className="mt-4">
          Sustainable growth usually comes from creating useful content
          for a specific audience and improving the way that content is
          presented and distributed.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {[
            [
              "Audience",
              "Understand who your videos are actually made for.",
              "red",
            ],
            [
              "Content",
              "Create useful, relevant, or entertaining videos.",
              "yellow",
            ],
            [
              "Optimization",
              "Improve how your videos are packaged and discovered.",
              "green",
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
                    : "font-semibold text-green-400"
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
          1 TOPICS
      ====================================================== */}

      <section>
        <RgybHeading number="1.">
          Choose Topics Your Audience Actually Wants
        </RgybHeading>

        <p className="mt-5">
          Start by understanding the problems, questions, interests, and
          goals of your target audience. A video has a better chance of
          attracting viewers when it addresses something they genuinely
          care about.
        </p>

        <p className="mt-4">
          Look at questions people ask, topics related to your niche, and
          areas where you can provide useful information or a unique
          perspective.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

          <h3 className="font-semibold text-white">
            Start With Keyword Research
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Keyword research can help you discover topics and search
            phrases related to your audience's interests.
          </p>

          <div className="mt-5">
            <ToolLink
              to="/tools/keyword-generator"
              primary
            >
              Find YouTube Keyword Ideas →
            </ToolLink>
          </div>

        </div>
      </section>

      {/* =====================================================
          2 TITLES
      ====================================================== */}

      <section>
        <RgybHeading number="2.">
          Improve Your YouTube Titles
        </RgybHeading>

        <p className="mt-5">
          Your title should quickly communicate what the video is about
          and give viewers a reason to consider watching it.
        </p>

        <p className="mt-4">
          Avoid misleading titles. A title that attracts a click but does
          not match the video can create a poor viewer experience.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

            <h3 className="font-semibold text-green-400">
              Better Approach
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Make the topic clear, create a genuine reason to watch, and
              ensure the title accurately represents the video.
            </p>

          </div>

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

            <h3 className="font-semibold text-red-400">
              Avoid
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Do not make promises or claims that the actual video does
              not deliver.
            </p>

          </div>

        </div>

        <div className="mt-5">
          <ToolLink to="/tools/title-generator">
            Generate YouTube Title Ideas →
          </ToolLink>
        </div>
      </section>

      {/* =====================================================
          3 THUMBNAILS
      ====================================================== */}

      <section>
        <RgybHeading number="3.">
          Create Better YouTube Thumbnails
        </RgybHeading>

        <p className="mt-5">
          A thumbnail gives viewers a visual preview of your video. It
          should make the subject easy to understand and work together
          with the title.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Keep the main subject easy to recognize.",
            "Avoid unnecessary visual clutter.",
            "Use readable text only when it adds value.",
            "Make sure the thumbnail accurately represents the video.",
          ].map((tip) => (
            <div
              key={tip}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <span className="mr-2 text-green-400">
                ✓
              </span>

              {tip}
            </div>
          ))}

        </div>

        <div className="mt-5">
          <ToolLink to="/tools/thumbnail-generator">
            Get Thumbnail Ideas →
          </ToolLink>
        </div>
      </section>

      {/* =====================================================
          4 HOOK
      ====================================================== */}

      <section>
        <RgybHeading number="4.">
          Focus on the First Part of Your Video
        </RgybHeading>

        <p className="mt-5">
          The opening of a video should quickly establish what the viewer
          can expect. Avoid unnecessary introductions that delay the main
          topic.
        </p>

        <p className="mt-4">
          A clear structure can make it easier for viewers to understand
          the content and continue watching.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">

          <h3 className="font-semibold text-yellow-300">
            Strong Opening
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Start with the main problem, question, result, or useful idea
            instead of spending too much time on an unnecessary
            introduction.
          </p>

        </div>

        <div className="mt-5">
          <ToolLink to="/tools/hook-generator">
            Generate Video Hook Ideas →
          </ToolLink>
        </div>
      </section>

      {/* =====================================================
          5 STRUCTURE
      ====================================================== */}

      <section>
        <RgybHeading number="5.">
          Improve Your Video Structure
        </RgybHeading>

        <p className="mt-5">
          Organize your content into clear sections. A useful structure
          can help you stay focused and make the video easier for viewers
          to follow.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 sm:p-8">

          <ol className="space-y-4">

            {[
              "Introduce the topic.",
              "Explain the main problem or question.",
              "Provide the important information.",
              "Use examples where appropriate.",
              "Finish with a useful conclusion or next step.",
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

        <div className="mt-5">
          <ToolLink to="/tools/outline-generator">
            Create a Video Outline →
          </ToolLink>
        </div>
      </section>

      {/* =====================================================
          6 SEARCH AND TOPICS
      ====================================================== */}

      <section>
        <RgybHeading number="6.">
          Use YouTube Search and Related Topics
        </RgybHeading>

        <p className="mt-5">
          Search behavior can provide useful clues about what viewers are
          interested in. Research related topics and questions before
          deciding what to publish.
        </p>

        <p className="mt-4">
          Do not chase every trending topic. Choose subjects that fit your
          channel and that you can cover meaningfully.
        </p>

        <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

          <h3 className="font-semibold text-green-400">
            Relevance Over Trends
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            A trending topic is not automatically a good topic for your
            channel. Audience relevance and your ability to provide value
            should influence the decision.
          </p>

        </div>
      </section>

      {/* =====================================================
          7 CONSISTENCY
      ====================================================== */}

      <section>
        <RgybHeading number="7.">
          Create Content Consistently
        </RgybHeading>

        <p className="mt-5">
          Consistency helps you build a repeatable publishing workflow.
          This does not necessarily mean uploading every day.
        </p>

        <p className="mt-4">
          A realistic schedule that allows you to maintain content quality
          is usually more practical than publishing large amounts of
          low-quality content.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">

          <p className="font-semibold text-yellow-300">
            Quality + Consistency
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Build a publishing schedule that you can maintain without
            sacrificing the usefulness and quality of your videos.
          </p>

        </div>
      </section>

      {/* =====================================================
          8 ANALYTICS
      ====================================================== */}

      <section>
        <RgybHeading number="8.">
          Analyze Your YouTube Analytics
        </RgybHeading>

        <p className="mt-5">
          Analytics can help you understand which videos attract viewers,
          where viewers leave, and how your audience interacts with your
          content.
        </p>

        <p className="mt-4">
          Use those insights to improve future videos instead of assuming
          that one successful video will automatically work again.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {[
            [
              "What Worked?",
              "Identify topics and formats that performed well.",
            ],
            [
              "Where Did Viewers Leave?",
              "Look for areas where the content may need improvement.",
            ],
            [
              "What Should Change?",
              "Use the data to inform future content decisions.",
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
          CONTENT WORKFLOW
      ====================================================== */}

      <section>
        <RgybHeading>
          Build a Repeatable YouTube Growth Workflow
        </RgybHeading>

        <p className="mt-5">
          YouTube growth involves several connected tasks. A repeatable
          workflow can make it easier to move from an idea to a finished
          video.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {[
            [
              "01",
              "Research",
              "Find relevant topics and audience questions.",
              "/tools/keyword-generator",
            ],
            [
              "02",
              "Title",
              "Create clear and relevant title ideas.",
              "/tools/title-generator",
            ],
            [
              "03",
              "Hook",
              "Plan a strong opening for the video.",
              "/tools/hook-generator",
            ],
            [
              "04",
              "Outline",
              "Organize the video's main sections.",
              "/tools/outline-generator",
            ],
            [
              "05",
              "Script",
              "Create a starting script for recording.",
              "/tools/script-generator",
            ],
            [
              "06",
              "Thumbnail",
              "Develop a clear thumbnail concept.",
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

      {/* =====================================================
          COMMON MISTAKES
      ====================================================== */}

      <section>
        <RgybHeading>
          Common YouTube Growth Mistakes
        </RgybHeading>

        <p className="mt-5">
          Some growth strategies can create short-term attention without
          building a sustainable audience. Avoid these common mistakes.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Using misleading titles or thumbnails.",
            "Copying other creators without adding original value.",
            "Ignoring the target audience.",
            "Changing topics constantly without a clear strategy.",
            "Focusing only on views instead of viewer satisfaction.",
            "Publishing without reviewing performance data.",
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
          WHAT NOT TO DO
      ====================================================== */}

      <section>
        <RgybHeading>
          What Not to Focus on When Growing a YouTube Channel
        </RgybHeading>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">

          <div className="grid grid-cols-2 bg-white/[0.05] p-4 font-semibold text-white">
            <span>Avoid</span>
            <span>Focus Instead On</span>
          </div>

          {[
            [
              "Views alone",
              "Viewer satisfaction and useful content",
            ],
            [
              "Clickbait",
              "Accurate and compelling packaging",
            ],
            [
              "Copying competitors",
              "Original value and perspective",
            ],
            [
              "Uploading every day",
              "A sustainable publishing schedule",
            ],
            [
              "Chasing every trend",
              "Topics relevant to your audience",
            ],
          ].map(([avoid, focus]) => (
            <div
              key={avoid}
              className="grid grid-cols-2 border-t border-white/10 p-4 text-sm"
            >
              <span className="text-red-400">
                {avoid}
              </span>

              <span className="text-green-400">
                {focus}
              </span>
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section>
        <RgybHeading>
          Frequently Asked Questions About YouTube Growth
        </RgybHeading>

        <div className="mt-6 space-y-5">

          {[
            [
              "How can I get more views on YouTube?",
              "Start by creating content for a specific audience, choosing relevant topics, improving titles and thumbnails, creating useful videos, and learning from your analytics.",
            ],
            [
              "How important are YouTube titles?",
              "Titles help communicate the subject of a video and can influence whether viewers consider watching. They should be accurate and relevant to the actual content.",
            ],
            [
              "Do thumbnails help YouTube growth?",
              "A clear and relevant thumbnail can help viewers understand what a video is about and works together with the title as part of the video's presentation.",
            ],
            [
              "Should I upload videos every day?",
              "Not necessarily. A realistic publishing schedule that allows you to maintain content quality is generally more practical than uploading frequently with low-quality content.",
            ],
            [
              "Should I follow every YouTube trend?",
              "No. Choose trends selectively and prioritize topics that fit your audience, niche, and ability to provide meaningful content.",
            ],
            [
              "Can TubeKit help with YouTube growth?",
              "TubeKit provides tools for keyword research, titles, hooks, outlines, scripts, descriptions, thumbnails, hashtags, and other content-planning tasks. These tools are intended to help creators create starting points more efficiently.",
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
            Build a Better YouTube Workflow With TubeKit
          </h2>

          <p className="mt-3 text-slate-400">
            Use TubeKit to speed up repetitive content-planning tasks and
            create better starting points for your YouTube workflow.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

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

            <ToolLink to="/">
              Explore TubeKit →
            </ToolLink>

          </div>

        </div>
      </section>

    </article>
  );
}

export default GrowthGuide;