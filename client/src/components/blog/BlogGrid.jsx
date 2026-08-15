import BlogCard from "./BlogCard";

function BlogGrid({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] py-20 text-center">

        <p className="text-lg font-semibold text-white">
          No articles found
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Try another keyword or select a different category.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}

export default BlogGrid;