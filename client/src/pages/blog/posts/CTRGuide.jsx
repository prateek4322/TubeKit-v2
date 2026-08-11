import { Link } from "react-router-dom";

function CTRGuide() {
  return (
    <div className="space-y-8 text-base leading-8 text-slate-300">

      <section>
        <h2 className="text-2xl font-bold text-white">
          What Is YouTube CTR?
        </h2>

        <p className="mt-4">
          YouTube CTR, or click-through rate, measures how often viewers click
          on a video after seeing its thumbnail on eligible YouTube surfaces.
        </p>

        <p className="mt-4">
          CTR can help creators understand how effectively their video
          packaging attracts clicks. However, CTR should be considered
          alongside impressions, traffic sources and viewer behavior.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Why Is YouTube CTR Important?
        </h2>

        <p className="mt-4">
          A compelling title and thumbnail can increase the number of people
          who choose to watch when they encounter your video. Better packaging
          can therefore create more opportunities for your content to receive
          views.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          1. Create Clear YouTube Thumbnails
        </h2>

        <p className="mt-4">
          Your thumbnail should communicate the main idea quickly. Use a
          strong visual concept, readable text when necessary and a design
          that remains understandable on smaller screens.
        </p>

        <Link
          to="/tools/thumbnail-generator"
          className="mt-5 inline-flex font-semibold text-blue-400 hover:text-blue-300"
        >
          Generate Thumbnail Ideas →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          2. Write Better Titles
        </h2>

        <p className="mt-4">
          A good title should clearly explain the video's value while creating
          enough curiosity to encourage the right viewer to click.
        </p>

        <Link
          to="/tools/title-generator"
          className="mt-5 inline-flex font-semibold text-blue-400 hover:text-blue-300"
        >
          Generate YouTube Titles →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          3. Make the Title and Thumbnail Work Together
        </h2>

        <p className="mt-4">
          Avoid simply repeating the same words in both. Instead, let the
          thumbnail and title communicate complementary information that gives
          viewers a clear reason to click.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          4. Avoid Misleading Clickbait
        </h2>

        <p className="mt-4">
          A high click-through rate is not useful if viewers immediately leave
          because the video does not deliver what the title and thumbnail
          promised.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          5. Test Different Packaging Approaches
        </h2>

        <p className="mt-4">
          If a video receives impressions but fewer clicks than expected,
          consider whether the title or thumbnail clearly communicates the
          value of the video.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Does a Higher CTR Always Mean More Views?
        </h2>

        <p className="mt-4">
          No. CTR is only one part of YouTube performance. A video can have a
          strong CTR but limited impressions, while another video can have a
          lower CTR and still receive substantial views because it is shown to
          a much larger audience.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Final Thoughts
        </h2>

        <p className="mt-4">
          Improving YouTube CTR starts with better video packaging. Create
          accurate, compelling titles and thumbnails, then evaluate the results
          using your broader YouTube Analytics data.
        </p>

        <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Improve Your YouTube Packaging
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Use TubeKit to generate YouTube title and thumbnail ideas for your
            next video.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              to="/tools/title-generator"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Title Generator
            </Link>

            <Link
              to="/tools/thumbnail-generator"
              className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Thumbnail Generator
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default CTRGuide;