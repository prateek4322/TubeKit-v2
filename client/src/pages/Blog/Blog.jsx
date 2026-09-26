import SEO from "@/components/common/SEO";
import BlogGrid from "@/components/blog/BlogGrid";
import blogPosts from "@/data/blogPosts";

function Blog() {
  return (
    <>
      <SEO
        title="YouTube Growth & SEO Blog | TubeKit"
        description="Learn YouTube SEO, AI tools, content strategy, keyword research, monetization, thumbnails, Shorts and creator growth with practical TubeKit guides."
        keywords="YouTube SEO blog, YouTube growth tips, YouTube AI tools, YouTube keyword research, YouTube monetization, YouTube Shorts, TubeKit blog"
        canonical="/blog"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-white/10">
          {/* Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            {/* Red glow */}
            <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-red-500/10 blur-[130px]" />

            {/* Blue glow */}
            <div className="absolute -right-24 top-16 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

            {/* Center glow */}
            <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/5 blur-[130px]" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050816] to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28">
            <div className="mx-auto max-w-4xl text-center">

              {/* Badge */}
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-red-500/20
                  bg-red-500/10
                  px-4 py-2
                  text-xs font-bold uppercase
                  tracking-[0.18em]
                  text-red-400
                  backdrop-blur-xl
                "
              >
                <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.7)]" />
                TubeKit Creator Blog
              </div>

              {/* Heading */}
              <h1
                className="
                  mt-7
                  text-[clamp(2.3rem,8vw,5.5rem)]
                  font-black
                  leading-[0.95]
                  tracking-[-0.04em]
                  text-white
                "
              >
                Learn. Create.
                <br />

                <span className="text-red-500">
                  Grow.
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:text-lg">
                Practical YouTube guides, AI workflows, SEO strategies and
                creator tips to help you create better content and grow
                your channel.
              </p>

              {/* Red + Blue Accent */}
              <div className="mx-auto mt-9 flex h-1.5 max-w-md overflow-hidden rounded-full">
                <div className="w-1/2 bg-red-500" />
                <div className="w-1/2 bg-blue-500" />
              </div>
            </div>

            {/* Hero Topics */}
            <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "▶",
                  title: "YouTube",
                  text: "Growth",
                  color: "red",
                },
                {
                  icon: "AI",
                  title: "AI",
                  text: "Creator Tools",
                  color: "blue",
                },
                {
                  icon: "#",
                  title: "SEO",
                  text: "Optimization",
                  color: "red",
                },
                {
                  icon: "+",
                  title: "Creator",
                  text: "Strategies",
                  color: "blue",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`
                    group rounded-2xl
                    border border-white/10
                    bg-[#0b0b0d]
                    p-5 text-center
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-${item.color}-500/40
                    hover:bg-[#101014]
                  `}
                >
                  <div
                    className={`
                      mx-auto flex h-10 w-10
                      items-center justify-center
                      rounded-xl
                      ${
                        item.color === "red"
                          ? "bg-red-500/10 text-red-400"
                          : "bg-blue-500/10 text-blue-400"
                      }
                      text-sm font-black
                      transition-transform duration-300
                      group-hover:scale-110
                    `}
                  >
                    {item.icon}
                  </div>

                  <h3 className="mt-3 text-base font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            BLOG CONTENT
        ====================================================== */}

        <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          {/* Background Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-red-500/5 blur-[120px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]"
          />

          <div className="relative mx-auto max-w-7xl">

            {/* Section Header */}
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                  Latest Articles
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Creator Knowledge <span className="text-red-500">Hub</span>
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Explore practical articles covering YouTube growth,
                  SEO, AI content creation and creator tools.
                </p>
              </div>

              {/* Red + Blue Accent */}
              <div className="hidden h-1.5 w-28 overflow-hidden rounded-full sm:flex">
                <div className="w-1/2 bg-red-500" />
                <div className="w-1/2 bg-blue-500" />
              </div>
            </div>

            {/* Blog Cards */}
            <div
              className="
                relative rounded-3xl
                border border-white/10
                bg-[#080a12]
                p-4
                shadow-2xl shadow-black/30
                backdrop-blur-xl
                transition-all duration-500
                hover:border-white/15
                sm:p-6 lg:p-8
              "
            >
              {/* Top Accent */}
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-red-500 to-blue-500" />

              <BlogGrid posts={blogPosts} />
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <section className="relative px-5 pb-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <div
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-white/10
                bg-[#0b0b0d]
                p-7 text-center
                shadow-2xl shadow-black/30
                transition-all duration-500
                hover:border-red-500/30
                sm:p-10 lg:p-12
              "
            >
              {/* Red Glow */}
              <div className="pointer-events-none absolute -left-24 top-0 h-48 w-48 rounded-full bg-red-500/10 blur-[90px]" />

              {/* Blue Glow */}
              <div className="pointer-events-none absolute -right-24 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-[90px]" />

              {/* Accent */}
              <div className="absolute left-1/2 top-0 h-[2px] w-40 -translate-x-1/2 overflow-hidden rounded-full">
                <div className="h-full w-1/2 bg-red-500" />
                <div className="absolute right-0 top-0 h-full w-1/2 bg-blue-500" />
              </div>

              <div className="relative">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-lg font-bold text-red-400">
                  +
                </div>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                  Build Better Content
                </p>

                <h2 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">
                  Turn What You Learn Into{" "}
                  <span className="text-red-500">Action</span>
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  Read a guide, try the strategy and use TubeKit's creator
                  tools to put your ideas into practice.
                </p>

                {/* Explore Tools Button */}
                <a
                  href="/"
                  className="
                    mt-7 inline-flex
                    h-10 w-52
                    items-center justify-center
                    rounded-xl
                    bg-red-500
                    px-5
                    text-sm font-bold text-white
                    shadow-lg shadow-red-500/20
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-red-400
                    hover:shadow-xl hover:shadow-red-500/30
                    focus:outline-none
                    focus:ring-2 focus:ring-red-500/50
                    active:scale-[0.98]
                  "
                >
                  Explore TubeKit Tools
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Blog;