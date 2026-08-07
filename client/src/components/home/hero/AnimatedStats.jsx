import CountUp from "react-countup";

function AnimatedStats() {
  const stats = [
    {
      end: 17,
      suffix: "+",
      label: "Tools",
    },
    {
      end: 2,
      suffix: "M+",
      label: "Generations",
    },
    {
      end: 100,
      suffix: "%",
      label: "Free",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-8">

      {stats.map((item) => (

        <div key={item.label}>

          <h2 className="text-3xl font-black text-white">

            <CountUp
              end={item.end}
              duration={2}
            />

            {item.suffix}

          </h2>

          <p className="mt-2 text-slate-400">
            {item.label}
          </p>

        </div>

      ))}

    </div>
  );
}

export default AnimatedStats;