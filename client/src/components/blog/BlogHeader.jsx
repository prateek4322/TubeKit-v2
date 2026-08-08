function BlogHeader() {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
        TubeKit Blog
      </span>

      <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
        YouTube Growth,
        <br />
        <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
          SEO & Creator Tips
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
        Practical guides, YouTube SEO strategies, content ideas,
        monetization tips, and creator tools to help you build better
        YouTube content.
      </p>
    </header>
  );
}

export default BlogHeader;