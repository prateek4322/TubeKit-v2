import {
  Sparkles,
  Copy,
  TrendingUp,
} from "lucide-react";

function DashboardCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <Sparkles className="text-blue-400" />

          <span className="text-white">
            AI Result
          </span>

        </div>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">
          SEO 96
        </span>

      </div>

      <div className="mt-8 rounded-xl bg-slate-950 p-5">

        <h3 className="text-xl font-bold text-white">
          10 Secrets To Grow
          Your YouTube Channel
        </h3>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="rounded-xl bg-slate-950 p-4">

          <Copy className="mb-3 text-blue-400" />

          <p className="text-white">
            One Click Copy
          </p>

        </div>

        <div className="rounded-xl bg-slate-950 p-4">

          <TrendingUp className="mb-3 text-green-400" />

          <p className="text-white">
            High CTR
          </p>

        </div>

      </div>

    </div>
  );
}

export default DashboardCard;