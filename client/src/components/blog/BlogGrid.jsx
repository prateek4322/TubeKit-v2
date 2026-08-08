import BlogCard from "./BlogCard";

function BlogGrid({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-slate-400">
          No blog posts available.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogGrid;