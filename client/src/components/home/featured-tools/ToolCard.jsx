import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ToolCard({ tool }) {
  return (
    <div className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">

      <div className="mb-6 text-5xl">
        {tool.icon}
      </div>

      <h3 className="text-2xl font-bold text-white">
        {tool.title}
      </h3>

      <p className="mt-4 text-slate-400">
        {tool.description}
      </p>

      <Link
        to={tool.path}
        className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-400 transition-all group-hover:gap-3"
      >
        Open Tool
        <ArrowRight size={18} />
      </Link>

    </div>
  );
}

export default ToolCard;