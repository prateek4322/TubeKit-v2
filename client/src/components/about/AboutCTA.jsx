import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute left-[15%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-red-500/5 blur-3xl" />

        <div className="absolute right-[15%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-green-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12 lg:p-16">

          {/* Top Accent */}
          <div
            aria-hidden="true"
            className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500"
          />

          {/* Small Label */}
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Start Creating
          </p>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Create Better
            <br />

            <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
              YouTube Content?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Turn your ideas into better YouTube content with TubeKit's
            free AI-powered creator tools.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/tools/title-generator"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/25"
            >
              Start Creating
              <span className="ml-2">
                →
              </span>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold text-slate-200 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.06]"
            >
              Explore All Tools
            </Link>

          </div>

          {/* Trust Line */}
          <p className="mt-8 text-sm text-slate-500">
            Free AI tools for YouTube creators
          </p>

        </div>
      </div>
    </section>
  );
}

export default AboutCTA;