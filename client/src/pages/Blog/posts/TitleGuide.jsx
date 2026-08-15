import { Link } from "react-router-dom";

function RgybHeading({ number, children, color = "red" }) {
  const colors = {
    red: "border-red-500/40 bg-red-500/10 text-red-300",
    yellow: "border-yellow-500/40 bg-yellow-500/10 text-yellow-300",
    green: "border-green-500/40 bg-green-500/10 text-green-300",
    blue: "border-blue-500/40 bg-blue-500/10 text-blue-300",
  };

  return (
    <h2
      className={`rounded-xl border px-5 py-4 text-2xl font-bold ${colors[color]}`}
    >
      {number && (
        <span className="mr-2">
          {number}.
        </span>
      )}
      {children}
    </h2>
  );
}

function ToolLink({ to, children, color = "blue" }) {
  const styles = {
    red: "border-red-500/20 bg-red-500/5 text-red-300 hover:text-red-200",
    yellow:
      "border-yellow-500/20 bg-yellow-500/5 text-yellow-300 hover:text-yellow-200",
    green:
      "border-green-500/20 bg-green-500/5 text-green-300 hover:text-green-200",
    blue: "border-blue-500/20 bg-blue-500/5 text-blue-300 hover:text-blue-200",
  };

  return (
    <Link
      to={to}
      className={`font-semibold underline decoration-current underline-offset-4 transition ${styles[color]}`}
    >
      {children}
    </Link>
  );
}

