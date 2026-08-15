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

function KeywordGuide() {
  return (
    <article className="space-y-12 text-base leading-8 text-slate-300">

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            YouTube Keyword Research Guide
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            YouTube Keyword Research: Complete Guide for Creators
          </h1>

          <p className="mt-5">
            YouTube keywords are words and phrases that describe the topic
            of a video. They can help creators understand how people may
            search for information related to their content.
          </p>

          <p className="mt-4">
            Good keyword research starts with the actual topic and audience
            rather than simply looking for popular words. The keyword should
            be relevant to what the video genuinely provides.
          </p>

        </div>
      </section>

      {/* =====================================================
          WHAT ARE KEYWORDS
      ====================================================== */}

      <section>
        <RgybHeading>
          What Are YouTube Keywords?
        </RgybHeading>

        <p className="mt-5">
          A YouTube keyword is a word or phrase that represents the subject,
          question, problem, or search topic associated with a video.
        </p>

        <p className="mt-4">
          Keyword research can help creators understand the language
          viewers may use when looking for information, tutorials,
          comparisons, entertainment, or solutions.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {[
            [
              "Broad Keyword",
              "YouTube SEO",
              "A general topic with a wider meaning.",
            ],
            [
              "Specific Keyword",
              "YouTube SEO for beginners",
              "A more focused search phrase.",
            ],
            [
              "Long-Tail Keyword",
              "How to optimize YouTube videos",
              "A detailed phrase representing a specific intent.",
            ],
          ].map(([title, example, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="font-semibold text-white">
                {title}
              </h3>

              <p className="mt-2 text-sm font-medium text-blue-400">
                "{example}"
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                {description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          WHY KEYWORD RESEARCH
      ====================================================== */}

      <section>
        <RgybHeading>
          Why YouTube Keyword Research Matters
        </RgybHeading>

        <p className="mt-5">
          Keyword research can help creators discover topics, questions,
          and phrases related to their audience's interests. It can also
          help when planning titles, descriptions, scripts, and content
          ideas.
        </p>

        <p className="mt-4">
          Keywords are only one part of YouTube optimization. Useful
          content, viewer satisfaction, accurate packaging, and a clear
          content strategy are also important.
        </p>

        <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

          <p className="font-semibold text-green-400">
            Key principle
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Do not choose a keyword only because it appears popular. Choose
            topics and phrases that your actual video can satisfy.
          </p>

        </div>
      </section>

      {/* =====================================================
          1 BROAD TOPIC
      ====================================================== */}

      <section>
        <RgybHeading number="1.">
          Start With a Broad Topic
        </RgybHeading>

        <p className="mt-5">
          Begin with the main subject of your video. For example, if your
          channel focuses on YouTube growth, a broad topic could be
          "YouTube SEO" or "YouTube thumbnails."
        </p>

        <p className="mt-4">
          Starting broad gives you a base from which you can discover
          more specific search phrases and related questions.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

          <h3 className="font-semibold text-white">
            Example
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">

            {[
              "YouTube SEO",
              "YouTube thumbnails",
              "YouTube titles",
              "YouTube growth",
              "YouTube Shorts",
            ].map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm text-blue-300"
              >
                {topic}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          2 SPECIFIC PHRASES
      ====================================================== */}

      <section>
        <RgybHeading number="2.">
          Find Specific Search Phrases
        </RgybHeading>

        <p className="mt-5">
          Broad keywords can have many different meanings. More specific
          phrases can help you understand exactly what a viewer is trying
          to learn.
        </p>

        <p className="mt-4">
          For example, instead of only researching "YouTube SEO," you
          could explore more specific topics such as "YouTube SEO for
          beginners" or "how to optimize YouTube videos."
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">

            <h3 className="font-semibold text-yellow-300">
              Broad
            </h3>

            <p className="mt-3 text-white">
              YouTube SEO
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Covers a large topic with many possible search intents.
            </p>

          </div>

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

            <h3 className="font-semibold text-green-400">
              Specific
            </h3>

            <p className="mt-3 text-white">
              YouTube SEO for beginners
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Represents a clearer audience and learning objective.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          3 SEARCH INTENT
      ====================================================== */}

      <section>
        <RgybHeading number="3.">
          Think About Search Intent
        </RgybHeading>

        <p className="mt-5">
          Search intent describes what someone is trying to accomplish
          when they search for a topic.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            [
              "Informational",
              "The viewer wants to learn something.",
              "What is YouTube SEO?",
            ],
            [
              "How-to",
              "The viewer wants instructions.",
              "How to optimize a YouTube video",
            ],
            [
              "Comparison",
              "The viewer wants to compare options.",
              "Best YouTube editing software",
            ],
            [
              "Problem-Solving",
              "The viewer wants a solution to a specific problem.",
              "Why are my YouTube views dropping?",
            ],
          ].map(([title, description, example]) => (
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

              <p className="mt-3 text-sm text-blue-400">
                Example: "{example}"
              </p>
            </div>
          ))}

        </div>

        <p className="mt-6">
          Understanding intent helps you create a video that actually
          answers the question behind the search.
        </p>
      </section>

      {/* =====================================================
          4 RELATED KEYWORDS
      ====================================================== */}

      <section>
        <RgybHeading number="4.">
          Use Related Keywords
        </RgybHeading>

        <p className="mt-5">
          A single topic can have many related terms. Exploring related
          keywords can help you discover additional video ideas and
          supporting topics.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

          <p className="text-sm leading-7 text-slate-300">
            Need keyword ideas? Use the{" "}
            <Link
              to="/tools/keyword-generator"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              TubeKit Keyword Generator
            </Link>{" "}
            to generate related keyword suggestions.
          </p>

          <div className="mt-5">
            <ToolLink
              to="/tools/keyword-generator"
              primary
            >
              Generate Keyword Ideas →
            </ToolLink>
          </div>

        </div>
      </section>

      {/* =====================================================
          5 RELEVANCE
      ====================================================== */}

      <section>
        <RgybHeading number="5.">
          Choose Keywords That Match Your Video
        </RgybHeading>

        <p className="mt-5">
          A keyword should accurately describe the content you are
          publishing. Avoid selecting a keyword simply because it appears
          popular if your video does not provide what the searcher expects.
        </p>

        <p className="mt-4">
          Relevance should come before trying to include as many keywords
          as possible.
        </p>

        <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

          <p className="font-semibold text-red-400">
            Avoid keyword mismatch
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            A keyword may attract attention, but if the video does not
            satisfy the viewer's expectation, it is not a good keyword for
            that content.
          </p>

        </div>
      </section>

      {/* =====================================================
          6 NATURAL KEYWORDS
      ====================================================== */}

      <section>
        <RgybHeading number="6.">
          Use Keywords Naturally
        </RgybHeading>

        <p className="mt-5">
          Once you identify useful keywords, incorporate them naturally
          into relevant parts of your content strategy.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Video title when appropriate.",
            "Video description.",
            "Video script and spoken content when relevant.",
            "Content topic and structure.",
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

        <p className="mt-6">
          Avoid repeating the same keyword excessively. Natural language
          is easier for viewers to understand.
        </p>
      </section>

      {/* =====================================================
          KEYWORD MAPPING
      ====================================================== */}

      <section>
        <RgybHeading>
          How to Map Keywords to a YouTube Video
        </RgybHeading>

        <p className="mt-5">
          Instead of trying to use every keyword everywhere, assign each
          important phrase to the part of the content where it naturally
          belongs.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">

          <div className="grid grid-cols-2 bg-white/[0.05] p-4 font-semibold text-white">
            <span>Content Element</span>
            <span>Keyword Focus</span>
          </div>

          {[
            ["Video Topic", "Main subject"],
            ["Title", "Primary topic or search phrase"],
            ["Description", "Topic + relevant supporting phrases"],
            ["Script", "Natural discussion of the subject"],
            ["Thumbnail", "Clear visual representation of the topic"],
          ].map(([element, keyword]) => (
            <div
              key={element}
              className="grid grid-cols-2 border-t border-white/10 p-4 text-sm"
            >
              <span className="text-slate-300">
                {element}
              </span>

              <span className="text-blue-400">
                {keyword}
              </span>
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          MISTAKES
      ====================================================== */}

      <section>
        <RgybHeading>
          Keyword Research Mistakes to Avoid
        </RgybHeading>

        <p className="mt-5">
          Keyword research becomes less useful when creators focus only on
          numbers and ignore the actual viewer and content.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Choosing keywords unrelated to the video.",
            "Focusing only on search volume.",
            "Repeating keywords unnaturally.",
            "Ignoring search intent.",
            "Trying to target too many unrelated topics.",
            "Creating content that does not satisfy the search.",
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
          TURN KEYWORDS INTO IDEAS
      ====================================================== */}

      <section>
        <RgybHeading>
          Turn Keywords Into YouTube Video Ideas
        </RgybHeading>

        <p className="mt-5">
          Keyword research can be more useful when you turn the results
          into actual content questions. For each promising keyword, ask
          what problem the viewer is trying to solve and what information
          your video can provide.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 sm:p-8">

          <ol className="space-y-4">

            {[
              "Choose a relevant keyword.",
              "Identify the viewer's intent.",
              "Define the problem or question.",
              "Plan the information your video will provide.",
              "Create a clear title and thumbnail concept.",
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
          COMPLETE WORKFLOW
      ====================================================== */}

      <section>
        <RgybHeading>
          Complete YouTube Keyword Research Workflow
        </RgybHeading>

        <p className="mt-5">
          A simple workflow can turn keyword research into an actual
          content strategy.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {[
            [
              "01",
              "Choose Topic",
              "Start with a broad subject relevant to your audience.",
            ],
            [
              "02",
              "Find Keywords",
              "Explore specific and related search phrases.",
            ],
            [
              "03",
              "Analyze Intent",
              "Understand what the viewer wants from the search.",
            ],
            [
              "04",
              "Select Keywords",
              "Keep phrases that genuinely match your video.",
            ],
            [
              "05",
              "Create Content",
              "Build a useful video around the selected topic.",
            ],
            [
              "06",
              "Optimize",
              "Improve the title, description and overall packaging.",
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
          SEO TOOL CONNECTIONS
      ====================================================== */}

      <section>
        <RgybHeading>
          From Keywords to a Complete YouTube Video
        </RgybHeading>

        <p className="mt-5">
          Keyword research is only the beginning of the content workflow.
          After finding a topic, you can create a title, description,
          script, thumbnail concept, and other supporting content.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {[
            [
              "Keyword Generator",
              "Find keyword and topic ideas.",
              "/tools/keyword-generator",
            ],
            [
              "Title Generator",
              "Create title ideas from your topic.",
              "/tools/title-generator",
            ],
            [
              "Description Generator",
              "Create a starting description.",
              "/tools/description-generator",
            ],
            [
              "Script Generator",
              "Build a starting video script.",
              "/tools/script-generator",
            ],
            [
              "Thumbnail Generator",
              "Explore thumbnail concepts.",
              "/tools/thumbnail-generator",
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
          CHECKLIST
      ====================================================== */}

      <section>
        <RgybHeading>
          YouTube Keyword Research Checklist
        </RgybHeading>

        <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6 sm:p-8">

          <ul className="grid gap-4 sm:grid-cols-2">

            {[
              "Keyword is relevant to the video.",
              "Search intent is understood.",
              "The topic matches the target audience.",
              "Specific keyword variations were considered.",
              "Related keywords were explored.",
              "The keyword can be used naturally.",
              "The video provides a useful answer or solution.",
              "Title accurately represents the content.",
              "Description supports the video's topic.",
              "Final content was reviewed before publishing.",
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
          Frequently Asked Questions About YouTube Keywords
        </RgybHeading>

        <div className="mt-6 space-y-5">

          {[
            [
              "What are YouTube keywords?",
              "YouTube keywords are words or phrases that describe the subject or search topic associated with a video.",
            ],
            [
              "Why is keyword research important for YouTube?",
              "Keyword research can help creators understand topics, questions and phrases related to their audience and use that information when planning content.",
            ],
            [
              "Should I use popular keywords only?",
              "No. Relevance and search intent are important. A keyword should match what your video actually provides.",
            ],
            [
              "What are long-tail YouTube keywords?",
              "Long-tail keywords are more specific phrases that usually represent a narrower topic or clearer search intent.",
            ],
            [
              "Can keywords guarantee YouTube rankings?",
              "No. Keywords are only one part of YouTube optimization. Content quality, viewer satisfaction, relevance and other factors also matter.",
            ],
            [
              "Can TubeKit generate YouTube keyword ideas?",
              "Yes. TubeKit's Keyword Generator can generate keyword suggestions from a video topic that you can use as a starting point for research.",
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
            Create Better YouTube Content With TubeKit
          </h2>

          <p className="mt-3 text-slate-400">
            Generate keyword ideas from your YouTube video topic and use
            the suggestions as a starting point for your content research.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <ToolLink
              to="/tools/keyword-generator"
              primary
            >
              Generate Keywords →
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

export default KeywordGuide;