function ToolLayout({ children }) {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {children}
      </div>
    </section>
  );
}

export default ToolLayout;