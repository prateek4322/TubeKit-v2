function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-slate-950">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute left-[10%] top-[35%] h-40 w-40 rounded-full bg-red-500/5 blur-3xl" />

        <div className="absolute right-[10%] top-[45%] h-40 w-40 rounded-full bg-green-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">

        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            About TubeKit
          </div>
        </div>

        {/* Heading */}
        <h1 className="mx-auto mt-8 max-w-5xl text-center text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.08]">
          Helping YouTube Creators
          <br />

          <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
            Create, Optimize & Grow
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-slate-400 sm:text-lg">
          TubeKit provides free AI-powered tools designed to help YouTube
          creators plan content, generate ideas, optimize videos and work
          more efficiently.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/"
            className="rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/10 transition hover:-translate-y-0.5 hover:shadow-blue-500/20"
          >
            Explore TubeKit Tools
          </a>

          <a
            href="/blog"
            className="rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-blue-400/30 hover:bg-white/[0.06]"
          >
            Explore Creator Guides
          </a>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-red-500/15 bg-white/[0.03] p-5 text-center backdrop-blur-sm">
            <div className="text-2xl font-black text-red-400">
              AI
            </div>

            <p className="mt-1 text-sm text-slate-400">
              Creator Tools
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/15 bg-white/[0.03] p-5 text-center backdrop-blur-sm">
            <div className="text-2xl font-black text-yellow-300">
              Free
            </div>

            <p className="mt-1 text-sm text-slate-400">
              To Get Started
            </p>
          </div>

          <div className="rounded-2xl border border-green-500/15 bg-white/[0.03] p-5 text-center backdrop-blur-sm">
            <div className="text-2xl font-black text-green-400">
              YouTube
            </div>

            <p className="mt-1 text-sm text-slate-400">
              Creator Focused
            </p>
          </div>

        </div>

        {/* Bottom Accent */}
        <div
          aria-hidden="true"
          className="mx-auto mt-16 h-px max-w-xl bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        />
      </div>
    </section>
  );
}

export default AboutHero;