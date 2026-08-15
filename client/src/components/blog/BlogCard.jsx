import { Link } from "react-router-dom";

function BlogCard({ post }) {
  const postUrl = `/blog/${post.slug}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-white/20">

      {/* Image */}
      <Link
        to={postUrl}
        className="block cursor-pointer overflow-hidden"
        aria-label={`Read ${post.title}`}
      >
        <div className="aspect-video overflow-hidden bg-slate-900">

          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

        </div>
      </Link>

      {/* Content */}
      <div className="p-6">

        {/* Category */}
        <div className="mb-3 flex items-center gap-3 text-xs">

          <span className="rounded-full bg-blue-500/10 px-3 py-1 font-medium text-blue-400">
            {post.category}
          </span>

          <span className="text-slate-500">
            {post.readTime}
          </span>

        </div>

        {/* Title */}
        <h2 className="text-xl font-bold leading-tight text-white">

          <Link
            to={postUrl}
            className="transition-colors hover:text-blue-400"
          >
            {post.title}
          </Link>

        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
          {post.description}
        </p>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between">

          <span className="text-xs text-slate-500">
            {post.author} · {post.date}
          </span>

          <Link
            to={postUrl}
            className="text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
          >
            Read More →
          </Link>

        </div>

      </div>

    </article>
  );
}

export default BlogCard;