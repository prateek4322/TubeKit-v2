import SearchInput from "./SearchInput";
import PopularSearches from "./PopularSearches";

function SearchSection() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
          🚀 50+ Free YouTube Creator Tools
        </span>

        <h2 className="mt-6 text-5xl font-black text-white">
          Find the Perfect
          <span className="bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 bg-clip-text text-transparent">
            {" "}YouTube Tool
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Search AI tools for YouTube creators. Generate titles,
          descriptions, tags, keywords, scripts and much more.
        </p>

        <SearchInput />

        <PopularSearches />

      </div>
    </section>
  );
}

export default SearchSection;