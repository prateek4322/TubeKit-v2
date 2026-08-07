import SearchItem from "./SearchItem";

function SearchResults({
  results,
  onClose,
}) {
  if (!results.length) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-slate-400">
        No tools found.
      </div>
    );
  }

  return (
    <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950 p-4">
      {results.map((tool) => (
        <SearchItem
          key={tool.id}
          tool={tool}
          onClick={onClose}
        />
      ))}
    </div>
  );
}

export default SearchResults;