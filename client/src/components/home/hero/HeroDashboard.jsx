import {
  Sparkles,
  Copy,
  BarChart3,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

function HeroDashboard() {
  return (
    <div className="mx-auto w-full max-w-lg lg:max-w-xl">

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl backdrop-blur-xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-blue-500/20 p-2">

              <Sparkles
                size={20}
                className="text-blue-400"
              />

            </div>

            <div>

              <h3 className="font-semibold text-white">
                AI Title Generator
              </h3>

              <p className="text-xs text-slate-400">
                Live Preview
              </p>

            </div>

          </div>

          <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
            SEO Score 96
          </span>

        </div>

        {/* Generated Title */}

        <div className="p-6">

          <div className="rounded-2xl bg-slate-950 p-5">

            <p className="text-lg font-bold leading-8 text-white sm:text-xl">
              How I Grew My YouTube Channel
              From 0 To 100K Subscribers
            </p>

          </div>

          {/* Cards */}

          <div className="mt-6 grid grid-cols-2 gap-4">

            <Card
              icon={<Copy size={18} />}
              title="One Click Copy"
              color="text-blue-400"
            />

            <Card
              icon={<TrendingUp size={18} />}
              title="High CTR"
              color="text-green-400"
            />

            <Card
              icon={<BarChart3 size={18} />}
              title="Analytics"
              color="text-purple-400"
            />

            <Card
              icon={<CheckCircle2 size={18} />}
              title="Ready To Publish"
              color="text-yellow-400"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

function Card({
  icon,
  title,
  color,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 transition hover:border-blue-500">

      <div className={color}>
        {icon}
      </div>

      <p className="mt-3 text-sm font-medium text-white">
        {title}
      </p>

    </div>
  );
}

export default HeroDashboard;