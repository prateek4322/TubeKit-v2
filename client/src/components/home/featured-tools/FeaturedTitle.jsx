function FeaturedTitle() {
  return (
    <div className="mb-16 text-center">

      <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 shadow-[0_0_25px_rgba(239,68,68,0.08)]">
        AI CREATOR STUDIO
      </span>

      <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
        Featured{" "}
        <span className="text-red-500">
          AI Tools
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
        Create, optimize, and grow your YouTube content with
        TubeKit's powerful AI-powered creator tools.
      </p>

      <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.45)]" />

    </div>
  );
}

export default FeaturedTitle;