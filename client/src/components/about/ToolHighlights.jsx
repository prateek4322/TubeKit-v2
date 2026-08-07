const tools = [
  "AI Title Generator",
  "Description Generator",
  "Tags Generator",
  "Hashtag Generator",
  "Keyword Generator",
  "Script Writer",
  "Money Calculator",
  "Monetization Checker",
  "Channel ID Finder",
  "Thumbnail Downloader",
];

function ToolHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h2 className="text-center text-3xl font-bold">
        What You Can Do
      </h2>

      <div className="mt-12 flex flex-wrap justify-center gap-4">

        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-slate-300"
          >
            {tool}
          </span>
        ))}

      </div>

    </section>
  );
}

export default ToolHighlights;