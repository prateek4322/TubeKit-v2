import { Link } from "react-router-dom";

function TitleGuide() {
  return (
    <div className="space-y-8 text-base leading-8 text-slate-300">
      <section>
        <h2 className="text-2xl font-bold text-white">
          Why YouTube Titles Matter
        </h2>

        <p className="mt-4">
          Your YouTube title is one of the first things viewers see when
          deciding whether to watch a video. A clear and relevant title
          helps viewers understand what your video offers before they
          click.
        </p>

        <p className="mt-4">
          A good title should communicate the subject of the video without
          making promises that the content does not deliver. The goal is
          not simply to make a title sound exciting, but to create an
          accurate expectation for the viewer.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          1. Understand Your Target Audience
        </h2>

        <p className="mt-4">
          Before writing a title, think about who the video is intended
          for. Beginners, experienced creators, students, gamers,
          businesses, and other audiences may respond to different wording.
        </p>

        <p className="mt-4">
          Understanding your audience also helps you choose the language
          and level of detail that makes the topic immediately
          understandable.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          2. Make the Topic Clear
        </h2>

        <p className="mt-4">
          Avoid titles that are so vague that viewers cannot understand
          the video's subject. Include the main topic or benefit when it
          can be done naturally.
        </p>

        <p className="mt-4">
          For example, instead of using a generic title such as
          <strong> "YouTube Tips"</strong>, a more specific title could
          explain exactly what the viewer will learn.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          3. Use Relevant Keywords Naturally
        </h2>

        <p className="mt-4">
          Relevant keywords can help communicate the topic of a video.
          However, keywords should be used naturally rather than repeatedly
          inserting search terms into the title.
        </p>

        <p className="mt-4">
          Start with the topic your audience is actually interested in and
          build the title around that topic.
        </p>

        <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <p className="text-sm leading-7 text-slate-300">
            Need keyword ideas? Try the{" "}
            <Link
              to="/tools/keyword-generator"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              YouTube Keyword Generator
            </Link>{" "}
            to generate topic-related keyword ideas.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          4. Create Curiosity Without Misleading Viewers
        </h2>

        <p className="mt-4">
          Curiosity can make a title more interesting, but the title should
          still accurately represent the video. Avoid making claims that
          the video does not support.
        </p>

        <p className="mt-4">
          Identify the most interesting question, result, problem, or idea
          covered by the video and reflect that in the title.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          5. Keep Titles Easy to Understand
        </h2>

        <p className="mt-4">
          Viewers often encounter YouTube titles on mobile devices, search
          results, recommendations, and playlists. Keep the most important
          information near the beginning of the title when possible.
        </p>

        <p className="mt-4">
          Avoid unnecessary words, excessive capitalization, and confusing
          punctuation. A simple title can be more effective than one that
          tries to communicate too many ideas at once.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          6. Match Your Title With Your Thumbnail
        </h2>

        <p className="mt-4">
          Your title and thumbnail should work together. The thumbnail can
          communicate an important visual idea while the title provides
          additional context.
        </p>

        <p className="mt-4">
          Avoid repeating exactly the same information in both. Instead,
          use the two elements to give viewers a clear and accurate
          understanding of the video.
        </p>

        <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <p className="text-sm leading-7 text-slate-300">
            Planning your thumbnail? Try the{" "}
            <Link
              to="/tools/thumbnail-generator"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              AI Thumbnail Generator
            </Link>{" "}
            for thumbnail concept ideas.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Examples of YouTube Title Formats
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>How to [Achieve a Specific Result]</li>
          <li>[Number] YouTube Tips for Beginners</li>
          <li>How I [Achieved a Specific Result]</li>
          <li>[Topic]: Complete Beginner's Guide</li>
          <li>[Problem]? Here's How to Fix It</li>
        </ul>

        <p className="mt-5">
          These are starting points rather than guaranteed formulas. The
          best format depends on the topic, audience, and actual value
          provided by the video.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Common YouTube Title Mistakes
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Using misleading claims.</li>
          <li>Making the title too vague.</li>
          <li>Adding unrelated keywords.</li>
          <li>Using excessive capitalization.</li>
          <li>Writing titles that do not match the video.</li>
          <li>Trying to target too many topics in one title.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Create YouTube Title Ideas With TubeKit
        </h2>

        <p className="mt-4">
          Writing multiple title variations can help you compare different
          ways of presenting the same video topic. Instead of stopping at
          the first idea, create several relevant options and choose the
          one that best represents your content.
        </p>

        <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Try the TubeKit AI YouTube Title Generator
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Generate YouTube title ideas based on your video topic and
            customize the results to match your audience and content.
          </p>

          <Link
            to="/tools/title-generator"
            className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Generate YouTube Titles →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default TitleGuide;