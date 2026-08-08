import { useState } from "react";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";

function CPMCalculator() {
  const [views, setViews] = useState("");
  const [earnings, setEarnings] = useState("");
  const [cpm, setCpm] = useState(null);

  const calculate = () => {
    if (!views || !earnings) {
      alert("Please enter all fields.");
      return;
    }

    const result = (Number(earnings) / Number(views)) * 1000;

    setCpm(result);
  };

  const reset = () => {
    setViews("");
    setEarnings("");
    setCpm(null);
  };

  return ( 
    <> <SEO
title="YouTube CPM Calculator | TubeKit"
description="Calculate YouTube CPM."
url="/tools/cpm-calculator"
/>
    <ToolLayout>
      <ToolHeader
        title="YouTube CPM Calculator"
        description="Calculate CPM based on your earnings and views."
      />

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-white">
              Total Views
            </label>

            <input
              type="number"
              value={views}
              onChange={(e) => setViews(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-white">
              Total Earnings ($)
            </label>

            <input
              type="number"
              value={earnings}
              onChange={(e) => setEarnings(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
            />
          </div>

        </div>

        <div className="mt-8 flex gap-4">

          <button
            onClick={calculate}
            className="rounded-xl bg-blue-600 px-6 py-3 text-white"
          >
            Calculate
          </button>

          <button
            onClick={reset}
            className="rounded-xl bg-slate-700 px-6 py-3 text-white"
          >
            Reset
          </button>

        </div>

      </div>

      {cpm !== null && (
        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">

          <h2 className="text-2xl font-bold text-white">
            Estimated CPM
          </h2>

          <p className="mt-4 text-5xl font-bold text-blue-400">
            ${cpm.toFixed(2)}
          </p>

        </div>
      )}
<section className="mt-12 space-y-10">
  <div>
    <h2 className="text-2xl font-bold">
      How to Use the YouTube CPM Calculator
    </h2>

    <p className="mt-3 text-muted-foreground">
      TubeKit's YouTube CPM Calculator helps creators estimate the
      advertising cost associated with a given number of impressions.
      Enter the CPM and impression values requested by the calculator
      to get an estimate.
    </p>

    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>Enter the CPM value.</li>
      <li>Enter the number of impressions or views requested by the tool.</li>
      <li>Click the Calculate button.</li>
      <li>Review the calculated estimate.</li>
      <li>Use the result as a reference rather than a guaranteed earning figure.</li>
    </ol>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      What Is YouTube CPM?
    </h2>

    <p className="mt-3 text-muted-foreground">
      CPM stands for Cost Per Mille, where mille means one thousand.
      In advertising, CPM describes the cost associated with one
      thousand ad impressions.
    </p>

    <p className="mt-3 text-muted-foreground">
      CPM is generally an advertiser-side metric and should not be
      confused with the revenue a creator actually receives. Creator
      earnings can depend on additional factors such as monetized
      playbacks, revenue sharing, audience location, and advertiser
      demand.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      CPM vs RPM
    </h2>

    <div className="mt-5 overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-3 font-semibold">Metric</th>
            <th className="px-4 py-3 font-semibold">Meaning</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="px-4 py-3">CPM</td>
            <td className="px-4 py-3 text-muted-foreground">
              Advertising cost associated with 1,000 ad impressions.
            </td>
          </tr>

          <tr className="border-b">
            <td className="px-4 py-3">RPM</td>
            <td className="px-4 py-3 text-muted-foreground">
              Estimated creator revenue per 1,000 views after applicable
              revenue-sharing factors.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      Factors That Can Affect CPM
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Audience location.</li>
      <li>Advertiser demand.</li>
      <li>Content category and audience.</li>
      <li>Time of year and seasonal advertising demand.</li>
      <li>Available ad formats and inventory.</li>
      <li>Overall market conditions.</li>
    </ul>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      YouTube CPM Calculator Features
    </h2>

    <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-muted-foreground">
      <li>✓ Quick CPM calculations</li>
      <li>✓ Impression-based estimates</li>
      <li>✓ Simple calculator interface</li>
      <li>✓ Easy-to-understand results</li>
      <li>✓ Useful for revenue planning</li>
      <li>✓ Free to use</li>
    </ul>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      Frequently Asked Questions
    </h2>

    <div className="mt-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          What does CPM mean?
        </h3>
        <p className="mt-2 text-muted-foreground">
          CPM means Cost Per Mille and refers to the cost associated with
          one thousand ad impressions.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is CPM the same as YouTube earnings?
        </h3>
        <p className="mt-2 text-muted-foreground">
          No. CPM is primarily an advertising metric. A creator's actual
          revenue can be different because of revenue sharing and other
          monetization factors.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Why does YouTube CPM change?
        </h3>
        <p className="mt-2 text-muted-foreground">
          CPM can change because advertiser demand, audience location,
          content category, seasonality, and available advertising
          inventory can vary.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is a higher CPM always better for a creator?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Not necessarily. CPM alone does not determine total creator
          revenue. Other factors, including monetized views and RPM,
          also matter.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is the TubeKit CPM Calculator free?
        </h3>
        <p className="mt-2 text-muted-foreground">
          TubeKit provides the CPM Calculator as a free tool for
          creators.
        </p>
      </div>
    </div>
  </div>
</section>
    </ToolLayout>
    </>
  );
}

export default CPMCalculator;