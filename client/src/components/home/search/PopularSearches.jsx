const searches = [
  "AI Title Generator",
  "Tags Generator",
  "Description Generator",
  "Money Calculator",
  "Monetization Checker",
];

function PopularSearches() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

      <span className="text-slate-400">
        Popular:
      </span>

      {searches.map((item) => (
        <button
          key={item}
          className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:text-white"
        >
          {item}
        </button>
      ))}

    </div>
  );
}

export default PopularSearches;