import { Link, useParams } from "react-router-dom";

import SEO from "@/components/common/SEO";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ToolCTA from "@/components/blog/ToolCTA";

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
import ShortsViralGuide from "./posts/ShortsViralGuide";
import SubscribersGuide from "./posts/SubscribersGuide";
import WatchTimeGuide from "./posts/WatchTimeGuide";
import CTRGuide from "./posts/CTRGuide";
import YoutubeSEO2026Guide from "./posts/YoutubeSEO2026Guide";
import FreeAIToolsForYouTubeCreators from "./posts/FreeAIToolsForYouTubeCreators";
import Realme16x5GReview from "./posts/Realme16x5GReview";

/* ============================================================
   JSX BLOG CONTENT
============================================================ */

const blogContent = {
  "how-to-write-youtube-titles-that-get-more-clicks":
    TitleGuide,

  "how-to-write-youtube-description-for-seo":
    DescriptionGuide,

  "best-youtube-seo-tools-for-creators":
    SeoToolsGuide,

  "how-to-find-youtube-keywords":
    KeywordGuide,

  "how-to-get-more-views-on-youtube":
    GrowthGuide,

  "youtube-cpm-vs-rpm":
    CpmRpmGuide,

  "how-youtube-monetization-works":
    MonetizationGuide,

  "how-to-create-better-youtube-thumbnails":
    ThumbnailGuide,

  "youtube-shorts-ideas-for-beginners":
    ShortsGuide,

  "how-to-write-a-youtube-video-script":
    ScriptGuide,

  "how-to-make-youtube-shorts-viral":
    ShortsViralGuide,

  "how-to-get-more-subscribers-on-youtube":
    SubscribersGuide,

  "how-to-increase-youtube-watch-time":
    WatchTimeGuide,

  "how-to-increase-youtube-ctr":
    CTRGuide,

  "youtube-seo-guide-2026":
    YoutubeSEO2026Guide,

  "free-ai-tools-for-youtube-creators":
    FreeAIToolsForYouTubeCreators,

    "realme-16x-5g-review":
  Realme16x5GReview,
};


/* ============================================================
   RELATED POSTS
============================================================ */

function getRelatedPosts(currentPost, limit = 3) {
  if (!currentPost) {
    return [];
  }

  const sameCategory = blogPosts.filter(
    (post) =>
      post.slug !== currentPost.slug &&
      post.category === currentPost.category
  );

  const currentKeywords = new Set(
    (currentPost.keywords || []).map((keyword) =>
      keyword.toLowerCase()
    )
  );

  const keywordRelated = blogPosts
    .filter(
      (post) =>
        post.slug !== currentPost.slug &&
        post.category !== currentPost.category
    )
    .map((post) => {
      const overlap = (post.keywords || []).filter((keyword) =>
        currentKeywords.has(keyword.toLowerCase())
      ).length;

      return {
        ...post,
        overlap,
      };
    })
    .filter((post) => post.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap);

  const combined = [
    ...sameCategory,
    ...keywordRelated,
  ];

  const uniquePosts = [];
  const seen = new Set();

  for (const post of combined) {
    if (!seen.has(post.slug)) {
      seen.add(post.slug);
      uniquePosts.push(post);
    }

    if (uniquePosts.length >= limit) {
      break;
    }
  }

  return uniquePosts;
}


/* ============================================================
   BLOG POST
============================================================ */

function BlogPost() {
  const { slug } = useParams();

  const post = blogPosts.find(
    (item) => item.slug === slug
  );


  /* ==========================================================
     ARTICLE NOT FOUND
  ========================================================== */

  if (!post) {
    return (
      <>
        <SEO
          title="Article Not Found | TubeKit"
          description="The requested TubeKit blog article could not be found."
          canonical={`/blog/${slug}`}
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


  /* ==========================================================
     JSX ARTICLE COMPONENT
  ========================================================== */

  const ContentComponent = blogContent[post.slug];


  /* ==========================================================
     ARTICLE SCHEMA
  ========================================================== */

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: post.title,

    description: post.description,

    image: post.image
      ? `https://www.tubekitapp.in${post.image}`
      : "https://www.tubekitapp.in/og-image.png",

    url: `https://www.tubekitapp.in/blog/${post.slug}`,

    datePublished: post.date,

    dateModified: post.date,

    author: {
      "@type": "Organization",
      name: "TubeKit",
      url: "https://www.tubekitapp.in",
    },

    publisher: {
      "@type": "Organization",
      name: "TubeKit",
      url: "https://www.tubekitapp.in",

      logo: {
        "@type": "ImageObject",
        url: "https://www.tubekitapp.in/og-image.png",
      },
    },
  };


  /* ==========================================================
     RELATED POSTS
  ========================================================== */

  const relatedPosts = getRelatedPosts(post);


  /* ==========================================================
     PAGE
  ========================================================== */

  return (
    <>
      <SEO
        title={`${post.title} | TubeKit`}
        description={post.description}
        keywords={post.keywords?.join(", ")}
        canonical={`/blog/${post.slug}`}
        image={post.image}
        schema={articleSchema}
        type="article"
      />

      <main className="min-h-screen bg-slate-950 px-6 py-16 sm:py-20">

        <article className="mx-auto max-w-4xl">

          {/* ==================================================
              BREADCRUMB
          ================================================== */}

          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
          >

            <Link
              to="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              to="/blog"
              className="transition hover:text-white"
            >
              Blog
            </Link>

            <span>/</span>

            <span className="text-slate-400">
              {post.category}
            </span>

          </nav>


          {/* ==================================================
              CATEGORY
          ================================================== */}

          <div className="mt-8">

            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-400">
              {post.category}
            </span>

          </div>


          {/* ==================================================
              TITLE
          ================================================== */}

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>


          {/* ==================================================
              DESCRIPTION
          ================================================== */}

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {post.description}
          </p>


          {/* ==================================================
              META
          ================================================== */}

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">

            <span>
              By {post.author}
            </span>

            <span>•</span>

            <span>
              {post.date}
            </span>

            <span>•</span>

            <span>
              {post.readTime}
            </span>

          </div>


          {/* ==================================================
              FEATURED IMAGE
          ================================================== */}

          {post.image && (
            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/20">

              <img
                src={post.image}
                alt={post.title}
                className="block h-auto w-full"
              />

            </div>
          )}


          {/* ==================================================
              ARTICLE CONTENT
          ================================================== */}

          <div className="mt-12">

            {ContentComponent ? (
              <ContentComponent />
            ) : (
              <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">

                <p className="text-sm text-yellow-400">
                  This article is currently being prepared.
                </p>

              </div>
            )}

          </div>


          {/* ==================================================
              TOOL CTA
          ================================================== */}

          <ToolCTA />


          {/* ==================================================
              RELATED POSTS
          ================================================== */}

          <RelatedPosts
            posts={relatedPosts}
          />


          {/* ==================================================
              BACK TO BLOG
          ================================================== */}

          <div className="mt-14 border-t border-white/10 pt-8">

            <Link
              to="/blog"
              className="font-semibold text-blue-400 transition hover:text-blue-300"
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