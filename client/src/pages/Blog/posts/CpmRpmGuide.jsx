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

function CpmRpmGuide() {
  return (
    <article className="space-y-12 text-base leading-8 text-slate-300">

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            YouTube CPM & RPM Guide
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            YouTube CPM vs RPM: What They Mean and How to Calculate Them
          </h1>

          <p className="mt-5">
            YouTube CPM and RPM are commonly used metrics for understanding
            advertising and creator revenue. Although both are expressed in
            relation to 1,000, they measure different things.
          </p>

          <p className="mt-4">
            Understanding the difference between YouTube CPM and RPM can help
            creators interpret their revenue data without assuming that a
            particular CPM automatically represents their actual earnings.
          </p>

        </div>
      </section>

      {/* =====================================================
          CPM
      ====================================================== */}

      <section>
        <RgybHeading>
          What Is YouTube CPM?
        </RgybHeading>

        <p className="mt-5">
          CPM stands for Cost Per Mille, where mille means one thousand.
          In advertising, CPM generally describes the cost associated with
          one thousand ad impressions.
        </p>

        <p className="mt-4">
          CPM is primarily an advertising metric. It should not be treated
          as the exact amount a YouTube creator receives from every
          thousand views.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">

          <h3 className="font-semibold text-yellow-300">
            Important distinction
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            CPM describes an advertising-related cost metric, while creator
            revenue depends on additional factors such as monetized
            playbacks, audience, revenue sources, and other conditions.
          </p>

        </div>

        <div className="mt-6">
          <ToolLink
            to="/tools/cpm-calculator"
            primary
          >
            Calculate YouTube CPM →
          </ToolLink>
        </div>
      </section>

      {/* =====================================================
          RPM
      ====================================================== */}

      <section>
        <RgybHeading>
          What Is YouTube RPM?
        </RgybHeading>

        <p className="mt-5">
          RPM stands for Revenue Per Mille. It is commonly used to
          understand how much revenue is generated per 1,000 views.
        </p>

        <p className="mt-4">
          RPM can provide a more creator-focused view of revenue because
          it relates revenue to total views rather than only looking at
          advertising cost.
        </p>

        <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

          <h3 className="font-semibold text-green-400">
            Simple RPM concept
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            RPM helps put revenue into a per-1,000-view context. It should
            still be interpreted using the creator's actual revenue and
            analytics data.
          </p>

        </div>

        <div className="mt-6">
          <ToolLink
            to="/tools/rpm-calculator"
            primary
          >
            Calculate YouTube RPM →
          </ToolLink>
        </div>
      </section>

      {/* =====================================================
          CPM VS RPM
      ====================================================== */}

      <section>
        <RgybHeading>
          CPM vs RPM: The Main Difference
        </RgybHeading>

        <p className="mt-5">
          CPM and RPM should not be treated as interchangeable metrics.
          They answer different questions about advertising and revenue.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">

          <table className="w-full min-w-[650px] border-collapse text-left">

            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">

                <th className="px-5 py-4 font-semibold text-red-400">
                  Metric
                </th>

                <th className="px-5 py-4 font-semibold text-yellow-300">
                  What It Represents
                </th>

                <th className="px-5 py-4 font-semibold text-green-400">
                  Main Use
                </th>

              </tr>
            </thead>

            <tbody>

              <tr className="border-b border-white/10">

                <td className="px-5 py-4 font-semibold text-white">
                  CPM
                </td>

                <td className="px-5 py-4 text-slate-400">
                  Advertising cost associated with 1,000 ad impressions.
                </td>

                <td className="px-5 py-4 text-slate-400">
                  Understanding advertising conditions.
                </td>

              </tr>

              <tr>

                <td className="px-5 py-4 font-semibold text-white">
                  RPM
                </td>

                <td className="px-5 py-4 text-slate-400">
                  Revenue generated per 1,000 views.
                </td>

                <td className="px-5 py-4 text-slate-400">
                  Understanding revenue relative to views.
                </td>

              </tr>

            </tbody>

          </table>

        </div>
      </section>

      {/* =====================================================
          RPM FORMULA
      ====================================================== */}

      <section>
        <RgybHeading>
          How Is RPM Calculated?
        </RgybHeading>

        <p className="mt-5">
          A simple RPM calculation can be expressed as:
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 text-center">

          <code className="text-lg font-semibold text-white">
            RPM = (Revenue ÷ Total Views) × 1,000
          </code>

        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <h3 className="font-semibold text-white">
            Example
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            If a channel earns $50 from 10,000 views, the calculated RPM
            would be $5.
          </p>

          <div className="mt-4 rounded-xl bg-black/20 p-4 text-center">

            <code className="text-sm text-green-400">
              ($50 ÷ 10,000) × 1,000 = $5 RPM
            </code>

          </div>

        </div>

        <div className="mt-6">
          <ToolLink
            to="/tools/rpm-calculator"
            primary
          >
            Calculate YouTube RPM →
          </ToolLink>
        </div>
      </section>

      {/* =====================================================
          CPM CALCULATION
      ====================================================== */}

      <section>
        <RgybHeading>
          How Is CPM Calculated?
        </RgybHeading>

        <p className="mt-5">
          A basic CPM calculation can be represented as:
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6 text-center">

          <code className="text-lg font-semibold text-white">
            CPM = (Advertising Cost ÷ Ad Impressions) × 1,000
          </code>

        </div>

        <p className="mt-5">
          CPM is primarily useful for understanding advertising cost rather
          than estimating a creator's final income directly.
        </p>

        <div className="mt-6">
          <ToolLink to="/tools/cpm-calculator">
            Calculate YouTube CPM →
          </ToolLink>
        </div>
      </section>

      {/* =====================================================
          WHY DIFFERENT
      ====================================================== */}

      <section>
        <RgybHeading>
          Why CPM and RPM Can Be Different
        </RgybHeading>

        <p className="mt-5">
          CPM and RPM measure different things, so they should not be
          expected to have the same value.
        </p>

        <p className="mt-4">
          CPM focuses on advertising cost and ad impressions, while RPM
          relates revenue to total views. Not every view results in a
          monetized ad impression, and other factors can affect creator
          revenue.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">

            <h3 className="font-semibold text-yellow-300">
              CPM Focus
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Advertising cost and ad impressions.
            </p>

          </div>

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

            <h3 className="font-semibold text-green-400">
              RPM Focus
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Revenue relative to total views.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          FACTORS
      ====================================================== */}

      <section>
        <RgybHeading>
          Factors That Can Affect CPM and RPM
        </RgybHeading>

        <p className="mt-5">
          CPM and RPM can vary between channels, videos, audiences, and
          time periods. Several factors can influence these metrics.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["Audience Location", "Viewer geography can influence advertising demand."],
            ["Advertiser Demand", "Market demand can change over time."],
            ["Content Category", "Different categories can attract different advertiser demand."],
            ["Monetized Playbacks", "Not every view necessarily results in a monetized ad playback."],
            ["Audience Characteristics", "The characteristics of the audience can affect revenue."],
            ["Seasonality", "Advertising demand can change during different periods."],
            ["Ad Inventory", "Available advertising inventory can vary."],
            ["Revenue Sources", "Eligible revenue sources can affect overall RPM."],
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
          HIGH CPM
      ====================================================== */}

      <section>
        <RgybHeading>
          Does a Higher CPM Always Mean Higher Earnings?
        </RgybHeading>

        <p className="mt-5">
          No. CPM alone does not determine how much a creator earns. The
          number of views, monetized playbacks, audience, revenue sources,
          and other factors can affect the final amount.
        </p>

        <p className="mt-4">
          This is why creators should avoid judging channel performance
          using CPM alone.
        </p>

        <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

          <h3 className="font-semibold text-red-400">
            Do not use CPM as your only earnings estimate
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            A higher CPM does not automatically mean that a creator will
            receive proportionally higher total revenue.
          </p>

        </div>
      </section>

      {/* =====================================================
          RPM VS REVENUE
      ====================================================== */}

      <section>
        <RgybHeading>
          Is RPM the Same as YouTube Earnings?
        </RgybHeading>

        <p className="mt-5">
          RPM is a revenue-per-1,000-view metric. It provides a useful way
          to put revenue into the context of total views, but it should not
          be interpreted as a guaranteed fixed rate for future views.
        </p>

        <p className="mt-4">
          Revenue can change as audience composition, content, advertising
          demand, seasonality, monetization status, and other conditions
          change.
        </p>
      </section>

      {/* =====================================================
          HOW TO USE
      ====================================================== */}

      <section>
        <RgybHeading>
          How Creators Can Use CPM and RPM
        </RgybHeading>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            [
              "1",
              "Use CPM",
              "Understand advertising conditions and advertiser demand.",
            ],
            [
              "2",
              "Use RPM",
              "Evaluate revenue relative to total views.",
            ],
            [
              "3",
              "Compare Periods",
              "Compare similar time periods to identify meaningful changes.",
            ],
            [
              "4",
              "Review Analytics",
              "Look at other performance data instead of relying on one metric.",
            ],
            [
              "5",
              "Improve Content",
              "Focus on useful content and a clear audience.",
            ],
            [
              "6",
              "Track Changes",
              "Monitor how revenue metrics change over time.",
            ],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >

              <div className="flex items-start gap-4">

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {number}
                </span>

                <div>

                  <h3 className="font-semibold text-white">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-slate-400">
                    {description}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          CALCULATOR WORKFLOW
      ====================================================== */}

      <section>
        <RgybHeading>
          Calculate YouTube CPM and RPM
        </RgybHeading>

        <p className="mt-5">
          Instead of calculating the formulas manually, you can use TubeKit's
          calculators to quickly work with your own numbers.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">

            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-300">
              Advertising Metric
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              YouTube CPM Calculator
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Calculate CPM using advertising cost and ad impression data.
            </p>

            <div className="mt-5">
              <ToolLink
                to="/tools/cpm-calculator"
                primary
              >
                Open CPM Calculator →
              </ToolLink>
            </div>

          </div>

          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

            <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
              Revenue Metric
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              YouTube RPM Calculator
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Calculate revenue per 1,000 views using your revenue and view
              data.
            </p>

            <div className="mt-5">
              <ToolLink
                to="/tools/rpm-calculator"
                primary
              >
                Open RPM Calculator →
              </ToolLink>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          COMMON MISTAKES
      ====================================================== */}

      <section>
        <RgybHeading>
          Common YouTube CPM and RPM Mistakes
        </RgybHeading>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            "Treating CPM as the creator's exact earnings.",
            "Assuming every 1,000 views produces the same revenue.",
            "Using CPM alone to estimate channel income.",
            "Ignoring differences between total views and monetized playbacks.",
            "Comparing unrelated channels without considering audience differences.",
            "Ignoring seasonality and changes in advertiser demand.",
            "Assuming a calculator estimate guarantees future earnings.",
            "Focusing on revenue metrics instead of improving content quality.",
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
          Frequently Asked Questions About YouTube CPM and RPM
        </RgybHeading>

        <div className="mt-6 space-y-5">

          {[
            [
              "What does CPM mean on YouTube?",
              "CPM stands for Cost Per Mille and is generally associated with the cost of one thousand ad impressions. It is primarily an advertising metric.",
            ],
            [
              "What does RPM mean on YouTube?",
              "RPM stands for Revenue Per Mille and is commonly used to understand revenue generated per 1,000 views.",
            ],
            [
              "What is the difference between CPM and RPM?",
              "CPM focuses on advertising cost associated with ad impressions, while RPM relates revenue to total views.",
            ],
            [
              "Is YouTube CPM the same as creator earnings?",
              "No. CPM should not be treated as the exact amount a creator receives from every 1,000 views.",
            ],
            [
              "How is YouTube RPM calculated?",
              "A simple RPM calculation is Revenue divided by Total Views, multiplied by 1,000.",
            ],
            [
              "Does a higher CPM always mean higher YouTube earnings?",
              "No. Total revenue depends on views, monetized playbacks, audience, revenue sources, advertising demand, and other factors.",
            ],
            [
              "Why can YouTube RPM change?",
              "RPM can change because of differences in audience, views, monetized playbacks, content, advertising demand, seasonality, and other revenue conditions.",
            ],
            [
              "Can TubeKit calculate YouTube CPM and RPM?",
              "Yes. TubeKit provides CPM and RPM calculators that can be used to calculate estimates from your own numbers.",
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
            Calculate Your YouTube Revenue Metrics
          </h2>

          <p className="mt-3 text-slate-400">
            Use TubeKit's free CPM and RPM calculators to calculate
            estimates from your own numbers and better understand your
            YouTube revenue metrics.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <ToolLink
              to="/tools/cpm-calculator"
              primary
            >
              CPM Calculator →
            </ToolLink>

            <ToolLink to="/tools/rpm-calculator">
              RPM Calculator
            </ToolLink>

            <ToolLink to="/tools/money-calculator">
              YouTube Money Calculator
            </ToolLink>

            <ToolLink to="/tools/monetization-checker">
              Monetization Checker
            </ToolLink>

          </div>

        </div>
      </section>

    </article>
  );
}

export default CpmRpmGuide;