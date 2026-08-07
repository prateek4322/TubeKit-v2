function FeaturedTitle() {
  return (
    <div className="mb-16 text-center">

      <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
        ⭐ Most Popular
      </span>

      <h2 className="mt-6 text-5xl font-black text-white">
        Featured
        <span className="bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 bg-clip-text text-transparent">
          {" "}Tools
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
        Discover our most popular AI-powered YouTube tools used by creators every day.
      </p>

    </div>
  );
}

export default FeaturedTitle;