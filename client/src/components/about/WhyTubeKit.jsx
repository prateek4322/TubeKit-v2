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
    description:
      "Use AI-powered tools to generate ideas and create YouTube content faster.",
    color: "red",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description:
      "Improve your content workflow with tools designed around YouTube SEO.",
    color: "yellow",
  },
  {
    icon: Rocket,
    title: "Fast Generation",
    description:
      "Generate titles, scripts, tags and other content ideas in seconds.",
    color: "green",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "TubeKit is designed with a simple and privacy-conscious creator experience.",
    color: "blue",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Use TubeKit comfortably across desktop, tablet and mobile devices.",
    color: "red",
  },
  {
    icon: Zap,
    title: "Free to Start",
    description:
      "Access useful creator tools without needing a complicated setup.",
    color: "yellow",
  },
];

const colorStyles = {
  red: {
    border: "border-red-500/15",
    bg: "bg-red-500/5",
    iconBg: "bg-red-500/10",
    icon: "text-red-400",
    glow: "group-hover:bg-red-500/10",
  },
  yellow: {
    border: "border-yellow-400/15",
    bg: "bg-yellow-400/5",
    iconBg: "bg-yellow-400/10",
    icon: "text-yellow-300",
    glow: "group-hover:bg-yellow-400/10",
  },
  green: {
    border: "border-green-500/15",
    bg: "bg-green-500/5",
    iconBg: "bg-green-500/10",
    icon: "text-green-400",
    glow: "group-hover:bg-green-500/10",
  },
  blue: {
    border: "border-blue-500/15",
    bg: "bg-blue-500/5",
    iconBg: "bg-blue-500/10",
    icon: "text-blue-400",
    glow: "group-hover:bg-blue-500/10",
  },
};

function WhyTubeKit() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:py-24">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Why TubeKit
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Everything You Need to
            <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Create Better
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            TubeKit brings useful AI and YouTube creator tools together
            in one simple platform.
          </p>

        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {features.map((item) => {
            const Icon = item.icon;
            const styles = colorStyles[item.color];

            return (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border ${styles.border} bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]`}
              >
                {/* Glow */}
                <div
                  aria-hidden="true"
                  className={`absolute -right-16 -top-16 h-32 w-32 rounded-full blur-3xl transition duration-500 ${styles.glow}`}
                />

                {/* Icon */}
                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${styles.iconBg}`}
                >
                  <Icon
                    size={24}
                    strokeWidth={2}
                    className={styles.icon}
                  />
                </div>

                {/* Content */}
                <div className="relative">

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                </div>

                {/* Bottom Accent */}
                <div
                  aria-hidden="true"
                  className="mt-7 h-px bg-gradient-to-r from-white/10 to-transparent transition group-hover:from-white/20"
                />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default WhyTubeKit;