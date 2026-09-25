import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ToolCard({ tool }) {
  return (
    <Link
      to={tool.path}
      className="group block min-h-[280px] rounded-3xl border border-slate-800/80 bg-slate-900/70 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:bg-slate-900/90 hover:shadow-[0_20px_60px_rgba(37,99,235,0.16)] sm:min-h-[300px] sm:p-8"
    >
      {/* Icon */}
      <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-4xl shadow-[0_0_30px_rgba(37,99,235,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400/40 group-hover:bg-blue-500/15 group-hover:shadow-[0_0_35px_rgba(37,99,235,0.18)]">
        {tool.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-300 sm:text-2xl">
        {tool.title}
      </h3>

      {/* Description */}
      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
        {tool.description}
      </p>

      {/* Open Tool */}
      <div className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-400 transition-all duration-300 group-hover:gap-3">
        Open Tool
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>

      {/* Bottom glow line */}
      <div className="mt-7 h-px w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent transition-all duration-500 group-hover:w-full" />
    </Link>
  );
}

export default ToolCard;