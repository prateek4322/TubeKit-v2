function ToolHeader({ title, description }) {
  return (
    <div className="mb-12 text-center">

      <h1 className="text-5xl font-black text-white">
        {title}
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
        {description}
      </p>

    </div>
  );
}

export default ToolHeader;