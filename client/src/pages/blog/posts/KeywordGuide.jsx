import { Link } from "react-router-dom";

function KeywordGuide() {
  return (
    <div className="space-y-8 text-base leading-8 text-slate-300">
      <section>
        <h2 className="text-2xl font-bold text-white">
          What Are YouTube Keywords?
        </h2>

        <p className="mt-4">
          YouTube keywords are words and phrases that describe the topic
          of a video. They can help creators understand how people may
          search for information related to their content.
        </p>

        <p className="mt-4">
          Good keyword research starts with the actual topic and audience
          rather than simply looking for popular words. The keyword should
          be relevant to what the video genuinely provides.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Why Keyword Research Matters
        </h2>

        <p className="mt-4">
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
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          1. Start With a Broad Topic
        </h2>

        <p className="mt-4">
          Begin with the main subject of your video. For example, if your
          channel focuses on YouTube growth, a broad topic could be
          "YouTube SEO" or "YouTube thumbnails."
        </p>

        <p className="mt-4">
          Starting broad gives you a base from which you can discover
          more specific search phrases and related questions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          2. Find Specific Search Phrases
        </h2>

        <p className="mt-4">
          Broad keywords can have many different meanings. More specific
          phrases can help you understand exactly what a viewer is trying
          to learn.
        </p>

        <p className="mt-4">
          For example, instead of only researching "YouTube SEO," you
          could explore more specific topics such as "YouTube SEO for
          beginners" or "how to optimize YouTube videos."
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          3. Think About Search Intent
        </h2>

        <p className="mt-4">
          Search intent describes what someone is trying to accomplish
          when they search for a topic.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>
            <strong>Informational:</strong> The viewer wants to learn
            something.
          </li>
          <li>
            <strong>How-to:</strong> The viewer wants instructions.
          </li>
          <li>
            <strong>Comparison:</strong> The viewer wants to compare
            options.
          </li>
          <li>
            <strong>Problem-solving:</strong> The viewer wants a solution
            to a specific problem.
          </li>
        </ul>

        <p className="mt-5">
          Understanding intent helps you create a video that actually
          answers the question behind the search.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          4. Use Related Keywords
        </h2>

        <p className="mt-4">
          A single topic can have many related terms. Exploring related
          keywords can help you discover additional video ideas and
          supporting topics.
        </p>

        <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
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
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          5. Choose Keywords That Match Your Video
        </h2>

        <p className="mt-4">
          A keyword should accurately describe the content you are
          publishing. Avoid selecting a keyword simply because it appears
          popular if your video does not provide what the searcher expects.
        </p>

        <p className="mt-4">
          Relevance should come before trying to include as many keywords
          as possible.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          6. Use Keywords Naturally
        </h2>

        <p className="mt-4">
          Once you identify useful keywords, incorporate them naturally
          into relevant parts of your content strategy.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Video title when appropriate.</li>
          <li>Video description.</li>
          <li>Video script and spoken content when relevant.</li>
          <li>Content topic and structure.</li>
        </ul>

        <p className="mt-5">
          Avoid repeating the same keyword excessively. Natural language
          is easier for viewers to understand.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Keyword Research Mistakes to Avoid
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Choosing keywords unrelated to the video.</li>
          <li>Focusing only on search volume.</li>
          <li>Repeating keywords unnaturally.</li>
          <li>Ignoring search intent.</li>
          <li>Trying to target too many unrelated topics.</li>
          <li>Creating content that does not satisfy the search.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Turn Keywords Into Video Ideas
        </h2>

        <p className="mt-4">
          Keyword research can be more useful when you turn the results
          into actual content questions. For each promising keyword, ask
          what problem the viewer is trying to solve and what information
          your video can provide.
        </p>

        <ol className="mt-5 list-decimal space-y-3 pl-6">
          <li>Choose a relevant keyword.</li>
          <li>Identify the viewer's intent.</li>
          <li>Define the problem or question.</li>
          <li>Plan the information your video will provide.</li>
          <li>Create a clear title and thumbnail concept.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Create Better YouTube Content With TubeKit
        </h2>

        <p className="mt-4">
          Keyword research is only the beginning of the content workflow.
          After finding a topic, you can create a title, description,
          script, thumbnail concept, and other supporting content.
        </p>

        <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Start With the TubeKit Keyword Generator
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Generate keyword ideas from your YouTube video topic and use
            the suggestions as a starting point for your content research.
          </p>

          <Link
            to="/tools/keyword-generator"
            className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Generate Keywords →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default KeywordGuide;