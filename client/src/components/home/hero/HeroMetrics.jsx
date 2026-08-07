function HeroMetrics() {
  const metrics = [
    {
      value: "17+",
      label: "AI Tools",
    },
    {
      value: "2M+",
      label: "Generated",
    },
    {
      value: "100%",
      label: "Free",
    },
  ];

  return (
    <div className="mt-12 grid grid-cols-3 gap-6">

      {metrics.map((item) => (
        <div key={item.label}>

          <h3 className="text-3xl font-black text-white">
            {item.value}
          </h3>

          <p className="mt-2 text-slate-400">
            {item.label}
          </p>

        </div>
      ))}

    </div>
  );
}

export default HeroMetrics;