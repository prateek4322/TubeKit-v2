import { ArrowRight, Grid2x2 } from "lucide-react";
import { Link } from "react-router-dom";

function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:justify-start">

      <Link
        to="/tools/title-generator"
        className="group flex w-full items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 sm:w-auto"
      >
        Start Creating

        <ArrowRight
          size={20}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      <Link
        to="/tools"
        className="flex w-full items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-slate-800 sm:w-auto"
      >
        <Grid2x2
          size={18}
          className="mr-2"
        />

        Explore Tools

      </Link>

    </div>
  );
}

export default HeroButtons;