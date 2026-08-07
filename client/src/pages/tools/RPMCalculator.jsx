import { useState } from "react";

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
    </ToolLayout>
  );
}

export default RPMCalculator;