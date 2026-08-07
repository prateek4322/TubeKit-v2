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

    </ToolLayout>
    </>
  );
}

export default CPMCalculator;