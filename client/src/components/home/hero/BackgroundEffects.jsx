function BackgroundEffects() {
  return (
    <>
      {/* Aurora */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[160px]" />

        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />

      </div>

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
    </>
  );
}

export default BackgroundEffects;