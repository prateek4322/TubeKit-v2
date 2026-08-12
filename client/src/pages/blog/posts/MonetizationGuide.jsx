import { Link } from "react-router-dom";

function RgybHeading({ children }) {
  return (
    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
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

function MonetizationGuide() {
  return (
    <article className="space-y-12 text-base leading-8 text-slate-300">

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            YouTube Monetization Guide
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            YouTube Monetization: Complete Guide for Creators
          </h1>

          <p className="mt-5">
            YouTube monetization allows eligible creators to earn revenue
            from certain features available through the YouTube Partner
            Program and other eligible revenue sources.
          </p>

          <p className="mt-4">
            Monetization is not simply about getting views. Eligibility,
            channel status, content, audience, and the specific monetization
            feature being used can all affect how a creator earns money.
          </p>

        </div>
      </section>

      {/* =====================================================
          WHAT IS MONETIZATION
      ====================================================== */}

      <section>
        <RgybHeading>
          What Is YouTube Monetization?
        </RgybHeading>

        <p className="mt-5">
          YouTube monetization allows eligible creators to earn revenue
          from different YouTube features and eligible creator revenue
          sources.
        </p>

        <p className="mt-4">
          A channel's ability to earn money depends on applicable
          eligibility requirements, policies, content, audience, and the
          specific monetization feature being used.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">

          <p className="font-semibold text-white">
            Important
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Monetization eligibility and available features can change.
            Always verify the current requirements through YouTube's
            official resources before making decisions based on a specific
            threshold.
          </p>

        </div>
      </section>

      {/* =====================================================
          REVENUE SOURCES
      ====================================================== */}

      <section>
        <RgybHeading>
          Main Sources of YouTube Revenue
        </RgybHeading>

        <p className="mt-5">
          Depending on eligibility and availability, creators can earn
          through several different YouTube-related revenue sources.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            [
              "Advertising Revenue",
              "Revenue associated with eligible advertising on YouTube content.",
              "red",
            ],
            [
              "YouTube Premium",
              "Eligible creators can receive revenue associated with Premium viewers.",
              "yellow",
            ],
            [
              "Channel Memberships",
              "Eligible creators can offer membership-based benefits to viewers.",
              "green",
            ],
            [
              "Super Chat & Super Stickers",
              "Viewer-supported features available during eligible live streams.",
              "blue",
            ],
            [
              "Super Thanks",
              "A viewer-support feature available on eligible content.",
              "red",
            ],
            [
              "Shopping & Other Features",
              "Additional eligible creator features may provide revenue opportunities.",
              "yellow",
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
                    : color === "green"
                    ? "font-semibold text-green-400"
                    : "font-semibold text-blue-400"
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
          YPP
      ====================================================== */}

      <section>
        <RgybHeading>
          YouTube Partner Program
        </RgybHeading>

        <p className="mt-5">
          The YouTube Partner Program, commonly called YPP, provides
          eligible creators with access to monetization features and
          creator support tools.
        </p>

        <p className="mt-4">
          YouTube can update eligibility requirements and available
          features over time, so creators should always check the current
          requirements in YouTube's official documentation before making
          decisions based on a specific threshold.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

          <h3 className="font-semibold text-white">
            Checking Your Channel
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            TubeKit's monetization checker can provide an informational
            estimate based on publicly available channel information. It
            cannot guarantee YouTube Partner Program approval.
          </p>

          <div className="mt-5">
            <ToolLink
              to="/tools/monetization-checker"
              primary
            >
              Check Monetization →
            </ToolLink>
          </div>

        </div>
      </section>

      {/* =====================================================
          VIEWS VS EARNINGS
      ====================================================== */}

      <section>
        <RgybHeading>
          Why Views Do Not Equal Earnings
        </RgybHeading>

        <p className="mt-5">
          A common misconception is that a fixed number of views always
          produces a fixed amount of money. That is not how YouTube
          revenue works.
        </p>

        <p className="mt-4">
          Revenue can vary depending on factors such as audience,
          advertising demand, monetized playbacks, content category,
          geography, seasonality, and other factors.
        </p>

        <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

          <p className="font-semibold text-red-400">
            Do not use a fixed views-to-income formula
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Two channels with the same number of views can generate
            different amounts of revenue.
          </p>

        </div>
      </section>

      {/* =====================================================
          CPM RPM
      ====================================================== */}

      <section>
        <RgybHeading>
          CPM and RPM Explained
        </RgybHeading>

        <p className="mt-5">
          CPM and RPM are two commonly discussed YouTube revenue metrics,
          but they measure different things. CPM is generally associated
          with advertising cost, while RPM provides a revenue-per-1,000
          views perspective.
        </p>

        <p className="mt-4">
          Creators should avoid using CPM alone to estimate their actual
          earnings.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">

            <h3 className="text-xl font-bold text-yellow-300">
              CPM
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              A metric commonly associated with the cost of advertising
              impressions.
            </p>

            <div className="mt-5">
              <ToolLink to="/tools/cpm-calculator">
                CPM Calculator →
              </ToolLink>
            </div>

          </div>

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

            <h3 className="text-xl font-bold text-green-400">
              RPM
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              A revenue-per-1,000-views perspective that is useful for
              understanding creator earnings.
            </p>

            <div className="mt-5">
              <ToolLink to="/tools/rpm-calculator">
                RPM Calculator →
              </ToolLink>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          REVENUE FACTORS
      ====================================================== */}

      <section>
        <RgybHeading>
          Factors That Can Affect Creator Revenue
        </RgybHeading>

        <p className="mt-5">
          YouTube earnings can vary significantly between channels because
          multiple factors influence the revenue generated by content.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Audience location and characteristics.",
            "Advertiser demand.",
            "Content category.",
            "Number of monetized playbacks.",
            "Viewer engagement.",
            "Seasonal changes in advertising demand.",
            "Available monetization features.",
          ].map((factor, index) => (
            <div
              key={factor}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <span className="mr-2 font-bold text-blue-400">
                {index + 1}.
              </span>

              {factor}
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          BUILD CHANNEL
      ====================================================== */}

      <section>
        <RgybHeading>
          How to Build a Monetizable YouTube Channel
        </RgybHeading>

        <p className="mt-5">
          Monetization starts with building a channel that consistently
          provides useful or entertaining content for a clearly defined
          audience.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 sm:p-8">

          <ol className="space-y-4">

            {[
              "Choose a clear audience and content niche.",
              "Create original and useful videos.",
              "Publish consistently with a realistic schedule.",
              "Improve titles and thumbnails.",
              "Study audience retention and other analytics.",
              "Follow YouTube's monetization policies.",
              "Improve the content based on audience feedback.",
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
          TOOL WORKFLOW
      ====================================================== */}

      <section>
        <RgybHeading>
          YouTube Monetization Planning Workflow
        </RgybHeading>

        <p className="mt-5">
          TubeKit's tools can help creators understand estimated channel
          information and calculate common YouTube revenue metrics.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            [
              "Monetization Checker",
              "Review public channel information.",
              "/tools/monetization-checker",
            ],
            [
              "RPM Calculator",
              "Calculate revenue-per-1,000-view estimates.",
              "/tools/rpm-calculator",
            ],
            [
              "CPM Calculator",
              "Work with CPM-based calculations.",
              "/tools/cpm-calculator",
            ],
            [
              "Money Calculator",
              "Estimate potential YouTube revenue.",
              "/tools/money-calculator",
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
          MISTAKES
      ====================================================== */}

      <section>
        <RgybHeading>
          Common YouTube Monetization Mistakes
        </RgybHeading>

        <p className="mt-5">
          Understanding monetization requires more than looking at view
          counts. Avoid making decisions based on simplified income
          estimates or assumptions about eligibility.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Focusing only on views and ignoring content quality.",
            "Expecting a fixed income from a fixed number of views.",
            "Publishing reused or low-value content.",
            "Ignoring YouTube's monetization policies.",
            "Relying on one revenue source.",
            "Making financial decisions based on estimated earnings alone.",
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
          AUDIENCE FIRST
      ====================================================== */}

      <section>
        <RgybHeading>
          Focus on the Audience First
        </RgybHeading>

        <p className="mt-5">
          A sustainable YouTube channel starts with useful content and a
          clear audience. Monetization should be treated as one part of the
          overall creator business rather than the only objective.
        </p>

        <p className="mt-4">
          Better content can create opportunities for multiple revenue
          sources over time, provided the channel remains eligible and
          follows the applicable platform policies.
        </p>

        <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

          <p className="font-semibold text-green-400">
            Long-term approach
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Focus on audience value, content quality, consistency, and
            understanding your analytics instead of chasing a single
            earnings number.
          </p>

        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section>
        <RgybHeading>
          Frequently Asked Questions About YouTube Monetization
        </RgybHeading>

        <div className="mt-6 space-y-5">

          {[
            [
              "Does getting more views guarantee more money?",
              "No. Revenue can vary depending on audience, advertising demand, monetized playbacks, content category, geography, seasonality, and other factors.",
            ],
            [
              "What is the YouTube Partner Program?",
              "The YouTube Partner Program, or YPP, provides eligible creators with access to certain monetization features and creator support tools.",
            ],
            [
              "What is the difference between CPM and RPM?",
              "CPM is generally associated with advertising cost, while RPM provides a revenue-per-1,000-views perspective. Creators should not use CPM alone to estimate actual earnings.",
            ],
            [
              "Can a monetization checker guarantee approval?",
              "No. A third-party checker can provide an informational assessment, but YouTube makes the final eligibility and approval decisions.",
            ],
            [
              "Can YouTube monetization requirements change?",
              "Yes. YouTube can update eligibility requirements and available monetization features, so creators should verify the latest official requirements.",
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
          FINAL
      ====================================================== */}

      <section>
        <RgybHeading>
          Final Thoughts
        </RgybHeading>

        <p className="mt-5">
          YouTube monetization can provide creators with several potential
          revenue streams, but earnings vary significantly between
          channels. There is no universal amount that a creator will earn
          from a particular number of views.
        </p>

        <p className="mt-4">
          The strongest long-term approach is to understand your audience,
          create useful original content, monitor your analytics, and
          follow YouTube's current monetization requirements.
        </p>

        <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <h3 className="text-2xl font-bold text-white">
            Explore TubeKit YouTube Tools
          </h3>

          <p className="mt-3 text-slate-400">
            Use TubeKit to check channel information and work with common
            YouTube revenue calculations.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <ToolLink
              to="/tools/monetization-checker"
              primary
            >
              Monetization Checker
            </ToolLink>

            <ToolLink to="/tools/rpm-calculator">
              RPM Calculator
            </ToolLink>

            <ToolLink to="/tools/cpm-calculator">
              CPM Calculator
            </ToolLink>

            <ToolLink to="/tools/money-calculator">
              Money Calculator
            </ToolLink>

          </div>

        </div>
      </section>

    </article>
  );
}

export default MonetizationGuide;