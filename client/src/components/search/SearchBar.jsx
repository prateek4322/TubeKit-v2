import { useState } from "react";
import { Search } from "lucide-react";

import useSearch from "@/hooks/useSearch";
import SearchResults from "./SearchResults";

function SearchBar() {
  const [query, setQuery] = useState("");

  const results = useSearch(query);

  return (
    <div className="relative w-full max-w-2xl">
      <div className="flex items-center rounded-full border border-slate-700 bg-slate-900 px-4">
        <Search
          size={20}
          className="text-slate-400"
        />

        <input
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          placeholder="Search AI Tools..."
          className="w-full bg-transparent px-3 py-4 text-white outline-none"
        />
      </div>

      {query && (
        <div className="absolute z-50 mt-3 w-full">
          <SearchResults
            results={results}
            onClose={() => setQuery("")}
          />
        </div>
      )}
    </div>
  );
}

export default SearchBar;