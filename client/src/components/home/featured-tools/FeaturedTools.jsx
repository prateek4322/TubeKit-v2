import ToolGrid from "./ToolGrid";

export default function FeaturedTools() {
  return (
    <section className="relative bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex items-center
              rounded-full
              border border-red-500/30
              bg-red-500/10
              px-4 py-2
              text-xs font-semibold
              uppercase tracking-wide
              text-red-400
            "
          >
            AI CREATOR STUDIO
          </span>

          <h2
            className="
              mt-5
              text-center
              text-3xl
              font-black
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Featured{" "}
            <span className="text-red-500">
              AI Tools
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-center
              text-sm
              leading-6
              text-slate-400
              sm:text-base
              sm:leading-7
            "
          >
            Create, optimize, and grow your YouTube content with
            TubeKit's powerful AI-powered creator tools.
          </p>

          <div
            className="
              mx-auto
              mt-6
              h-1
              w-14
              rounded-full
              bg-red-500
              shadow-[0_0_18px_rgba(239,68,68,0.45)]
            "
          />
        </div>

        {/* Tools */}
        <div className="mt-14 sm:mt-16">
          <ToolGrid />
        </div>

      </div>
    </section>
  );
}