import {
  Sparkles,
  Rocket,
  Search,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Powered",
  },
  {
    icon: Search,
    title: "SEO Optimized",
  },
  {
    icon: Rocket,
    title: "Fast Generation",
  },
  {
    icon: Shield,
    title: "Privacy First",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
  },
  {
    icon: Zap,
    title: "Free Forever",
  },
];

function WhyTubeKit() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h2 className="text-center text-3xl font-bold">
        Why Choose TubeKit?
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <Icon className="text-blue-400" />

              <h3 className="mt-6 text-xl font-semibold">
                {item.title}
              </h3>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default WhyTubeKit;