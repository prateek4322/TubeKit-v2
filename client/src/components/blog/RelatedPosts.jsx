import BlogCard from "./BlogCard";

function RelatedPosts({ posts = [] }) {
  if (!posts.length) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-white/10 pt-10">

      <div className="mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
          Keep Reading
        </span>

        <h2 className="mt-2 text-2xl font-bold text-white">
          Related Articles
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
          />
        ))}
      </div>

    </section>
  );
}

export default RelatedPosts;