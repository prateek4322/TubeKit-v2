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