import { Link } from "react-router-dom";

function SubscribersGuide() {
  return (
    <div className="space-y-8 text-base leading-8 text-slate-300">

      <section>
        <h2 className="text-2xl font-bold text-white">
          How to Get More Subscribers on YouTube
        </h2>

        <p className="mt-4">
          Getting more YouTube subscribers is not only about uploading more
          videos. You need content that attracts the right viewers, keeps them
          watching and gives them a clear reason to subscribe.
        </p>

        <p className="mt-4">
          A strong YouTube growth strategy combines useful content, compelling
          titles, attractive thumbnails, audience retention and consistent
          publishing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          1. Choose a Clear YouTube Niche
        </h2>

        <p className="mt-4">
          A clear niche helps viewers understand what your channel is about.
          When your videos consistently serve a particular audience, viewers
          are more likely to watch additional videos and subscribe.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          2. Create Videos People Actually Want to Watch
        </h2>

        <p className="mt-4">
          Before creating a video, identify the problem, question or interest
          your target audience has. Your video should provide a clear reason
          for someone to click and continue watching.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          3. Write Better YouTube Titles
        </h2>

        <p className="mt-4">
          Your title should clearly communicate what the viewer will get from
          the video. Use relevant keywords naturally while making the title
          interesting enough to encourage a click.
        </p>

        <Link
          to="/tools/title-generator"
          className="mt-5 inline-flex font-semibold text-blue-400 hover:text-blue-300"
        >
          Try TubeKit AI Title Generator →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          4. Improve Your YouTube Thumbnails
        </h2>

        <p className="mt-4">
          A thumbnail should be easy to understand at a glance. Avoid
          unnecessary text and focus on one clear visual idea that matches the
          video.
        </p>

        <Link
          to="/tools/thumbnail-generator"
          className="mt-5 inline-flex font-semibold text-blue-400 hover:text-blue-300"
        >
          Generate YouTube Thumbnail Ideas →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          5. Focus on Audience Retention
        </h2>

        <p className="mt-4">
          Getting a click is only the beginning. Your introduction should
          quickly explain what the video is about and give viewers a reason
          to continue watching.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          6. Use YouTube Shorts
        </h2>

        <p className="mt-4">
          Shorts can help creators reach new audiences. Create short,
          focused videos with a strong opening and connect them to the broader
          content on your channel when appropriate.
        </p>

        <Link
          to="/tools/shorts-generator"
          className="mt-5 inline-flex font-semibold text-blue-400 hover:text-blue-300"
        >
          Generate YouTube Shorts Ideas →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          7. Give Viewers a Reason to Subscribe
        </h2>

        <p className="mt-4">
          Do not simply ask everyone to subscribe. Explain what viewers can
          expect from your channel, such as future tutorials, new videos or
          useful content in the same topic.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          8. Be Consistent
        </h2>

        <p className="mt-4">
          A realistic publishing schedule is better than uploading frequently
          for a short period and then stopping. Choose a schedule that you can
          maintain over time.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          9. Study Your YouTube Analytics
        </h2>

        <p className="mt-4">
          Review which videos attract viewers, which topics perform well and
          where viewers stop watching. Use these insights to improve future
          videos rather than relying only on subscriber counts.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Final Thoughts
        </h2>

        <p className="mt-4">
          Growing YouTube subscribers takes time. Focus on creating useful
          videos, improving titles and thumbnails, keeping viewers engaged and
          building a consistent content strategy.
        </p>

        <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Grow Your YouTube Content Strategy
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Use TubeKit's AI tools to create better titles, thumbnail ideas and
            Shorts content.
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

export default SubscribersGuide;