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

function FreeAIToolsForYouTubeCreators() {
  return (
    <article className="space-y-12 text-base leading-8 text-slate-300">

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            Free AI Tools for YouTube Creators
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Top 10 Free AI Tools for YouTube Creators to Grow Faster in 2026
          </h1>

          <p className="mt-5">
            Creating content for YouTube involves much more than recording
            and uploading a video. Creators have to research topics, write
            titles, prepare descriptions, find keywords, create scripts,
            design thumbnails, and optimize their videos for search.
          </p>

          <p className="mt-4">
            AI tools can reduce the amount of time required for many of
            these tasks. The good news is that creators do not always need
            expensive software or premium subscriptions to get started.
          </p>

          <p className="mt-4">
            In this guide, we will look at useful free AI tools and methods
            that can help YouTube creators improve their content workflow
            in 2026.
          </p>

        </div>
      </section>


      {/* =====================================================
          WHY AI TOOLS
      ====================================================== */}

      <section>
        <RgybHeading>
          Why Are AI Tools Useful for YouTube Creators?
        </RgybHeading>

        <p className="mt-5">
          A YouTube creator may spend hours working on tasks that do not
          directly involve recording a video. Research, brainstorming,
          writing and optimization can take a significant amount of time.
        </p>

        <p className="mt-4">
          AI can help generate starting ideas and drafts so creators can
          spend more time reviewing, improving and publishing useful
          content.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {[
            [
              "Save Time",
              "Generate ideas, drafts and suggestions faster.",
            ],
            [
              "Improve Workflow",
              "Keep multiple content tasks organized in one workflow.",
            ],
            [
              "Create More",
              "Spend less time on repetitive tasks and more time creating.",
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

        <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

          <p className="font-semibold text-green-400">
            Important
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            AI should be treated as an assistant rather than a replacement
            for the creator. Always review generated content, add your own
            ideas, and verify important information before publishing.
          </p>

        </div>
      </section>


      {/* =====================================================
          1 TUBE KIT
      ====================================================== */}

      <section>
        <RgybHeading number="1.">
          TubeKit — Free AI Tools for YouTube Creators
        </RgybHeading>

        <p className="mt-5">
          TubeKit is designed specifically for YouTube creators who want
          AI-powered tools for different parts of the content creation
          workflow.
        </p>

        <p className="mt-4">
          Instead of using separate websites for every small task, creators
          can use TubeKit to generate titles, descriptions, tags, keywords,
          scripts, hooks, outlines, hashtags and other YouTube-related
          content.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {[
            [
              "AI Title Generator",
              "Generate YouTube title ideas from your topic.",
              "/tools/title-generator",
            ],
            [
              "Description Generator",
              "Create a starting description for your video.",
              "/tools/description-generator",
            ],
            [
              "Tags Generator",
              "Generate relevant YouTube tag ideas.",
              "/tools/tags-generator",
            ],
            [
              "Keyword Generator",
              "Explore keyword and topic ideas.",
              "/tools/keyword-generator",
            ],
            [
              "Script Generator",
              "Create a starting script for your video.",
              "/tools/script-generator",
            ],
            [
              "Thumbnail Generator",
              "Generate thumbnail concepts for your content.",
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

        <div className="mt-6">
          <ToolLink
            to="/tools/title-generator"
            primary
          >
            Explore TubeKit AI Tools →
          </ToolLink>
        </div>
      </section>


      {/* =====================================================
          2 AI TITLE
      ====================================================== */}

      <section>
        <RgybHeading number="2.">
          AI YouTube Title Generators
        </RgybHeading>

        <p className="mt-5">
          A video title is one of the first things viewers see when they
          discover a video. Coming up with multiple relevant title ideas
          can be difficult, especially when you are publishing regularly.
        </p>

        <p className="mt-4">
          An AI title generator can provide different title variations
          based on your topic, allowing you to compare ideas before
          choosing the final title.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">

          <p className="font-semibold text-yellow-300">
            Pro Tip
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Do not automatically use the first AI-generated title. Create
            several variations and choose the one that accurately represents
            your video while remaining clear and interesting.
          </p>

        </div>

        <div className="mt-5">
          <ToolLink to="/tools/title-generator">
            Try AI Title Generator →
          </ToolLink>
        </div>
      </section>


      {/* =====================================================
          3 DESCRIPTION
      ====================================================== */}

      <section>
        <RgybHeading number="3.">
          AI YouTube Description Generator
        </RgybHeading>

        <p className="mt-5">
          Writing descriptions for every YouTube video can become repetitive.
          AI can help create a structured first draft based on your topic,
          keywords and video information.
        </p>

        <p className="mt-4">
          A good description should accurately explain what the viewer will
          find in the video. It should not simply be a collection of
          keywords.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

          <p className="text-sm leading-7 text-slate-300">
            TubeKit's{" "}
            <Link
              to="/tools/description-generator"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              YouTube Description Generator
            </Link>{" "}
            can help you create a starting description from your video
            topic.
          </p>

          <div className="mt-5">
            <ToolLink
              to="/tools/description-generator"
              primary
            >
              Generate a Description →
            </ToolLink>
          </div>

        </div>
      </section>


      {/* =====================================================
          4 TAGS
      ====================================================== */}

      <section>
        <RgybHeading number="4.">
          Free YouTube Tag Generators
        </RgybHeading>

        <p className="mt-5">
          Tags can help describe the topic of a video and provide additional
          context. They should be relevant to the actual content rather than
          being selected only because they appear popular.
        </p>

        <p className="mt-4">
          Beginners can use AI-generated tag suggestions as a starting point
          and then remove anything that does not accurately describe their
          video.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

            <h3 className="font-semibold text-green-400">
              Useful Approach
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Use tags that are directly related to your video's subject,
              variations of the topic, and relevant phrases.
            </p>

          </div>

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

            <h3 className="font-semibold text-red-400">
              Avoid
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Avoid unrelated popular keywords simply to try to attract
              additional searches.
            </p>

          </div>

        </div>

        <div className="mt-5">
          <ToolLink to="/tools/tags-generator">
            Generate YouTube Tags →
          </ToolLink>
        </div>
      </section>


      {/* =====================================================
          5 KEYWORD RESEARCH
      ====================================================== */}

      <section>
        <RgybHeading number="5.">
          Free AI Keyword Research Tools
        </RgybHeading>

        <p className="mt-5">
          Keyword research helps creators discover words, phrases, topics
          and questions related to their audience.
        </p>

        <p className="mt-4">
          You do not necessarily need an expensive SEO subscription to
          begin researching YouTube topics. You can start with YouTube
          search suggestions, audience questions and free keyword tools.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

          <h3 className="font-semibold text-white">
            Simple Keyword Research Workflow
          </h3>

          <ol className="mt-4 space-y-3">

            {[
              "Start with a broad topic.",
              "Find specific search phrases.",
              "Think about what the viewer wants to learn.",
              "Identify related questions and topics.",
              "Choose keywords that genuinely match your video.",
            ].map((step, index) => (
              <li
                key={step}
                className="flex gap-3"
              >
                <span className="font-bold text-blue-400">
                  {index + 1}.
                </span>

                <span>
                  {step}
                </span>
              </li>
            ))}

          </ol>

        </div>

        <div className="mt-5">
          <ToolLink
            to="/tools/keyword-generator"
            primary
          >
            Generate Keyword Ideas →
          </ToolLink>
        </div>
      </section>


      {/* =====================================================
          6 SCRIPT
      ====================================================== */}

      <section>
        <RgybHeading number="6.">
          AI Script Writers for YouTube Videos
        </RgybHeading>

        <p className="mt-5">
          Writing a complete YouTube script can take considerable time.
          AI script tools can help creators create an initial structure,
          introduction, talking points and draft.
        </p>

        <p className="mt-4">
          The strongest approach is to use AI for the first draft and then
          add your own experience, examples, opinions and personality.
        </p>

        <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

          <p className="font-semibold text-green-400">
            Action Step
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Give the AI a specific topic, target audience, video length and
            desired tone. More context generally gives you a more useful
            starting draft.
          </p>

        </div>

        <div className="mt-5">
          <ToolLink to="/tools/script-generator">
            Generate a YouTube Script →
          </ToolLink>
        </div>
      </section>


      {/* =====================================================
          7 HOOKS
      ====================================================== */}

      <section>
        <RgybHeading number="7.">
          AI Hook Generators
        </RgybHeading>

        <p className="mt-5">
          The opening seconds of a video are important because viewers need
          a reason to continue watching.
        </p>

        <p className="mt-4">
          AI hook generators can provide different opening ideas based on
          your topic. These can include questions, curiosity-based openings,
          direct statements and problem-focused introductions.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {[
            [
              "Question",
              "Start with a question related to the viewer's problem.",
            ],
            [
              "Problem",
              "Immediately highlight the problem your video solves.",
            ],
            [
              "Curiosity",
              "Create an opening that encourages the viewer to continue.",
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

        <div className="mt-5">
          <ToolLink to="/tools/hook-generator">
            Generate Video Hooks →
          </ToolLink>
        </div>
      </section>


      {/* =====================================================
          8 OUTLINE
      ====================================================== */}

      <section>
        <RgybHeading number="8.">
          AI YouTube Outline Generators
        </RgybHeading>

        <p className="mt-5">
          A video outline gives your content a clear structure before you
          start writing or recording.
        </p>

        <p className="mt-4">
          AI can help turn a topic into sections such as introduction,
          main points, examples and conclusion.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">

          <p className="font-semibold text-yellow-300">
            Pro Tip
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Do not let an AI outline dictate the entire video. Adjust the
            structure according to your audience, experience and the actual
            value you want to provide.
          </p>

        </div>

        <div className="mt-5">
          <ToolLink to="/tools/outline-generator">
            Create a Video Outline →
          </ToolLink>
        </div>
      </section>


      {/* =====================================================
          9 THUMBNAILS
      ====================================================== */}

      <section>
        <RgybHeading number="9.">
          AI Thumbnail Idea Generators
        </RgybHeading>

        <p className="mt-5">
          A thumbnail communicates the subject of a video visually before
          the viewer watches it. Coming up with fresh thumbnail concepts
          for every upload can be difficult.
        </p>

        <p className="mt-4">
          AI can help brainstorm concepts, visual directions, text ideas
          and compositions that you can later turn into an actual thumbnail.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

          <h3 className="font-semibold text-white">
            A Good Thumbnail Concept Should Be
          </h3>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">

            {[
              "Easy to understand.",
              "Relevant to the video.",
              "Visually clear at smaller sizes.",
              "Different enough to stand out.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-blue-500/10 bg-blue-500/5 p-4"
              >
                <span className="mr-2 text-blue-400">
                  ✓
                </span>

                {item}
              </div>
            ))}

          </div>

        </div>

        <div className="mt-5">
          <ToolLink to="/tools/thumbnail-generator">
            Generate Thumbnail Ideas →
          </ToolLink>
        </div>
      </section>


      {/* =====================================================
          10 HASHTAGS
      ====================================================== */}

      <section>
        <RgybHeading number="10.">
          AI Hashtag Generators
        </RgybHeading>

        <p className="mt-5">
          Hashtags can be used to categorize content and connect videos
          with relevant topics. AI can provide hashtag suggestions based
          on your video's subject.
        </p>

        <p className="mt-4">
          As with keywords and tags, relevance is more important than
          adding a large number of unrelated hashtags.
        </p>

        <div className="mt-5">
          <ToolLink to="/tools/hashtag-generator">
            Generate Hashtags →
          </ToolLink>
        </div>
      </section>


      {/* =====================================================
          COMPLETE WORKFLOW
      ====================================================== */}

      <section>
        <RgybHeading>
          Complete AI YouTube Content Workflow
        </RgybHeading>

        <p className="mt-5">
          The biggest benefit of using multiple AI tools is that they can
          work together as a content workflow instead of being used as
          isolated tools.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {[
            [
              "01",
              "Find Topic",
              "Start with a relevant topic and audience problem.",
            ],
            [
              "02",
              "Research Keywords",
              "Find useful phrases and related content ideas.",
            ],
            [
              "03",
              "Create Title",
              "Generate multiple title concepts and choose the strongest one.",
            ],
            [
              "04",
              "Build Outline",
              "Organize the main points before writing the script.",
            ],
            [
              "05",
              "Write Script",
              "Create a draft and add your own examples and personality.",
            ],
            [
              "06",
              "Create Thumbnail",
              "Develop a visual concept that matches the video.",
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
          FREE VS PAID
      ====================================================== */}

      <section>
        <RgybHeading>
          Do You Really Need Paid AI Tools?
        </RgybHeading>

        <p className="mt-5">
          Paid tools can provide additional features, larger limits or
          advanced analytics. However, beginners do not necessarily need
          a large collection of premium subscriptions to start creating
          content.
        </p>

        <p className="mt-4">
          Free AI tools can be enough for brainstorming, drafting and
          improving a basic YouTube workflow, especially when you are
          still learning what type of content works for your audience.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

            <h3 className="font-semibold text-green-400">
              Free Tools
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">

              <li>✓ Good for beginners</li>
              <li>✓ Lower initial cost</li>
              <li>✓ Useful for basic content workflows</li>
              <li>✓ Easy to experiment with</li>

            </ul>

          </div>

          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

            <h3 className="font-semibold text-blue-400">
              Paid Tools
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">

              <li>✓ May offer advanced features</li>
              <li>✓ May provide higher usage limits</li>
              <li>✓ Can include advanced analytics</li>
              <li>✓ Useful for established workflows</li>

            </ul>

          </div>

        </div>
      </section>


      {/* =====================================================
          HUMAN TOUCH
      ====================================================== */}

      <section>
        <RgybHeading>
          Don't Let AI Replace Your Creativity
        </RgybHeading>

        <p className="mt-5">
          One of the biggest mistakes creators can make is publishing
          AI-generated content without reviewing it.
        </p>

        <p className="mt-4">
          AI can generate a starting point, but your experience, opinions,
          examples and understanding of your audience are what make a video
          unique.
        </p>

        <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

          <p className="font-semibold text-red-400">
            Remember
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Use AI to accelerate your workflow, not to remove the human
            element from your content.
          </p>

        </div>
      </section>


      {/* =====================================================
          MISTAKES
      ====================================================== */}

      <section>
        <RgybHeading>
          Common Mistakes When Using AI for YouTube
        </RgybHeading>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Publishing AI content without reviewing it.",
            "Using generic titles that do not match the video.",
            "Adding irrelevant keywords or tags.",
            "Copying AI-generated scripts without personalization.",
            "Creating misleading thumbnails or titles.",
            "Using too many tools without a clear workflow.",
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
          TOOL STACK
      ====================================================== */}

      <section>
        <RgybHeading>
          Recommended Free YouTube AI Tool Stack
        </RgybHeading>

        <p className="mt-5">
          You do not need to use every tool for every video. Choose tools
          according to the stage of your workflow.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">

          <div className="grid grid-cols-2 bg-white/[0.05] p-4 font-semibold text-white">
            <span>Task</span>
            <span>Useful Tool</span>
          </div>

          {[
            ["Topic Ideas", "Keyword Generator"],
            ["Video Title", "Title Generator"],
            ["Description", "Description Generator"],
            ["Tags", "Tags Generator"],
            ["Script", "Script Generator"],
            ["Opening", "Hook Generator"],
            ["Structure", "Outline Generator"],
            ["Thumbnail", "Thumbnail Generator"],
            ["Hashtags", "Hashtag Generator"],
          ].map(([task, tool]) => (
            <div
              key={task}
              className="grid grid-cols-2 border-t border-white/10 p-4 text-sm"
            >
              <span className="text-slate-300">
                {task}
              </span>

              <span className="text-blue-400">
                {tool}
              </span>
            </div>
          ))}

        </div>
      </section>


      {/* =====================================================
          CHECKLIST
      ====================================================== */}

      <section>
        <RgybHeading>
          Free AI YouTube Creator Checklist
        </RgybHeading>

        <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6 sm:p-8">

          <ul className="grid gap-4 sm:grid-cols-2">

            {[
              "Choose a clear video topic.",
              "Research relevant keywords.",
              "Generate several title ideas.",
              "Create a useful video outline.",
              "Draft the script with AI if needed.",
              "Add your own experience and examples.",
              "Create a clear thumbnail concept.",
              "Write an accurate description.",
              "Review all AI-generated content.",
              "Verify important facts before publishing.",
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


      {/* =====================================================
          FAQ
      ====================================================== */}

      <section>
        <RgybHeading>
          Frequently Asked Questions About Free AI Tools
        </RgybHeading>

        <div className="mt-6 space-y-5">

          {[
            [
              "What are the best free AI tools for YouTube creators?",
              "The best tool depends on your workflow. Free tools for titles, descriptions, keywords, scripts, hooks, outlines, tags and thumbnails can each help with different stages of YouTube content creation.",
            ],
            [
              "Is TubeKit free to use?",
              "TubeKit provides free AI-powered YouTube tools that creators can use for different content creation and optimization tasks.",
            ],
            [
              "Can AI create a complete YouTube video?",
              "AI can help with many parts of the workflow, including ideas, titles, scripts and descriptions, but creators still need to record, edit, review and publish the final content.",
            ],
            [
              "Can AI-generated YouTube content rank on YouTube?",
              "Using AI does not guarantee rankings. The content should be useful, relevant and created for the intended audience. AI should be used as a productivity tool rather than a guarantee of performance.",
            ],
            [
              "Should beginners use AI tools for YouTube?",
              "Yes. Beginners can use AI tools to learn content planning, generate starting ideas and reduce repetitive work while developing their own creative process.",
            ],
            [
              "Can I use TubeKit without paying for expensive SEO tools?",
              "TubeKit provides free YouTube-focused tools that can help with several common creator tasks without requiring a large collection of paid subscriptions.",
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
            Create Better YouTube Content With Free AI Tools
          </h2>

          <p className="mt-3 text-slate-400">
            Start with your topic, choose the right tool, generate a
            starting point, and then add your own creativity before
            publishing.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <ToolLink
              to="/tools/keyword-generator"
              primary
            >
              Start With Keywords →
            </ToolLink>

            <ToolLink to="/tools/title-generator">
              Generate Titles
            </ToolLink>

            <ToolLink to="/tools/script-generator">
              Generate Script
            </ToolLink>

            <ToolLink to="/tools/thumbnail-generator">
              Thumbnail Ideas
            </ToolLink>

          </div>

        </div>
      </section>

    </article>
  );
}

export default FreeAIToolsForYouTubeCreators;