import SEO from "@/components/common/SEO";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogGrid from "@/components/blog/BlogGrid";
import blogPosts from "@/data/blogPosts";

function Blog() {
  return (
    <>
      <SEO
        title="YouTube Growth & SEO Blog | TubeKit"
        description="Learn YouTube SEO, content strategy, keyword research, monetization, thumbnails, Shorts and creator growth with TubeKit guides."
        url="/blog"
      />

      <main className="min-h-screen bg-slate-950">
        {/* Header */}
        <section className="px-6 pb-16 pt-20 sm:pt-24">
          <BlogHeader />
        </section>

        {/* Blog Posts */}
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <BlogGrid posts={blogPosts} />
        </section>
      </main>
    </>
  );
}

export default Blog;