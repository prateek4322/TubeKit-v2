function BlogHeader() {
  return (
    <header className="mx-auto max-w-4xl text-center">

      {/* Badge */}

      <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
        TubeKit Blog
      </span>


      {/* Heading */}

      <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">

        YouTube, AI &

        <br />

        <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
          Creator Tech
        </span>

      </h1>


      {/* Description */}

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
        Practical YouTube growth guides, SEO strategies, AI tools,
        creator technology, content ideas, monetization tips and
        useful resources to help you create better content.
      </p>

    </header>
  );
}

export default BlogHeader;