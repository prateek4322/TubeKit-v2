import { Link } from "react-router-dom";
import SearchBar from "@/components/search/SearchBar";

const tools = [
  {
    title: "AI Title",
    path: "/tools/title-generator",
  },
  {
    title: "Tags",
    path: "/tools/tags-generator",
  },
  {
    title: "Description",
    path: "/tools/description-generator",
  },
  {
    title: "Script",
    path: "/tools/script-writer",
  },
  {
    title: "Money",
    path: "/tools/money-calculator",
  },
  {
    title: "Channel",
    path: "/tools/channel-id-finder",
  },
];

function HeroSearch() {
  return (
    <div className="mx-auto mt-8 w-full max-w-2xl lg:mx-0">

      <SearchBar />

      <div className="mt-6">

        <p className="mb-3 text-center text-sm font-medium text-slate-400 lg:text-left">
          Popular Tools
        </p>

        <div className="flex flex-wrap justify-center gap-3 lg:justify-start">

          {tools.map((tool) => (
            <Link
              key={tool.title}
              to={tool.path}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white sm:text-sm"
            >
              {tool.title}
            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}

export default HeroSearch;