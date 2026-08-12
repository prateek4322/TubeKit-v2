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
      {number && <span className="mr-2">{number}.</span>}
      {children}
    </h2>
  );
}

function SubscribersGuide() {
  return (
    <article className="space-y-10 text-base leading-8 text-slate-300">
      {/* INTRO */}
      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
          <p className="text-lg leading-8 text-slate-200">
            Want to get more subscribers on YouTube? Subscriber growth
            usually comes from attracting the right viewers, creating videos
            they want to watch, and giving them a clear reason to come back
            to your channel.
          </p>

          <p className="mt-4 text-slate-400">
            A successful YouTube growth strategy is more than simply asking
            viewers to subscribe. Your channel needs useful topics, strong
            titles, effective thumbnails, engaging videos, consistent
            publishing, and a clear content direction.
          </p>

          <p className="mt-4 text-slate-400">
            This guide explains practical ways to increase YouTube
            subscribers, attract new viewers, convert viewers into returning
            viewers, and build a stronger YouTube audience.
          </p>
        </div>
      </section>

      {/* WHAT DOES SUBSCRIBER GROWTH MEAN */}
      <section>
        <RgybHeading color="yellow">
          What Does YouTube Subscriber Growth Actually Mean?
        </RgybHeading>

        <p className="mt-4">
          A subscriber is a viewer who has chosen to follow your YouTube
          channel. However, your subscriber count does not tell you exactly
          how many people are actively watching your videos.
        </p>

        <p className="mt-4">
          YouTube recommends looking beyond subscriber count and using
          audience metrics such as monthly audience, unique viewers, and
          new, casual, and regular viewers to understand your active audience.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <h3 className="font-semibold text-red-300">New Viewers</h3>

            <p className="mt-2 text-sm text-slate-400">
              People discovering your channel for the first time.
            </p>
          </div>

          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
            <h3 className="font-semibold text-yellow-300">
              Casual Viewers
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              People who watch your content occasionally.
            </p>
          </div>

          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
            <h3 className="font-semibold text-green-300">
              Regular Viewers
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Viewers who consistently return to your channel.
            </p>
          </div>
        </div>
      </section>

      {/* 1 NICHE */}
      <section>
        <RgybHeading number="1" color="red">
          Choose a Clear YouTube Niche
        </RgybHeading>

        <p className="mt-4">
          A clear niche helps viewers quickly understand what your channel
          is about. If someone enjoys one of your videos, they should be able
          to understand what other content they can expect from your channel.
        </p>

        <p className="mt-4">
          You do not necessarily need to cover only one narrow topic.
          However, your content should have enough consistency that the same
          type of viewer can find multiple videos that are useful to them.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Define your target audience.</li>
          <li>Choose related content topics.</li>
          <li>Create repeatable content formats.</li>
          <li>Avoid constantly switching unrelated niches.</li>
          <li>Build a recognizable content theme.</li>
        </ul>
      </section>

      {/* 2 CONTENT */}
      <section>
        <RgybHeading number="2" color="yellow">
          Create Videos People Actually Want to Watch
        </RgybHeading>

        <p className="mt-4">
          The easiest way to get more YouTube subscribers is to create videos
          that solve problems, answer questions, entertain viewers, or provide
          information they genuinely want.
        </p>

        <p className="mt-4">Before creating a video, ask:</p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Who is this video for?</li>
          <li>What problem does it solve?</li>
          <li>What will viewers learn?</li>
          <li>Why would someone choose this video?</li>
          <li>What would make the viewer want another video from me?</li>
        </ul>

        <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <p className="text-sm text-slate-300">
            Need content ideas? Start by identifying questions and topics
            your target viewers are already interested in.
          </p>
        </div>
      </section>

      {/* 3 KEYWORDS */}
      <section>
        <RgybHeading number="3" color="green">
          Find YouTube Topics and Keywords Your Audience Searches For
        </RgybHeading>

        <p className="mt-4">
          Search-focused content can help new viewers discover your channel.
          Instead of choosing topics randomly, identify phrases and questions
          that are closely related to your niche.
        </p>

        <p className="mt-4">
          Focus on the actual topic and search intent rather than adding
          keywords that do not match your video.
        </p>

        <Link
          to="/tools/keyword-generator"
          className="mt-5 inline-flex font-semibold text-green-400 hover:text-green-300"
        >
          Generate YouTube Keywords →
        </Link>
      </section>

      {/* 4 TITLES */}
      <section>
        <RgybHeading number="4" color="blue">
          Write Better YouTube Titles
        </RgybHeading>

        <p className="mt-4">
          Your title helps viewers understand what your video is about before
          they click. YouTube recommends keeping titles accurate and concise,
          with important words near the beginning when appropriate.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Clearly communicate the video's topic.</li>
          <li>Use relevant keywords naturally.</li>
          <li>Put important information near the beginning.</li>
          <li>Avoid misleading claims.</li>
          <li>Write for humans rather than search engines alone.</li>
        </ul>

        <Link
          to="/tools/title-generator"
          className="mt-5 inline-flex font-semibold text-blue-400 hover:text-blue-300"
        >
          Try TubeKit AI Title Generator →
        </Link>
      </section>

      {/* 5 THUMBNAIL */}
      <section>
        <RgybHeading number="5" color="red">
          Create Better YouTube Thumbnails
        </RgybHeading>

        <p className="mt-4">
          Viewers often see your thumbnail and title together when deciding
          whether to watch a video. Your thumbnail should communicate one
          clear visual idea and accurately represent the content.
        </p>

        <p className="mt-4">
          YouTube recommends keeping thumbnails easy to understand, avoiding
          unnecessary complexity, and considering how they appear across
          different devices.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Use one strong visual idea.</li>
          <li>Keep important text readable.</li>
          <li>Use clear visual hierarchy.</li>
          <li>Make the thumbnail relevant to the video.</li>
          <li>Test different approaches over time.</li>
        </ul>

        <Link
          to="/tools/thumbnail-generator"
          className="mt-5 inline-flex font-semibold text-red-400 hover:text-red-300"
        >
          Generate YouTube Thumbnail Ideas →
        </Link>
      </section>

      {/* 6 RETENTION */}
      <section>
        <RgybHeading number="6" color="yellow">
          Improve YouTube Audience Retention
        </RgybHeading>

        <p className="mt-4">
          Getting a click is only the beginning. Your video needs to deliver
          what the title and thumbnail promised.
        </p>

        <p className="mt-4">
          YouTube's audience retention report shows how different parts of
          your video hold viewers' attention. It can highlight dips, spikes,
          top moments, and intro performance.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Start with a strong opening.</li>
          <li>Remove unnecessary introductions.</li>
          <li>Avoid repetitive explanations.</li>
          <li>Maintain appropriate pacing.</li>
          <li>Deliver the promised information.</li>
        </ul>

        <Link
          to="/tools/script-generator"
          className="mt-5 inline-flex font-semibold text-yellow-400 hover:text-yellow-300"
        >
          Generate a YouTube Script →
        </Link>
      </section>

      {/* 7 RETURNING VIEWERS */}
      <section>
        <RgybHeading number="7" color="green">
          Turn New Viewers Into Returning Viewers
        </RgybHeading>

        <p className="mt-4">
          Subscriber growth becomes more valuable when viewers continue
          returning to your channel. YouTube's Audience analytics separates
          viewers into new, casual, and regular groups, which can help you
          understand how your audience develops over time.
        </p>

        <p className="mt-4">
          Create content series, related videos, and consistent topics so
          viewers have a reason to watch more than one video.
        </p>

        <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <h3 className="font-semibold text-green-300">
            Think Beyond the Subscribe Button
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            A viewer who repeatedly returns to useful content can be more
            valuable to your channel strategy than a subscriber who never
            watches another video.
          </p>
        </div>
      </section>

      {/* 8 CTA */}
      <section>
        <RgybHeading number="8" color="blue">
          Give Viewers a Real Reason to Subscribe
        </RgybHeading>

        <p className="mt-4">
          A generic "Please subscribe" message is easy to ignore. Instead,
          explain what viewers can expect if they subscribe.
        </p>

        <p className="mt-4">
          For example, if your channel publishes weekly tutorials about a
          specific topic, explain that viewers can subscribe to follow future
          tutorials.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Tell viewers what your channel provides.</li>
          <li>Ask for a subscription when it makes sense.</li>
          <li>Connect the request to the video's topic.</li>
          <li>Avoid repeatedly interrupting the video.</li>
        </ul>
      </section>

      {/* 9 SHORTS */}
      <section>
        <RgybHeading number="9" color="red">
          Use YouTube Shorts to Reach New Viewers
        </RgybHeading>

        <p className="mt-4">
          Shorts can be part of a broader YouTube audience-growth strategy.
          YouTube Analytics provides Shorts-specific metrics such as views,
          likes, subscribers, shown in feed, and how many viewers chose to
          view rather than swipe away.
        </p>

        <p className="mt-4">
          Instead of creating completely unrelated Shorts, consider using
          Shorts to introduce viewers to topics that are connected to your
          main channel content.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Keep the topic focused.</li>
          <li>Start with a strong visual or idea.</li>
          <li>Make the content understandable quickly.</li>
          <li>Connect Shorts to your broader content strategy.</li>
          <li>Study which Shorts generate subscribers.</li>
        </ul>

        <Link
          to="/tools/shorts-generator"
          className="mt-5 inline-flex font-semibold text-red-400 hover:text-red-300"
        >
          Generate YouTube Shorts Ideas →
        </Link>
      </section>

      {/* 10 CONSISTENCY */}
      <section>
        <RgybHeading number="10" color="yellow">
          Be Consistent With Your YouTube Content
        </RgybHeading>

        <p className="mt-4">
          Consistency does not mean uploading every day. A realistic schedule
          that you can maintain is usually more useful than publishing
          frequently for a short period and then disappearing.
        </p>

        <p className="mt-4">
          Each new video can also create another entry point for viewers to
          discover your channel. YouTube recommends using analytics to
          understand how your publishing schedule affects channel performance.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 text-center">
            <p className="font-semibold text-red-300">Quality</p>

            <p className="mt-2 text-sm text-slate-400">
              Make content worth watching.
            </p>
          </div>

          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5 text-center">
            <p className="font-semibold text-yellow-300">Consistency</p>

            <p className="mt-2 text-sm text-slate-400">
              Maintain a realistic schedule.
            </p>
          </div>

          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 text-center">
            <p className="font-semibold text-green-300">Improvement</p>

            <p className="mt-2 text-sm text-slate-400">
              Learn from every upload.
            </p>
          </div>
        </div>
      </section>

      {/* 11 SERIES */}
      <section>
        <RgybHeading number="11" color="blue">
          Create YouTube Video Series
        </RgybHeading>

        <p className="mt-4">
          A series gives viewers a reason to continue exploring related
          content on your channel. Instead of treating every video as a
          completely separate piece of content, build connected topics when
          your audience would benefit from them.
        </p>

        <ol className="mt-5 list-decimal space-y-3 pl-6">
          <li>Choose a broad topic.</li>
          <li>Break it into smaller problems or questions.</li>
          <li>Create individual videos for each part.</li>
          <li>Connect related videos naturally.</li>
          <li>Study which topics attract returning viewers.</li>
        </ol>
      </section>

      {/* 12 ANALYTICS */}
      <section>
        <RgybHeading number="12" color="green">
          Use YouTube Analytics to Grow Your Subscribers
        </RgybHeading>

        <p className="mt-4">
          YouTube Analytics gives creators different reports for
          understanding reach, engagement, audience behavior, and content
          performance. The Audience tab includes subscriber and monthly
          audience information, while the Content and Reach reports help
          explain how viewers discover and interact with videos.
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[650px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-5 py-4 font-semibold text-white">
                  Metric
                </th>

                <th className="px-5 py-4 font-semibold text-white">
                  What to Learn
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-white/10">
                <td className="px-5 py-4 font-medium text-white">
                  Subscribers
                </td>

                <td className="px-5 py-4 text-slate-400">
                  How many viewers subscribed.
                </td>
              </tr>

              <tr className="border-b border-white/10">
                <td className="px-5 py-4 font-medium text-white">
                  Monthly Audience
                </td>

                <td className="px-5 py-4 text-slate-400">
                  Estimate of your active audience over the previous 28 days.
                </td>
              </tr>

              <tr className="border-b border-white/10">
                <td className="px-5 py-4 font-medium text-white">
                  New Viewers
                </td>

                <td className="px-5 py-4 text-slate-400">
                  How effectively content reaches people new to your channel.
                </td>
              </tr>

              <tr className="border-b border-white/10">
                <td className="px-5 py-4 font-medium text-white">
                  Returning Viewers
                </td>

                <td className="px-5 py-4 text-slate-400">
                  Whether people who watched before are coming back.
                </td>
              </tr>

              <tr className="border-b border-white/10">
                <td className="px-5 py-4 font-medium text-white">
                  Watch Time
                </td>

                <td className="px-5 py-4 text-slate-400">
                  How much time viewers spend watching.
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 font-medium text-white">
                  Audience Retention
                </td>

                <td className="px-5 py-4 text-slate-400">
                  Which parts of videos hold or lose viewer attention.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-5">
          YouTube's current Analytics interface also includes a Trends tab
          that can help creators explore what audiences are searching for and
          identify content opportunities.
        </p>
      </section>

      {/* 13 AUDIENCE WATCHES */}
      <section>
        <RgybHeading number="13" color="yellow">
          Find Out What Your Audience Watches
        </RgybHeading>

        <p className="mt-4">
          YouTube's Audience analytics can show what other videos, Shorts,
          live streams, and podcasts your viewers watch outside your channel.
          This information can help you discover topics, formats, thumbnail
          ideas, and collaboration opportunities.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Look for recurring topics.</li>
          <li>Study formats your audience watches.</li>
          <li>Compare common thumbnail styles.</li>
          <li>Identify potential content gaps.</li>
          <li>Look for relevant collaboration opportunities.</li>
        </ul>
      </section>

      {/* 14 CTR */}
      <section>
        <RgybHeading number="14" color="blue">
          Improve Click-Through Rate With Better Titles and Thumbnails
        </RgybHeading>

        <p className="mt-4">
          Titles and thumbnails work together to communicate what a viewer
          can expect from your video. YouTube recommends checking metrics such
          as impressions and click-through rate in Analytics to understand
          how packaging performs for different audiences.
        </p>

        <p className="mt-4">
          Do not optimize for clicks by making misleading promises. If the
          video fails to meet the expectation created by the title or
          thumbnail, viewers may leave quickly.
        </p>

        <Link
          to="/tools/seo-score"
          className="mt-5 inline-flex font-semibold text-blue-400 hover:text-blue-300"
        >
          Check Your YouTube SEO →
        </Link>
      </section>

      {/* 15 CONTENT FUNNEL */}
      <section>
        <RgybHeading color="red">
          A Simple YouTube Subscriber Growth Funnel
        </RgybHeading>

        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 text-center">
            <p className="font-bold text-red-300">1. Discover</p>

            <p className="mt-2 text-sm text-slate-400">
              Search, Shorts, Home, Suggested
            </p>
          </div>

          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5 text-center">
            <p className="font-bold text-yellow-300">2. Click</p>

            <p className="mt-2 text-sm text-slate-400">
              Title + Thumbnail
            </p>
          </div>

          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 text-center">
            <p className="font-bold text-green-300">3. Watch</p>

            <p className="mt-2 text-sm text-slate-400">
              Value + Retention
            </p>
          </div>

          <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 text-center">
            <p className="font-bold text-blue-300">4. Return</p>

            <p className="mt-2 text-sm text-slate-400">
              Subscribe + Watch Again
            </p>
          </div>
        </div>
      </section>

      {/* 16 MISTAKES */}
      <section>
        <RgybHeading color="yellow">
          Common YouTube Subscriber Growth Mistakes
        </RgybHeading>

        <ul className="mt-6 space-y-3">
          {[
            "Buying fake YouTube subscribers.",
            "Using misleading titles or thumbnails.",
            "Uploading unrelated content.",
            "Changing niches constantly.",
            "Asking viewers to subscribe too frequently.",
            "Ignoring audience retention.",
            "Focusing only on subscriber count.",
            "Never studying YouTube Analytics.",
            "Making videos without understanding the target audience.",
            "Uploading inconsistently without a sustainable strategy.",
          ].map((mistake) => (
            <li
              key={mistake}
              className="rounded-lg border border-red-500/10 bg-red-500/5 px-4 py-3"
            >
              <span className="mr-2 text-red-400">✕</span>
              {mistake}
            </li>
          ))}
        </ul>
      </section>

      {/* CHECKLIST */}
      <section>
        <RgybHeading color="green">
          YouTube Subscriber Growth Checklist
        </RgybHeading>

        <div className="mt-6 space-y-3">
          {[
            "Choose a clear niche.",
            "Understand your target audience.",
            "Research useful video topics.",
            "Find relevant keywords.",
            "Write accurate YouTube titles.",
            "Create clear thumbnails.",
            "Start videos with a strong hook.",
            "Improve audience retention.",
            "Create related videos and content series.",
            "Use Shorts strategically.",
            "Give viewers a genuine reason to subscribe.",
            "Maintain a realistic publishing schedule.",
            "Study new, casual, and regular viewers.",
            "Review monthly audience and unique viewers.",
            "Analyze videos that generate subscribers.",
            "Use YouTube Analytics to improve future content.",
          ].map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4"
            >
              <span className="font-bold text-green-400">✓</span>

              <span>
                {index + 1}. {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <RgybHeading color="blue">
          Frequently Asked Questions About YouTube Subscribers
        </RgybHeading>

        <div className="mt-6 space-y-7">
          <div>
            <h3 className="text-lg font-semibold text-white">
              How can I get more subscribers on YouTube?
            </h3>

            <p className="mt-2">
              Create useful content for a specific audience, improve your
              titles and thumbnails, keep viewers engaged, publish
              consistently, and use YouTube Analytics to understand what
              attracts and retains viewers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              How do I get 1,000 subscribers on YouTube?
            </h3>

            <p className="mt-2">
              There is no guaranteed shortcut to reaching 1,000 subscribers.
              Focus on building a repeatable content strategy that attracts
              the right viewers and gives them a reason to return to your
              channel.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Does uploading more videos guarantee more subscribers?
            </h3>

            <p className="mt-2">
              No. Upload frequency alone does not guarantee subscriber growth.
              YouTube recommends using analytics to understand how your
              publishing schedule affects your channel's performance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Do YouTube Shorts help gain subscribers?
            </h3>

            <p className="mt-2">
              Shorts can help reach new audiences, and YouTube Analytics
              provides Shorts-specific subscriber performance data. The best
              approach is to use Shorts as part of a broader content strategy
              rather than relying on them alone.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Are subscribers the same as active viewers?
            </h3>

            <p className="mt-2">
              No. YouTube explicitly notes that subscriber count does not
              necessarily represent the number of people who continue watching
              your content. Monthly audience and unique viewers can provide
              a clearer picture of active viewers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              How important are YouTube titles and thumbnails?
            </h3>

            <p className="mt-2">
              They are important because viewers commonly see them before
              deciding whether to watch. YouTube recommends accurate,
              concise titles and clear thumbnails that represent the video
              appropriately.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              How can I convert viewers into subscribers?
            </h3>

            <p className="mt-2">
              Give viewers a clear reason to return to your channel. Create
              related content, maintain a recognizable topic or format,
              provide value consistently, and use a relevant subscription
              call-to-action when appropriate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Should I buy YouTube subscribers?
            </h3>

            <p className="mt-2">
              No. Fake subscribers do not provide a reliable audience and can
              distort your channel analytics. Build subscribers through
              genuine viewers and useful content instead.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Can TubeKit help grow my YouTube channel?
            </h3>

            <p className="mt-2">
              TubeKit provides tools for generating YouTube titles, keywords,
              descriptions, tags, hashtags, scripts, outlines, and thumbnail
              ideas that can support your content workflow.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section>
        <RgybHeading color="green">
          Grow Your YouTube Channel With TubeKit
        </RgybHeading>

        <p className="mt-4">
          Getting more YouTube subscribers starts with creating content that
          the right audience wants to watch. Build a clear niche, research
          useful topics, improve your titles and thumbnails, strengthen
          audience retention, and use YouTube Analytics to make better
          decisions.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/tools/keyword-generator"
            className="rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Keyword Generator
          </Link>

          <Link
            to="/tools/title-generator"
            className="rounded-lg bg-yellow-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
          >
            Title Generator
          </Link>

          <Link
            to="/tools/thumbnail-generator"
            className="rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-500"
          >
            Thumbnail Generator
          </Link>

          <Link
            to="/tools/shorts-generator"
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Shorts Generator
          </Link>
        </div>
      </section>
    </article>
  );
}

export default SubscribersGuide;