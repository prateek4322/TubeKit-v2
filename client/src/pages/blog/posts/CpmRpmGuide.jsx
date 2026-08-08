import { Link } from "react-router-dom";

function CpmRpmGuide() {
  return (
    <div className="space-y-8 text-base leading-8 text-slate-300">
      <section>
        <h2 className="text-2xl font-bold text-white">
          What Is YouTube CPM?
        </h2>

        <p className="mt-4">
          CPM stands for Cost Per Mille, where mille means one thousand.
          In advertising, CPM generally describes the cost associated with
          one thousand ad impressions.
        </p>

        <p className="mt-4">
          CPM is primarily an advertising metric. It should not be treated
          as the exact amount a YouTube creator receives from every
          thousand views.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          What Is YouTube RPM?
        </h2>

        <p className="mt-4">
          RPM stands for Revenue Per Mille. It is commonly used to
          understand how much revenue is generated per 1,000 views.
        </p>

        <p className="mt-4">
          RPM can provide a more creator-focused view of revenue because
          it relates revenue to total views rather than only looking at
          advertising cost.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          CPM vs RPM: The Main Difference
        </h2>

        <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-5 py-4 font-semibold text-white">
                  Metric
                </th>
                <th className="px-5 py-4 font-semibold text-white">
                  What It Represents
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-white/10">
                <td className="px-5 py-4 font-medium text-white">
                  CPM
                </td>
                <td className="px-5 py-4 text-slate-400">
                  Advertising cost associated with 1,000 ad impressions.
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 font-medium text-white">
                  RPM
                </td>
                <td className="px-5 py-4 text-slate-400">
                  Revenue generated per 1,000 views.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          How Is RPM Calculated?
        </h2>

        <p className="mt-4">
          A simple RPM calculation can be expressed as:
        </p>

        <div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 text-center">
          <code className="text-base font-semibold text-white">
            RPM = (Revenue ÷ Total Views) × 1,000
          </code>
        </div>

        <p className="mt-5">
          For example, if a channel earns $50 from 10,000 views, the
          calculated RPM would be $5.
        </p>

        <Link
          to="/tools/rpm-calculator"
          className="mt-5 inline-flex font-semibold text-blue-400 hover:text-blue-300"
        >
          Calculate YouTube RPM →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          How Is CPM Used?
        </h2>

        <p className="mt-4">
          CPM is useful for understanding advertising costs and advertiser
          demand. It can vary depending on the audience, content category,
          geography, seasonality, and other market conditions.
        </p>

        <Link
          to="/tools/cpm-calculator"
          className="mt-5 inline-flex font-semibold text-blue-400 hover:text-blue-300"
        >
          Calculate YouTube CPM →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Why CPM and RPM Can Be Different
        </h2>

        <p className="mt-4">
          CPM and RPM measure different things, so they should not be
          expected to have the same value.
        </p>

        <p className="mt-4">
          CPM focuses on advertising cost and ad impressions, while RPM
          relates revenue to total views. Not every view results in a
          monetized ad impression, and other factors can affect creator
          revenue.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Factors That Can Affect CPM and RPM
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Audience location.</li>
          <li>Advertiser demand.</li>
          <li>Content category.</li>
          <li>Number of monetized playbacks.</li>
          <li>Video and audience characteristics.</li>
          <li>Seasonal advertising demand.</li>
          <li>Available advertising inventory.</li>
          <li>Other eligible revenue sources.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Does a Higher CPM Always Mean Higher Earnings?
        </h2>

        <p className="mt-4">
          No. CPM alone does not determine how much a creator earns. The
          number of views, monetized playbacks, audience, revenue sources,
          and other factors can affect the final amount.
        </p>

        <p className="mt-4">
          This is why creators should avoid judging channel performance
          using CPM alone.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          How Creators Can Use These Metrics
        </h2>

        <ol className="mt-5 list-decimal space-y-3 pl-6">
          <li>Use CPM to understand advertising conditions.</li>
          <li>Use RPM to evaluate revenue relative to views.</li>
          <li>Compare performance across similar time periods.</li>
          <li>Look at other analytics instead of relying on one metric.</li>
          <li>Focus on creating content that provides value to viewers.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Final Thoughts
        </h2>

        <p className="mt-4">
          CPM and RPM are useful metrics, but they answer different
          questions. CPM is primarily associated with advertising cost,
          while RPM provides a revenue-per-view perspective.
        </p>

        <p className="mt-4">
          Understanding both metrics can help creators interpret their
          revenue data more accurately and make better content and
          monetization decisions.
        </p>

        <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Calculate Your YouTube Revenue Metrics
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Use TubeKit's free CPM and RPM calculators to calculate
            estimates from your own numbers.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              to="/tools/cpm-calculator"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              CPM Calculator
            </Link>

            <Link
              to="/tools/rpm-calculator"
              className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              RPM Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CpmRpmGuide;