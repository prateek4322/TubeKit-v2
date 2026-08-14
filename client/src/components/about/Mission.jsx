function Mission() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:py-24">
      {/* Subtle Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            Our Mission
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Making YouTube Creation
            <span className="text-green-400">
              {" "}Simpler
            </span>
          </h2>
        </div>

        {/* Mission Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-10">

          {/* RGYB Accent */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 via-yellow-400 via-green-500 to-blue-500"
          />

          <div className="max-w-4xl pl-3 sm:pl-5">

            <p className="text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              TubeKit was created to make high-quality YouTube tools
              accessible to everyone.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
              Instead of using multiple websites, creators can use one
              platform to generate better content, improve SEO, and
              streamline their publishing workflow.
            </p>

          </div>

          {/* Bottom Accent */}
          <div
            aria-hidden="true"
            className="mt-8 h-px bg-gradient-to-r from-red-500/30 via-yellow-400/20 via-green-500/20 to-blue-500/30"
          />

          {/* Mission Points */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-red-500/15 bg-red-500/5 p-5">
              <div className="text-2xl font-black text-red-400">
                01
              </div>

              <h3 className="mt-3 font-semibold text-white">
                Create
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Turn ideas into useful YouTube content faster.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/15 bg-yellow-400/5 p-5">
              <div className="text-2xl font-black text-yellow-300">
                02
              </div>

              <h3 className="mt-3 font-semibold text-white">
                Optimize
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Improve titles, keywords and content strategy.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-500/15 bg-blue-500/5 p-5">
              <div className="text-2xl font-black text-blue-400">
                03
              </div>

              <h3 className="mt-3 font-semibold text-white">
                Grow
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Build a more efficient and consistent creator workflow.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Mission;