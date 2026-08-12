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

function CTRGuide() {
  return (
    <article className="space-y-12 text-base leading-8 text-slate-300">

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            YouTube CTR Guide
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            How to Improve YouTube CTR: Titles, Thumbnails and Video Packaging
          </h1>

          <p className="mt-5">
            YouTube CTR, or click-through rate, measures how often viewers
            click on a video after seeing its thumbnail on eligible YouTube
            surfaces.
          </p>

          <p className="mt-4">
            CTR can help creators understand how effectively their video
            packaging attracts clicks. However, CTR should be considered
            alongside impressions, traffic sources, viewer behavior, and
            other YouTube Analytics data.
          </p>

        </div>
      </section>

      {/* =====================================================
          WHAT IS CTR
      ====================================================== */}

      <section>
        <RgybHeading>
          What Is YouTube CTR?
        </RgybHeading>

        <p className="mt-5">
          YouTube CTR stands for click-through rate. It describes the
          percentage of impressions that resulted in viewers choosing to
          watch a video.
        </p>

        <p className="mt-4">
          In simple terms, when YouTube shows your video to viewers, CTR
          helps you understand how often those viewers choose to click.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

          <h3 className="font-semibold text-blue-400">
            Simple CTR concept
          </h3>

          <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-5 text-center">

            <p className="text-lg font-semibold text-white">
              CTR = Clicks ÷ Impressions × 100
            </p>

            <p className="mt-2 text-sm text-slate-400">
              This is a simplified way to understand the relationship
              between impressions and clicks.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY CTR MATTERS
      ====================================================== */}

      <section>
        <RgybHeading>
          Why Is YouTube CTR Important?
        </RgybHeading>

        <p className="mt-5">
          A compelling title and thumbnail can increase the number of people
          who choose to watch when they encounter your video.
        </p>

        <p className="mt-4">
          Better packaging can therefore create more opportunities for your
          content to receive views.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {[
            [
              "Thumbnail",
              "Communicates the visual idea quickly.",
              "red",
            ],
            [
              "Title",
              "Explains the topic and potential value.",
              "yellow",
            ],
            [
              "Video",
              "Delivers what the packaging promises.",
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
          1 THUMBNAILS
      ====================================================== */}

      <section>
        <RgybHeading number="1.">
          Create Clear YouTube Thumbnails
        </RgybHeading>

        <p className="mt-5">
          Your thumbnail should communicate the main idea quickly. Use a
          strong visual concept, readable text when necessary, and a design
          that remains understandable on smaller screens.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">

          <li>Keep the main subject easy to recognize.</li>

          <li>
            Avoid unnecessary visual clutter.
          </li>

          <li>
            Use text only when it adds useful context.
          </li>

          <li>
            Make the thumbnail relevant to the actual video.
          </li>

          <li>
            Make sure the visual idea works with the title.
          </li>

        </ul>

        <div className="mt-6">
          <ToolLink
            to="/tools/thumbnail-generator"
            primary
          >
            Generate Thumbnail Ideas →
          </ToolLink>
        </div>
      </section>

      {/* =====================================================
          2 TITLES
      ====================================================== */}

      <section>
        <RgybHeading number="2.">
          Write Better YouTube Titles
        </RgybHeading>

        <p className="mt-5">
          A good title should clearly explain the video's value while
          creating enough curiosity to encourage the right viewer to click.
        </p>

        <p className="mt-4">
          Avoid misleading titles. A title that attracts a click but does
          not match the video can create a poor viewer experience.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">

          <h3 className="font-semibold text-yellow-300">
            Good title principles
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-400">

            <li>Clearly communicate the topic.</li>
            <li>Highlight the useful outcome when appropriate.</li>
            <li>Avoid unnecessary words.</li>
            <li>Do not make promises the video cannot deliver.</li>

          </ul>

        </div>

        <div className="mt-6">
          <ToolLink
            to="/tools/title-generator"
            primary
          >
            Generate YouTube Titles →
          </ToolLink>
        </div>
      </section>

      {/* =====================================================
          3 TITLE + THUMBNAIL
      ====================================================== */}

      <section>
        <RgybHeading number="3.">
          Make the Title and Thumbnail Work Together
        </RgybHeading>

        <p className="mt-5">
          Avoid simply repeating the same words in both. Instead, let the
          thumbnail and title communicate complementary information that
          gives viewers a clear reason to click.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

            <h3 className="font-semibold text-red-400">
              Avoid
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Using the exact same message in the title and thumbnail
              without adding additional context.
            </p>

          </div>

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

            <h3 className="font-semibold text-green-400">
              Better Approach
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Let the title explain the topic while the thumbnail adds a
              complementary visual idea.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          4 CLICKBAIT
      ====================================================== */}

      <section>
        <RgybHeading number="4.">
          Avoid Misleading Clickbait
        </RgybHeading>

        <p className="mt-5">
          A high click-through rate is not useful if viewers immediately
          leave because the video does not deliver what the title and
          thumbnail promised.
        </p>

        <p className="mt-4">
          Strong packaging should attract viewers who are genuinely
          interested in the content rather than simply generating clicks.
        </p>

        <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

          <h3 className="font-semibold text-red-400">
            Avoid misleading packaging
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-400">

            <li>False promises.</li>
            <li>Unrelated thumbnails.</li>
            <li>Exaggerated claims.</li>
            <li>Titles that do not match the video.</li>

          </ul>

        </div>
      </section>

      {/* =====================================================
          5 TEST PACKAGING
      ====================================================== */}

      <section>
        <RgybHeading number="5.">
          Test Different Packaging Approaches
        </RgybHeading>

        <p className="mt-5">
          If a video receives impressions but fewer clicks than expected,
          consider whether the title or thumbnail clearly communicates the
          value of the video.
        </p>

        <p className="mt-4">
          Compare different approaches where your available YouTube
          features and analytics allow you to do so.
        </p>

        <ol className="mt-5 list-decimal space-y-3 pl-6">

          <li>Review the current title.</li>
          <li>Review the thumbnail.</li>
          <li>Check whether the packaging matches the video.</li>
          <li>Look at impressions and traffic sources.</li>
          <li>Use the available analytics to evaluate performance.</li>

        </ol>
      </section>

      {/* =====================================================
          CTR VS VIEWS
      ====================================================== */}

      <section>
        <RgybHeading>
          Does a Higher CTR Always Mean More Views?
        </RgybHeading>

        <p className="mt-5">
          No. CTR is only one part of YouTube performance. A video can have
          a strong CTR but limited impressions, while another video can have
          a lower CTR and still receive substantial views because it is shown
          to a much larger audience.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

            <h3 className="font-semibold text-green-400">
              High CTR
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Can indicate that the packaging is attracting clicks from
              viewers who see the impression.
            </p>

          </div>

          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

            <h3 className="font-semibold text-blue-400">
              More Impressions
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              A video can receive many views even with a lower CTR if it is
              exposed to a much larger relevant audience.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          OTHER METRICS
      ====================================================== */}

      <section>
        <RgybHeading>
          CTR Should Be Analyzed With Other Metrics
        </RgybHeading>

        <p className="mt-5">
          CTR should not be analyzed in isolation. Creators should consider
          the broader performance of the video and understand where views are
          coming from.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["Impressions", "How often the video is shown."],
            ["Traffic Sources", "Where viewers discover the video."],
            ["Watch Behavior", "What viewers do after clicking."],
            ["Audience Response", "How viewers respond to the content."],
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
          CTR WORKFLOW
      ====================================================== */}

      <section>
        <RgybHeading>
          YouTube CTR Improvement Workflow
        </RgybHeading>

        <p className="mt-5">
          Improving CTR is best approached as a video packaging process.
          Start with the audience and topic, then build a title and thumbnail
          that accurately communicate the video's value.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {[
            [
              "01",
              "Choose Topic",
              "Start with a topic that is relevant to your audience.",
            ],
            [
              "02",
              "Research Keywords",
              "Understand relevant topics and search phrases.",
            ],
            [
              "03",
              "Create Title",
              "Develop a clear and compelling title.",
            ],
            [
              "04",
              "Plan Thumbnail",
              "Create a visual concept that complements the title.",
            ],
            [
              "05",
              "Publish",
              "Make sure the final packaging accurately represents the video.",
            ],
            [
              "06",
              "Analyze",
              "Review impressions, CTR and broader analytics data.",
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
          COMMON MISTAKES
      ====================================================== */}

      <section>
        <RgybHeading>
          Common YouTube CTR Mistakes
        </RgybHeading>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Focusing only on CTR without considering impressions.",
            "Using misleading titles.",
            "Creating cluttered thumbnails.",
            "Making the title and thumbnail say exactly the same thing.",
            "Ignoring the target audience.",
            "Changing packaging without reviewing broader analytics.",
            "Chasing clicks instead of delivering useful content.",
            "Assuming one CTR number works for every video.",
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
          FAQ
      ====================================================== */}

      <section>
        <RgybHeading>
          Frequently Asked Questions About YouTube CTR
        </RgybHeading>

        <div className="mt-6 space-y-5">

          {[
            [
              "What does YouTube CTR mean?",
              "YouTube CTR means click-through rate. It helps describe how often viewers click a video after seeing its thumbnail on eligible YouTube surfaces.",
            ],
            [
              "Why is YouTube CTR important?",
              "CTR can help creators evaluate how effectively their title and thumbnail attract clicks from viewers who see the video.",
            ],
            [
              "Does a high CTR guarantee more views?",
              "No. CTR is only one part of YouTube performance. Impressions, traffic sources, viewer behavior and other factors also influence how many views a video receives.",
            ],
            [
              "How can I improve YouTube CTR?",
              "Focus on accurate and compelling titles, clear thumbnails, strong title-thumbnail combinations, and a better understanding of your target audience.",
            ],
            [
              "Should I use clickbait to increase CTR?",
              "Misleading clickbait is not a sustainable strategy. The title and thumbnail should accurately represent what viewers will receive from the video.",
            ],
            [
              "Can TubeKit help improve YouTube CTR?",
              "TubeKit can help creators generate starting ideas for YouTube titles and thumbnails. These suggestions should be reviewed and adapted to the actual video.",
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
            Improve Your YouTube Video Packaging
          </h2>

          <p className="mt-3 text-slate-400">
            Use TubeKit to generate YouTube title and thumbnail ideas for
            your next video. Treat generated suggestions as starting points
            and make sure the final packaging accurately represents your
            content.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <ToolLink
              to="/tools/title-generator"
              primary
            >
              Generate YouTube Titles →
            </ToolLink>

            <ToolLink to="/tools/thumbnail-generator">
              Generate Thumbnail Ideas
            </ToolLink>

            <ToolLink to="/tools/keyword-generator">
              Find Keywords
            </ToolLink>

          </div>

        </div>
      </section>

    </article>
  );
}

export default CTRGuide;