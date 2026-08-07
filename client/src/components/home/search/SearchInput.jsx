import { Search } from "lucide-react";

function SearchInput() {
  return (
    <div className="mx-auto mt-10 flex max-w-3xl items-center rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4">

      <Search className="mr-4 text-slate-500" />

      <input
        type="text"
        placeholder="Search AI Title Generator, Tags Generator..."
        className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
      />

    </div>
  );
}

export default SearchInput;