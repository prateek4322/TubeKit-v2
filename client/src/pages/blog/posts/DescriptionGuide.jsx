import { Link } from "react-router-dom";

function DescriptionGuide() {
  return (
    <div className="space-y-8 text-base leading-8 text-slate-300">
      <section>
        <h2 className="text-2xl font-bold text-white">
          Why YouTube Descriptions Matter
        </h2>

        <p className="mt-4">
          A YouTube description gives viewers additional information about
          your video. It can explain what the video covers, provide useful
          links, add context, and help viewers understand what they can
          expect from the content.
        </p>

        <p className="mt-4">
          A useful description should be written primarily for people.
          Keywords can be included naturally when they accurately describe
          the video, but repeatedly adding keywords can make the description
          difficult to read.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          1. Start With a Clear Introduction
        </h2>

        <p className="mt-4">
          The beginning of your description should quickly explain what the
          video is about. Mention the main topic and the value viewers can
          expect from watching.
        </p>

        <p className="mt-4">
          Avoid starting with unnecessary information. Put the most useful
          context near the beginning so viewers can understand the video
          quickly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          2. Explain What Viewers Will Learn
        </h2>

        <p className="mt-4">
          A good description can summarize the main points covered in the
          video. This is particularly useful for tutorials, educational
          videos, reviews, and other content where viewers want to know what
          they will learn.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Explain the main topic.</li>
          <li>Mention important sections or topics.</li>
          <li>Describe the main benefit of watching.</li>
          <li>Keep the information accurate.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          3. Use Relevant Keywords Naturally
        </h2>

        <p className="mt-4">
          Include words and phrases that accurately describe your video.
          Think about the language your audience would naturally use when
          searching for information about the topic.
        </p>

        <p className="mt-4">
          Do not turn the description into a list of unrelated search
          terms. Write naturally and prioritize useful information.
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
            to find relevant topic ideas.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          4. Add Useful Links
        </h2>

        <p className="mt-4">
          If your video refers to a website, resource, product, social
          profile, or another relevant page, you can include the appropriate
          link in the description.
        </p>

        <p className="mt-4">
          Keep links relevant to the video and organize them clearly so
          viewers can understand where each link leads.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          5. Add Timestamps When Useful
        </h2>

        <p className="mt-4">
          Longer videos can benefit from timestamps that help viewers move
          directly to important sections. Use clear and descriptive labels
          for each section.
        </p>

        <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <p className="text-sm leading-7 text-slate-300">
            Example:
          </p>

          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>00:00 Introduction</li>
            <li>01:25 Getting Started</li>
            <li>04:10 Main Strategy</li>
            <li>08:35 Common Mistakes</li>
            <li>11:20 Final Tips</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          6. Include a Clear Call to Action
        </h2>

        <p className="mt-4">
          When appropriate, tell viewers what they can do next. This could
          include watching another relevant video, visiting a resource,
          subscribing to the channel, or trying a useful tool.
        </p>

        <p className="mt-4">
          Keep the call to action relevant instead of adding a long list of
          unrelated requests.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          YouTube Description Structure
        </h2>

        <ol className="mt-5 list-decimal space-y-3 pl-6">
          <li>Short introduction to the video.</li>
          <li>Summary of the main information.</li>
          <li>Important links or resources.</li>
          <li>Timestamps for longer videos.</li>
          <li>Relevant call to action.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Common YouTube Description Mistakes
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Using unrelated keywords.</li>
          <li>Writing a description that does not match the video.</li>
          <li>Adding excessive repetitive text.</li>
          <li>Leaving important resources difficult to find.</li>
          <li>Using misleading information.</li>
          <li>Ignoring the viewer's need for useful context.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Create YouTube Descriptions With TubeKit
        </h2>

        <p className="mt-4">
          Writing descriptions manually for every video can take time.
          TubeKit's AI tools can help creators generate a starting draft
          that can then be reviewed and customized for the actual video.
        </p>

        <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Try the TubeKit AI Description Generator
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Generate a YouTube description based on your video topic and
            customize it before publishing.
          </p>

          <Link
            to="/tools/description-generator"
            className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Generate YouTube Description →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default DescriptionGuide;