import { Link, useParams } from "react-router-dom";
import SEO from "@/components/common/SEO";
import blogPosts from "@/data/blogPosts";
import TitleGuide from "./posts/TitleGuide";
import DescriptionGuide from "./posts/DescriptionGuide";
import SeoToolsGuide from "./posts/SeoToolsGuide";
import KeywordGuide from "./posts/KeywordGuide";
import GrowthGuide from "./posts/GrowthGuide";
import CpmRpmGuide from "./posts/CpmRpmGuide";
import MonetizationGuide from "./posts/MonetizationGuide";
import ThumbnailGuide from "./posts/ThumbnailGuide";
import ShortsGuide from "./posts/ShortsGuide";
import ScriptGuide from "./posts/ScriptGuide";
function BlogPost() {
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <>
        <SEO
          title="Blog Post Not Found | TubeKit"
          description="The requested TubeKit blog article could not be found."
          url={`/blog/${slug || ""}`}
        />

        <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
              Article Not Found
            </h1>

            <p className="mt-4 text-slate-400">
              The blog article you are looking for does not exist.
            </p>

            <Link
              to="/blog"
              className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Back to Blog
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} | TubeKit`}
        description={post.description}
        url={`/blog/${post.slug}`}
        image={`${window.location.origin}${post.image}`}
      />

      <main className="min-h-screen bg-slate-950 px-6 py-16 sm:py-20">
        <article className="mx-auto max-w-4xl">
          {/* Back */}
          <Link
            to="/blog"
            className="text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            ← Back to Blog
          </Link>

          {/* Category */}
          <div className="mt-8">
            <span className="inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-slate-400">
            {post.description}
          </p>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Featured Image */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <img
              src={post.image}
              alt={post.title}
               className="block h-auto w-full"
            />
          </div>

          {/* Article content */}
       <div className="mt-12">
  {post.slug === "how-to-write-youtube-titles-that-get-more-clicks" && (
    <TitleGuide />
  )}

  {post.slug === "how-to-write-youtube-description-for-seo" && (
    <DescriptionGuide />
  )}

  {post.slug === "best-youtube-seo-tools-for-creators" && (
    <SeoToolsGuide />
  )}
   {post.slug === "how-to-find-youtube-keywords" && (
    <KeywordGuide />
  )}
  {post.slug === "how-to-get-more-views-on-youtube" && (
  <GrowthGuide />
)}
{post.slug === "youtube-cpm-vs-rpm" && (
  <CpmRpmGuide />
)}
{post.slug === "how-youtube-monetization-works" && (
  <MonetizationGuide />
)}
{post.slug === "how-to-create-better-youtube-thumbnails" && (
  <ThumbnailGuide />
)}
{post.slug === "youtube-shorts-ideas-for-beginners" && (
  <ShortsGuide />
)}
{post.slug === "how-to-write-a-youtube-video-script" && (
  <ScriptGuide />
)}
</div>

          {/* Back to Blog */}
          <div className="mt-14 border-t border-white/10 pt-8">
            <Link
              to="/blog"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              ← Explore More Articles
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

export default BlogPost;