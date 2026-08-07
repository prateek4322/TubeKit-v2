import { Link } from "react-router-dom";

function SearchItem({ tool, onClick }) {
  return (
    <Link
      to={tool.path}
      onClick={onClick}
      className="block rounded-xl border border-slate-800 bg-slate-900 p-4 transition hover:border-blue-500 hover:bg-slate-800"
    >
      <h3 className="font-semibold text-white">
        {tool.title}
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        {tool.category}
      </p>
    </Link>
  );
}

export default SearchItem;