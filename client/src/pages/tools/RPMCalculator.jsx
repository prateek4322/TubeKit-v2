import { useState } from "react";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";

function RPMCalculator() {
  const [views, setViews] = useState("");
  const [revenue, setRevenue] = useState("");
  const [rpm, setRpm] = useState(null);

  const calculate = () => {
    if (!views || !revenue) {
      alert("Please enter all fields.");
      return;
    }

    const result =
      (Number(revenue) / Number(views)) * 1000;

    setRpm(result);
  };

  const reset = () => {
    setViews("");
    setRevenue("");
    setRpm(null);
  };

  return (
    <> <SEO
title="YouTube RPM Calculator | TubeKit"
description="Calculate YouTube RPM."
url="/tools/rpm-calculator"
/>
    <ToolLayout>
      <ToolHeader
        title="YouTube RPM Calculator"
        description="Calculate Revenue Per 1000 Views."
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
              Revenue ($)
            </label>

            <input
              type="number"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
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

      {rpm !== null && (
        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">

          <h2 className="text-2xl font-bold text-white">
            Estimated RPM
          </h2>

          <p className="mt-4 text-5xl font-bold text-green-400">
            ${rpm.toFixed(2)}
          </p>

        </div>
      )}
      <section className="mt-12 space-y-10">
  <div>
    <h2 className="text-2xl font-bold">
      How to Use the YouTube RPM Calculator
    </h2>

    <p className="mt-3 text-muted-foreground">
      TubeKit's YouTube RPM Calculator helps creators estimate revenue
      earned per 1,000 views. Enter the revenue and view values requested
      by the calculator to calculate an estimated RPM.
    </p>

    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>Enter your estimated or actual YouTube revenue.</li>
      <li>Enter the number of views.</li>
      <li>Click the Calculate button.</li>
      <li>Review the calculated RPM.</li>
      <li>Use the result as a reference for comparing revenue performance.</li>
    </ol>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      What Is YouTube RPM?
    </h2>

    <p className="mt-3 text-muted-foreground">
      RPM stands for Revenue Per Mille and represents the revenue earned
      per 1,000 views. It is useful for understanding how much revenue a
      creator generates relative to the number of views.
    </p>

    <p className="mt-3 text-muted-foreground">
      RPM can vary between channels and videos because revenue depends on
      factors such as audience, monetized views, advertising demand,
      content category, geography, and other revenue sources.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      RPM Formula
    </h2>

    <div className="mt-5 rounded-lg border p-5 text-center">
      <p className="text-lg font-semibold">
        RPM = (Estimated Revenue ÷ Total Views) × 1,000
      </p>
    </div>

    <p className="mt-3 text-muted-foreground">
      For example, if a channel earns $50 from 10,000 views, the
      calculated RPM would be $5.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      Factors That Can Affect YouTube RPM
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Audience location.</li>
      <li>Content category and audience.</li>
      <li>Number of monetized views.</li>
      <li>Advertiser demand.</li>
      <li>Video length and available ad opportunities.</li>
      <li>Seasonal changes in advertising demand.</li>
      <li>Other eligible revenue sources included in the calculation.</li>
    </ul>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      RPM vs CPM
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
            <td className="px-4 py-3">RPM</td>
            <td className="px-4 py-3 text-muted-foreground">
              Revenue earned per 1,000 views.
            </td>
          </tr>

          <tr className="border-b">
            <td className="px-4 py-3">CPM</td>
            <td className="px-4 py-3 text-muted-foreground">
              Advertising cost associated with 1,000 ad impressions.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      YouTube RPM Calculator Features
    </h2>

    <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-muted-foreground">
      <li>✓ Quick RPM calculations</li>
      <li>✓ Revenue-based calculation</li>
      <li>✓ View-based calculation</li>
      <li>✓ Simple calculator interface</li>
      <li>✓ Easy-to-understand results</li>
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
          What does YouTube RPM mean?
        </h3>
        <p className="mt-2 text-muted-foreground">
          RPM means Revenue Per Mille and represents revenue per 1,000
          views.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          How is YouTube RPM calculated?
        </h3>
        <p className="mt-2 text-muted-foreground">
          A basic RPM calculation divides revenue by total views and
          multiplies the result by 1,000.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Why does RPM vary between YouTube channels?
        </h3>
        <p className="mt-2 text-muted-foreground">
          RPM can vary because audiences, content categories, geography,
          monetized views, advertiser demand, and revenue sources differ.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is RPM the same as CPM?
        </h3>
        <p className="mt-2 text-muted-foreground">
          No. RPM measures revenue per 1,000 views, while CPM is generally
          an advertising cost metric based on 1,000 ad impressions.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is the TubeKit RPM Calculator free?
        </h3>
        <p className="mt-2 text-muted-foreground">
          TubeKit provides the RPM Calculator as a free tool for creators.
        </p>
      </div>
    </div>
  </div>
</section>
    </ToolLayout>
    </>
  );
}

export default RPMCalculator;