function TitleGuide() {
  return (
    <article className="space-y-10 text-base leading-8 text-slate-300">
      {/* Introduction */}
      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
          <p className="text-lg leading-8 text-slate-200">
            A strong YouTube title can make it easier for viewers to
            understand what your video is about and decide whether it is
            worth watching. The best YouTube titles are clear, relevant,
            specific, and written for the audience you want to reach.
          </p>

          <p className="mt-4 leading-8 text-slate-400">
            In this guide, you will learn how to write better YouTube
            titles, use keywords naturally, create curiosity without
            misleading viewers, and build title ideas that work with your
            thumbnail and video content.
          </p>
        </div>
      </section>

      {/* Why Titles Matter */}
      <section>
        <RgybHeading color="red">
          Why Do YouTube Titles Matter?
        </RgybHeading>

        <p className="mt-4">
          Your YouTube title is one of the first pieces of information a
          viewer sees when discovering a video. It appears alongside your
          thumbnail in places such as YouTube Search, Home, suggested
          videos, playlists, and other discovery surfaces.
        </p>

        <p className="mt-4">
          A good YouTube title should quickly communicate the subject,
          benefit, question, or result covered by the video. It should also
          match the actual content so viewers know what to expect after
          clicking.
        </p>

        <p className="mt-4">
          The goal is not simply to create a sensational headline. A
          useful title combines <strong>clarity, relevance, curiosity,
          and accuracy</strong>.
        </p>
      </section>

      {/* Audience */}
      <section>
        <RgybHeading number="1" color="yellow">
          Understand Your Target Audience
        </RgybHeading>

        <p className="mt-4">
          Before creating a YouTube title, identify who the video is
          intended for. A title written for beginners may need different
          wording from a title aimed at experienced creators or
          professionals.
        </p>

        <p className="mt-4">
          Ask yourself what your audience is searching for, what problem
          they want to solve, and what information they expect from the
          video.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Who is the video for?</li>
          <li>What problem does the video solve?</li>
          <li>What result will the viewer get?</li>
          <li>What words would your audience use to describe the topic?</li>
        </ul>
      </section>

      {/* Clear Topic */}
      <section>
        <RgybHeading number="2" color="green">
          Make Your YouTube Title Clear and Specific
        </RgybHeading>

        <p className="mt-4">
          Avoid titles that are so vague that viewers cannot understand
          the video's topic. A specific title gives the viewer a much
          clearer reason to consider watching.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <h3 className="font-semibold text-red-300">
              Too Generic
            </h3>

            <p className="mt-2 text-slate-400">
              YouTube Tips
            </p>
          </div>

          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
            <h3 className="font-semibold text-green-300">
              More Specific
            </h3>

            <p className="mt-2 text-slate-400">
              10 YouTube SEO Tips for Beginners
            </p>
          </div>
        </div>

        <p className="mt-5">
          The second example gives the viewer more context about the
          subject and intended audience.
        </p>
      </section>

      {/* Keywords */}
      <section>
        <RgybHeading number="3" color="blue">
          Use YouTube Keywords Naturally
        </RgybHeading>

        <p className="mt-4">
          If your video targets a specific search topic, consider
          including the relevant keyword naturally in the title. The
          keyword should describe the actual content of the video rather
          than being added simply because it is popular.
        </p>

        <p className="mt-4">
          For example, if your video teaches viewers how to create YouTube
          thumbnails, a title such as{" "}
          <strong>How to Make YouTube Thumbnails</strong> clearly describes
          the subject.
        </p>

        <p className="mt-4">
          Avoid repeating the same keyword multiple times. Natural
          language is easier to read and creates a better experience for
          viewers.
        </p>

        <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
          <h3 className="text-lg font-semibold text-blue-300">
            Need YouTube Keyword Ideas?
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Find related keyword ideas before creating your title.
          </p>

          <Link
            to="/tools/keyword-generator"
            className="mt-4 inline-flex font-semibold text-blue-400 hover:text-blue-300"
          >
            Try the YouTube Keyword Generator →
          </Link>
        </div>
      </section>

      {/* Search Intent */}
      <section>
        <RgybHeading number="4" color="red">
          Match the Search Intent
        </RgybHeading>

        <p className="mt-4">
          One of the most important parts of creating a searchable YouTube
          title is understanding what the viewer actually wants.
        </p>

        <p className="mt-4">
          For example, someone searching for{" "}
          <strong>how to edit YouTube videos</strong> is probably looking
          for a tutorial. A title that clearly promises a tutorial is
          more relevant than a vague title such as "My Editing Experience."
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>
            <strong>How-to intent:</strong> How to Edit YouTube Videos
          </li>
          <li>
            <strong>Informational intent:</strong> YouTube SEO Explained
          </li>
          <li>
            <strong>Comparison intent:</strong> YouTube Shorts vs Long Videos
          </li>
          <li>
            <strong>Problem-solving intent:</strong> Why Your YouTube Videos
            Get No Views
          </li>
          <li>
            <strong>List intent:</strong> 10 YouTube Tips for Beginners
          </li>
        </ul>
      </section>

      {/* Curiosity */}
      <section>
        <RgybHeading number="5" color="yellow">
          Create Curiosity Without Clickbait
        </RgybHeading>

        <p className="mt-4">
          Curiosity can make a title more interesting, but misleading
          clickbait can create the wrong expectations. Your title should
          accurately represent what viewers will find in the video.
        </p>

        <p className="mt-4">
          Instead of making an unsupported claim, highlight the most
          interesting question, result, mistake, method, or lesson
          covered by your video.
        </p>

        <div className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <p className="font-semibold text-yellow-300">
            Better approach:
          </p>

          <p className="mt-2 text-slate-400">
            Highlight a genuine benefit or interesting idea instead of
            promising something the video does not deliver.
          </p>
        </div>
      </section>

      {/* Title Length */}
      <section>
        <RgybHeading number="6" color="green">
          Keep YouTube Titles Concise and Easy to Read
        </RgybHeading>

        <p className="mt-4">
          YouTube titles can appear across different devices and surfaces.
          Long or complicated titles may make it harder for viewers to
          understand the main topic quickly.
        </p>

        <p className="mt-4">
          Put the most important information near the beginning whenever
          it makes sense. Remove unnecessary words and avoid excessive
          capitalization or punctuation.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Keep the main topic easy to identify.</li>
          <li>Remove unnecessary filler words.</li>
          <li>Avoid excessive CAPITALIZATION.</li>
          <li>Do not use repeated punctuation!!!</li>
          <li>Write naturally for real viewers.</li>
        </ul>
      </section>

      {/* Thumbnail */}
      <section>
        <RgybHeading number="7" color="blue">
          Match Your YouTube Title With Your Thumbnail
        </RgybHeading>

        <p className="mt-4">
          Your title and thumbnail should work together. The thumbnail can
          communicate a visual idea while the title provides additional
          context.
        </p>

        <p className="mt-4">
          Avoid simply repeating the exact same words in both. Instead,
          make each element contribute something useful to the overall
          message.
        </p>

        <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
          <h3 className="text-lg font-semibold text-blue-300">
            Need Thumbnail Ideas?
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Create thumbnail concepts that complement your video title and
            topic.
          </p>

          <Link
            to="/tools/thumbnail-generator"
            className="mt-4 inline-flex font-semibold text-blue-400 hover:text-blue-300"
          >
            Try the AI Thumbnail Generator →
          </Link>
        </div>
      </section>

      {/* Title Formulas */}
      <section>
        <RgybHeading color="red">
          YouTube Title Ideas and Formulas
        </RgybHeading>

        <p className="mt-4">
          Title formulas can help you generate multiple ideas quickly.
          They are starting points, not guaranteed ranking formulas.
        </p>

        <div className="mt-6 space-y-3">
          {[
            "How to [Achieve a Specific Result]",
            "[Number] YouTube Tips for Beginners",
            "How I [Achieved a Specific Result]",
            "[Topic]: Complete Beginner's Guide",
            "[Problem]? Here's How to Fix It",
            "[Number] Mistakes That Are Hurting Your YouTube Channel",
            "The Beginner's Guide to [Topic]",
            "How to Get Better at [Topic]",
            "[Topic] Explained in Simple Terms",
            "Everything You Need to Know About [Topic]",
          ].map((formula, index) => (
            <div
              key={formula}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3"
            >
              <span className="mr-3 font-semibold text-slate-500">
                {index + 1}.
              </span>

              <span className="text-slate-200">
                {formula}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Examples */}
      <section>
        <RgybHeading color="yellow">
          YouTube Title Examples
        </RgybHeading>

        <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[650px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-5 py-4 font-semibold text-yellow-300">
                  Topic
                </th>

                <th className="px-5 py-4 font-semibold text-yellow-300">
                  Example Title
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-white/10">
                <td className="px-5 py-4 text-slate-400">
                  YouTube SEO
                </td>

                <td className="px-5 py-4 text-white">
                  YouTube SEO for Beginners: Complete Guide
                </td>
              </tr>

              <tr className="border-b border-white/10">
                <td className="px-5 py-4 text-slate-400">
                  YouTube Shorts
                </td>

                <td className="px-5 py-4 text-white">
                  How to Get More Views on YouTube Shorts
                </td>
              </tr>

              <tr className="border-b border-white/10">
                <td className="px-5 py-4 text-slate-400">
                  YouTube Thumbnails
                </td>

                <td className="px-5 py-4 text-white">
                  How to Make Better YouTube Thumbnails
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-slate-400">
                  YouTube Growth
                </td>

                <td className="px-5 py-4 text-white">
                  10 YouTube Growth Tips for New Creators
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Common Mistakes */}
      <section>
        <RgybHeading color="green">
          Common YouTube Title Mistakes to Avoid
        </RgybHeading>

        <ul className="mt-5 space-y-3">
          {[
            "Using misleading claims or clickbait.",
            "Making the title so vague that the topic is unclear.",
            "Adding unrelated keywords.",
            "Repeating keywords unnaturally.",
            "Using excessive capitalization.",
            "Writing extremely complicated titles.",
            "Making the title different from the actual video.",
            "Trying to target several unrelated topics in one title.",
            "Ignoring the audience's search intent.",
            "Copying competitors instead of creating an original angle.",
          ].map((mistake) => (
            <li
              key={mistake}
              className="rounded-lg border border-white/5 bg-white/[0.02] px-4 py-2"
            >
              <span className="mr-2 text-red-400">✕</span>
              {mistake}
            </li>
          ))}
        </ul>
      </section>

      {/* SEO Checklist */}
      <section>
        <RgybHeading color="blue">
          YouTube Title SEO Checklist
        </RgybHeading>

        <p className="mt-4">
          Before publishing your video, quickly review your title using
          this checklist.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Does the title clearly describe the video?",
            "Is the primary topic obvious?",
            "Does the title match the search intent?",
            "Is the keyword used naturally?",
            "Does the title accurately represent the content?",
            "Does it work with the thumbnail?",
            "Is it easy to understand on mobile?",
            "Does it give viewers a clear reason to watch?",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 text-green-200"
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </section>

      {/* Generate Titles */}
      <section>
        <RgybHeading color="red">
          Generate YouTube Title Ideas With TubeKit
        </RgybHeading>

        <p className="mt-4">
          Coming up with several title variations can help you find a
          clearer and more compelling way to present the same video topic.
          Instead of using the first idea that comes to mind, generate
          multiple options and choose the one that best matches your
          content and audience.
        </p>

        <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
          <h3 className="text-xl font-bold text-red-300">
            Try the TubeKit AI YouTube Title Generator
          </h3>

          <p className="mt-3 text-slate-400">
            Enter your video topic and generate multiple YouTube title
            ideas. Review the suggestions and customize the final title
            before publishing.
          </p>

          <Link
            to="/tools/title-generator"
            className="mt-5 inline-flex rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-500"
          >
            Generate YouTube Titles →
          </Link>
        </div>
      </section>

      {/* Related Tools */}
      <section>
        <RgybHeading color="yellow">
          Related YouTube SEO Tools
        </RgybHeading>

        <p className="mt-4">
          A YouTube title is only one part of your overall video SEO
          workflow. You can use related TubeKit tools to prepare other
          parts of your video.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            to="/tools/keyword-generator"
            className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 transition hover:bg-blue-500/10"
          >
            <h3 className="font-bold text-blue-300">
              YouTube Keyword Generator
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Find relevant keyword ideas for your video topic.
            </p>
          </Link>

          <Link
            to="/tools/description-generator"
            className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 transition hover:bg-green-500/10"
          >
            <h3 className="font-bold text-green-300">
              YouTube Description Generator
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Generate structured descriptions for your videos.
            </p>
          </Link>

          <Link
            to="/tools/tags-generator"
            className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5 transition hover:bg-yellow-500/10"
          >
            <h3 className="font-bold text-yellow-300">
              YouTube Tags Generator
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Generate relevant tag ideas based on your topic.
            </p>
          </Link>

          <Link
            to="/tools/hashtag-generator"
            className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 transition hover:bg-red-500/10"
          >
            <h3 className="font-bold text-red-300">
              YouTube Hashtag Generator
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Create relevant hashtag ideas for your videos.
            </p>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <RgybHeading color="green">
          Frequently Asked Questions About YouTube Titles
        </RgybHeading>

        <div className="mt-6 space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-white">
              How do I write a good YouTube title?
            </h3>

            <p className="mt-2">
              Start with the main topic or benefit of your video. Make the
              title specific, easy to understand, relevant to your audience,
              and accurate to the content.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              What makes a YouTube title catchy?
            </h3>

            <p className="mt-2">
              A catchy title usually communicates a clear idea while
              creating genuine curiosity. Specific benefits, questions,
              numbers, problems, and outcomes can make titles more
              interesting when they accurately represent the video.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Should I put keywords in my YouTube title?
            </h3>

            <p className="mt-2">
              Relevant keywords can help communicate the subject of your
              video, especially when they match what viewers are looking
              for. Use them naturally instead of stuffing multiple keywords
              into one title.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Does a YouTube title affect video discovery?
            </h3>

            <p className="mt-2">
              Your title helps communicate the video's topic and can
              influence how viewers understand and respond to your video.
              However, discovery depends on multiple factors rather than
              the title alone.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Should the YouTube title match the thumbnail?
            </h3>

            <p className="mt-2">
              The title and thumbnail should communicate a consistent
              message. They do not need to repeat the exact same words;
              instead, they can complement each other.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Can AI generate YouTube titles?
            </h3>

            <p className="mt-2">
              Yes. AI can generate title variations based on a video topic.
              However, creators should review the suggestions and make sure
              the final title accurately represents the actual video.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Is TubeKit's YouTube Title Generator free?
            </h3>

            <p className="mt-2">
              TubeKit provides an AI YouTube Title Generator that creators
              can use to generate title ideas based on their video topic.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <RgybHeading color="blue">
          Final Thoughts
        </RgybHeading>

        <p className="mt-4">
          The best YouTube title is not necessarily the most sensational
          one. It is the title that clearly communicates the video's value,
          matches the audience's intent, works with the thumbnail, and
          accurately represents the content.
        </p>

        <p className="mt-4">
          Start with your topic, understand what your audience wants, use
          relevant keywords naturally, create genuine curiosity, and test
          different title ideas before publishing.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
          <p className="text-lg font-semibold text-blue-300">
            Ready to create your next YouTube title?
          </p>

          <p className="mt-2 text-slate-400">
            Use TubeKit to generate multiple AI-powered YouTube title ideas
            from your video topic.
          </p>

          <Link
            to="/tools/title-generator"
            className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Try YouTube Title Generator →
          </Link>
        </div>
      </section>
    </article>
  );
}

export default TitleGuide;