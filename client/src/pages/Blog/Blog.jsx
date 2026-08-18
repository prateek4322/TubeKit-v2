import SEO from "@/components/common/SEO";
import BlogHeader from "@/components/blog/BlogHeader";
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
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Blog",
            path: "/blog",
          },
        ]}
      />

      <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-white/10">

          {/* Background Effects */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >

            {/* RGYB glow */}

            <div className="absolute left-[4%] top-20 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />

            <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-[120px]" />

            <div className="absolute right-1/3 top-10 h-64 w-64 rounded-full bg-green-500/10 blur-[120px]" />

            <div className="absolute right-[4%] top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

            {/* Grid */}

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

          </div>


          {/* Hero Content */}

          <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">

            <div className="mx-auto max-w-4xl text-center">

              {/* Badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 backdrop-blur-xl">

                <span className="h-2 w-2 rounded-full bg-blue-400" />

                TubeKit Creator Blog

              </div>


              {/* Heading */}

              <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">

                Learn. Create.{" "}

                <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
                  Grow.
                </span>

              </h1>


              {/* Description */}

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">

                Practical guides, YouTube SEO strategies, AI workflows
                and creator tips to help you build better content and
                grow your channel.

              </p>


              {/* RGYB Line */}

              <div className="mx-auto mt-9 h-1 max-w-md overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

            </div>


            {/* Stats */}

            <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">

              {/* Stat 1 */}

              <div className="rounded-2xl border border-red-500/15 bg-white/[0.025] p-5 text-center backdrop-blur-xl">

                <p className="text-2xl font-black text-red-400">
                  YouTube
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Growth Strategies
                </p>

              </div>


              {/* Stat 2 */}

              <div className="rounded-2xl border border-yellow-400/15 bg-white/[0.025] p-5 text-center backdrop-blur-xl">

                <p className="text-2xl font-black text-yellow-300">
                  AI
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Creator Workflows
                </p>

              </div>


              {/* Stat 3 */}

              <div className="rounded-2xl border border-green-500/15 bg-white/[0.025] p-5 text-center backdrop-blur-xl">

                <p className="text-2xl font-black text-green-400">
                  SEO
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Optimization Guides
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            BLOG CONTENT
        ====================================================== */}

        <section className="relative px-6 py-16 sm:py-20 lg:py-24">

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

            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                  Latest Articles
                </p>

                <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                  Creator Knowledge Hub
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Explore practical articles covering YouTube growth,
                  SEO, AI content creation and creator tools.
                </p>

              </div>

              <div className="hidden h-1 w-24 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 sm:block" />

            </div>


            {/* Blog Cards Container */}

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6 lg:p-8">

              {/* Top Accent */}

              <div className="absolute left-0 right-0 top-0 h-[2px] rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

              <BlogGrid posts={blogPosts} />

            </div>

          </div>

        </section>


        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <section className="relative px-6 pb-24">

          <div className="mx-auto max-w-5xl">

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12">

              {/* RGYB Glows */}

              <div className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />

              <div className="pointer-events-none absolute left-1/3 top-0 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />

              <div className="pointer-events-none absolute right-1/3 top-0 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />

              <div className="pointer-events-none absolute -right-20 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />


              <div className="relative">

                <div className="mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

                <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                  Build Better Content
                </p>

                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Turn What You Learn Into Action
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  Read a guide, try the strategy and use TubeKit's
                  creator tools to put your ideas into practice.
                </p>

                <a
                  href="/"
                  className="
                    mt-7 inline-flex items-center
                    rounded-xl
                    bg-gradient-to-r
                    from-red-500
                    via-yellow-400
                    via-green-500
                    to-blue-500
                    px-7 py-3.5
                    font-bold text-white
                    shadow-lg shadow-blue-500/10
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
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