import {
  Sparkles,
  Users,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Sparkles,
    value: "17+",
    label: "AI Tools",
  },
  {
    icon: Users,
    value: "2M+",
    label: "Generations",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Free Forever",
  },
];

function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center backdrop-blur-lg transition hover:border-blue-500/40"
          >
            <Icon
              size={22}
              className="mx-auto mb-3 text-blue-400"
            />

            <h3 className="text-2xl font-black text-white sm:text-3xl">
              {item.value}
            </h3>

            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              {item.label}
            </p>
          </div>
        );
      })}

    </div>
  );
}

export default HeroStats;