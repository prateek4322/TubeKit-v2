import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

function ToolCTA({
  title = "Create Better YouTube Content with TubeKit",
  description = "Use TubeKit's AI-powered creator tools to generate titles, descriptions, tags, scripts and more.",
  href = "/tools/title-generator",
}) {
  return (
    <section className="my-12 overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-r from-red-500/5 via-yellow-400/5 to-blue-500/10">

      <div className="p-6 sm:p-8">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Content */}
          <div className="max-w-2xl">

            {/* Label */}
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Sparkles
                size={16}
                className="text-yellow-400"
              />

              <span className="bg-gradient-to-r from-red-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent">
                TubeKit Creator Tools
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
              {title}
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm leading-7 text-slate-400">
              {description}
            </p>

          </div>

          {/* CTA */}
          <Link
            to={href}
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-blue-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Try TubeKit

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ToolCTA;