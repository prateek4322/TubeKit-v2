import { useState } from "react";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";

function MoneyCalculator() {
  const [views, setViews] = useState("");
  const [rpm, setRpm] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState(null);

  const calculateRevenue = () => {
    if (!views || !rpm) {
      alert("Please enter Views and RPM.");
      return;
    }

    const revenue = (Number(views) / 1000) * Number(rpm);

    setResult({
      total: revenue,
      daily: revenue / 30,
      weekly: revenue / 4,
      monthly: revenue,
      yearly: revenue * 12,
    });
  };

  const resetCalculator = () => {
    setViews("");
    setRpm("");
    setCurrency("USD");
    setResult(null);
  };

  const symbol = currency === "USD" ? "$" : "₹";

  return (
    <> <SEO
title="YouTube Money Calculator | TubeKit"
description="Estimate YouTube earnings."
url="/tools/money-calculator"
/>
    <ToolLayout>
      <ToolHeader
        title="YouTube Money Calculator"
        description="Estimate your YouTube earnings using RPM."
      />

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <div className="grid gap-6 md:grid-cols-3">

          <div>
            <label className="mb-2 block text-white">
              Total Views
            </label>

            <input
              type="number"
              value={views}
              onChange={(e) => setViews(e.target.value)}
              placeholder="100000"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-white">
              RPM
            </label>

            <input
              type="number"
              value={rpm}
              onChange={(e) => setRpm(e.target.value)}
              placeholder="3.5"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-white">
              Currency
            </label>

            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
            >
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>

        </div>

        <div className="mt-8 flex gap-4">

          <button
            onClick={calculateRevenue}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
          >
            Calculate
          </button>

          <button
            onClick={resetCalculator}
            className="rounded-xl bg-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-600"
          >
            Reset
          </button>

        </div>

      </div>

      {result && (
        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="mb-6 text-2xl font-bold text-white">
            Estimated Earnings
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            <ResultCard title="Daily" value={`${symbol}${result.daily.toFixed(2)}`} />
            <ResultCard title="Weekly" value={`${symbol}${result.weekly.toFixed(2)}`} />
            <ResultCard title="Monthly" value={`${symbol}${result.monthly.toFixed(2)}`} />
            <ResultCard title="Yearly" value={`${symbol}${result.yearly.toFixed(2)}`} />
            <ResultCard title="Total" value={`${symbol}${result.total.toFixed(2)}`} />

          </div>

        </div>
      )}
      <section className="mt-12 space-y-10">
  <div>
    <h2 className="text-2xl font-bold">
      How to Use the YouTube Money Calculator
    </h2>

    <p className="mt-3 text-muted-foreground">
      TubeKit's YouTube Money Calculator helps creators estimate potential
      YouTube earnings using views and other available inputs. Enter the
      required values, calculate the estimate, and use the result as a
      general planning reference.
    </p>

    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>Enter your estimated YouTube views.</li>
      <li>Enter the relevant earnings or rate information requested by the tool.</li>
      <li>Click the Calculate button.</li>
      <li>Review the estimated earnings.</li>
      <li>Use the estimate for planning rather than as guaranteed income.</li>
    </ol>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      How Does YouTube Revenue Work?
    </h2>

    <p className="mt-3 text-muted-foreground">
      YouTube earnings can vary significantly between channels and videos.
      Revenue may depend on factors such as monetized views, audience
      location, advertiser demand, content category, ad formats, and
      other monetization sources.
    </p>

    <p className="mt-3 text-muted-foreground">
      Because these factors change over time, an online earnings
      calculator can only provide an estimate. Actual revenue shown in
      YouTube Analytics may be different.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      Factors That Can Affect YouTube Earnings
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Number of views and monetized playbacks.</li>
      <li>Audience location and market.</li>
      <li>Advertiser demand.</li>
      <li>Video topic and audience.</li>
      <li>Ad formats available for the content.</li>
      <li>Seasonal changes in advertising demand.</li>
    </ul>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      YouTube Money Calculator Features
    </h2>

    <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-muted-foreground">
      <li>✓ Estimated YouTube earnings</li>
      <li>✓ View-based calculations</li>
      <li>✓ Simple calculator interface</li>
      <li>✓ Quick results</li>
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
          How much money can YouTube videos make?
        </h3>
        <p className="mt-2 text-muted-foreground">
          There is no fixed amount. Earnings vary depending on views,
          monetized playbacks, audience, advertiser demand, content
          category, and other factors.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Does every YouTube view generate money?
        </h3>
        <p className="mt-2 text-muted-foreground">
          No. Not every view results in an ad impression or monetized
          playback.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Are the results from this calculator guaranteed?
        </h3>
        <p className="mt-2 text-muted-foreground">
          No. The calculator provides an estimate. Actual earnings can
          differ because advertising and monetization conditions vary.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          What is the difference between CPM and RPM?
        </h3>
        <p className="mt-2 text-muted-foreground">
          CPM generally refers to the advertiser-side cost associated
          with ad impressions, while RPM represents estimated revenue
          per thousand views after applicable revenue-sharing factors.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is the TubeKit Money Calculator free?
        </h3>
        <p className="mt-2 text-muted-foreground">
          TubeKit provides the Money Calculator as a free tool for
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

function ResultCard({ title, value }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950 p-5 text-center">
      <h3 className="text-slate-400">{title}</h3>
      <p className="mt-3 text-2xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}

export default MoneyCalculator;