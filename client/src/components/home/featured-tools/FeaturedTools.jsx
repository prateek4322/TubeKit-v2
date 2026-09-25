import ToolGrid from "./ToolGrid";

export default function FeaturedTools() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span
            className="
              inline-flex items-center
              rounded-full
              border border-white/10
              bg-white/[0.04]
              px-4 py-2
              text-sm font-semibold
              text-slate-300
            "
          >
            AI Creator Tools
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
              Grow on YouTube
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Powerful AI tools to help you create better content,
            optimize your videos and grow your YouTube channel faster.
          </p>
        </div>

        {/* Tools */}
        <ToolGrid />

      </div>
    </section>
  );
}