import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";

// Scroll
import ScrollToTop from "@/components/common/ScrollToTop";

// Layout
import MainLayout from "@/components/layout/MainLayout";

// Main Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import NotFound from "@/pages/NotFound";

// Blog
import Blog from "@/pages/Blog/Blog";
import BlogPost from "@/pages/Blog/BlogPost";

// Legal
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import Disclaimer from "@/pages/Disclaimer";
import CookiePolicy from "@/pages/CookiePolicy";

// Tools
import VideoIdExtractor from "@/pages/tools/VideoIdExtractor";
import TitleGenerator from "@/pages/tools/TitleGenerator";
import DescriptionGenerator from "@/pages/tools/DescriptionGenerator";
import TagsGenerator from "@/pages/tools/TagsGenerator";
import MoneyCalculator from "@/pages/tools/MoneyCalculator";
import MonetizationChecker from "@/pages/tools/MonetizationChecker";
import HashtagGenerator from "@/pages/tools/HashtagGenerator";
import KeywordGenerator from "@/pages/tools/KeywordGenerator";
import ScriptGenerator from "@/pages/tools/ScriptGenerator";
import ThumbnailGenerator from "@/pages/tools/ThumbnailGenerator";
import HookGenerator from "@/pages/tools/HookGenerator";
import OutlineGenerator from "@/pages/tools/OutlineGenerator";
import ShortsGenerator from "@/pages/tools/ShortsGenerator";
import CPMCalculator from "@/pages/tools/CPMCalculator";
import RPMCalculator from "@/pages/tools/RPMCalculator";
import ThumbnailDownloader from "@/pages/tools/ThumbnailDownloader";
import ChannelIdFinder from "@/pages/tools/ChannelIdFinder";
import TagExtractor from "@/pages/tools/TagExtractor";
import HashtagExtractor from "@/pages/tools/HashtagExtractor";
import DescriptionExtractor from "@/pages/tools/DescriptionExtractor";
import ShadowbanDetector from "@/pages/tools/ShadowbanDetector";
import ChannelAnalyzer from "@/pages/tools/ChannelAnalyzer";
import SEOAnalyzer from "@/pages/tools/SEOAnalyzer";
import CommentReader from "@/pages/tools/CommentReader";

/* =========================================================
   HERO SEARCH QUERY WRAPPERS
   ========================================================= */

function TitleGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return <TitleGenerator query={searchParams.get("q") || ""} />;
}

function DescriptionGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return <DescriptionGenerator query={searchParams.get("q") || ""} />;
}

function TagsGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return <TagsGenerator query={searchParams.get("q") || ""} />;
}

function ScriptGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return <ScriptGenerator query={searchParams.get("q") || ""} />;
}

function ThumbnailGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return <ThumbnailGenerator query={searchParams.get("q") || ""} />;
}

function HashtagGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return <HashtagGenerator query={searchParams.get("q") || ""} />;
}

function KeywordGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return <KeywordGenerator query={searchParams.get("q") || ""} />;
}

function HookGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return <HookGenerator query={searchParams.get("q") || ""} />;
}

function OutlineGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return <OutlineGenerator query={searchParams.get("q") || ""} />;
}

function ShortsGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return <ShortsGenerator query={searchParams.get("q") || ""} />;
}

/* =========================================================
   HERO SEARCH - UTILITY TOOL WRAPPERS
   ========================================================= */

function TagExtractorWithQuery() {
  const [searchParams] = useSearchParams();

  return <TagExtractor query={searchParams.get("q") || ""} />;
}

function HashtagExtractorWithQuery() {
  const [searchParams] = useSearchParams();

  return <HashtagExtractor query={searchParams.get("q") || ""} />;
}

function DescriptionExtractorWithQuery() {
  const [searchParams] = useSearchParams();

  return <DescriptionExtractor query={searchParams.get("q") || ""} />;
}

function ShadowbanDetectorWithQuery() {
  const [searchParams] = useSearchParams();

  return <ShadowbanDetector query={searchParams.get("q") || ""} />;
}

function ChannelAnalyzerWithQuery() {
  const [searchParams] = useSearchParams();

  return <ChannelAnalyzer query={searchParams.get("q") || ""} />;
}

function SEOAnalyzerWithQuery() {
  const [searchParams] = useSearchParams();

  return <SEOAnalyzer query={searchParams.get("q") || ""} />;
}

function CommentReaderWithQuery() {
  const [searchParams] = useSearchParams();

  return <CommentReader query={searchParams.get("q") || ""} />;
}

function VideoIdExtractorWithQuery() {
  const [searchParams] = useSearchParams();

  return <VideoIdExtractor query={searchParams.get("q") || ""} />;
}

function ThumbnailDownloaderWithQuery() {
  const [searchParams] = useSearchParams();

  return <ThumbnailDownloader query={searchParams.get("q") || ""} />;
}

function ChannelIdFinderWithQuery() {
  const [searchParams] = useSearchParams();

  return <ChannelIdFinder query={searchParams.get("q") || ""} />;
}

function MonetizationCheckerWithQuery() {
  const [searchParams] = useSearchParams();

  return <MonetizationChecker query={searchParams.get("q") || ""} />;
}

/* =========================================================
   APP ROUTES
   ========================================================= */

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>

          {/* =========================
              MAIN PAGES
              ========================= */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />

          {/* =========================
              BLOG
              ========================= */}

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* =========================
              LEGAL
              ========================= */}

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          {/* =========================
              HERO UTILITY TOOLS
              All tools available in the
              new YouTube Creator Utilities Hero
              ========================= */}

          <Route
            path="/tools/tag-extractor"
            element={<TagExtractorWithQuery />}
          />

          <Route
            path="/tools/hashtag-extractor"
            element={<HashtagExtractorWithQuery />}
          />

          <Route
            path="/tools/description-extractor"
            element={<DescriptionExtractorWithQuery />}
          />

          <Route
            path="/tools/shadowban-detector"
            element={<ShadowbanDetectorWithQuery />}
          />

          <Route
            path="/tools/channel-analyzer"
            element={<ChannelAnalyzerWithQuery />}
          />

          <Route
            path="/tools/seo-analyzer"
            element={<SEOAnalyzerWithQuery />}
          />

          <Route
            path="/tools/comment-reader"
            element={<CommentReaderWithQuery />}
          />

          <Route
            path="/tools/video-id-extractor"
            element={<VideoIdExtractorWithQuery />}
          />

          <Route
            path="/tools/thumbnail-downloader"
            element={<ThumbnailDownloaderWithQuery />}
          />

          <Route
            path="/tools/channel-id-finder"
            element={<ChannelIdFinderWithQuery />}
          />

          <Route
            path="/tools/monetization-checker"
            element={<MonetizationCheckerWithQuery />}
          />

          {/* =========================
              AI GENERATORS
              HERO SEARCH -> ?q=
              ========================= */}

          <Route
            path="/tools/title-generator"
            element={<TitleGeneratorWithQuery />}
          />

          <Route
            path="/tools/description-generator"
            element={<DescriptionGeneratorWithQuery />}
          />

          <Route
            path="/tools/tags-generator"
            element={<TagsGeneratorWithQuery />}
          />

          <Route
            path="/tools/hashtag-generator"
            element={<HashtagGeneratorWithQuery />}
          />

          <Route
            path="/tools/keyword-generator"
            element={<KeywordGeneratorWithQuery />}
          />

          <Route
            path="/tools/thumbnail-generator"
            element={<ThumbnailGeneratorWithQuery />}
          />

          <Route
            path="/tools/script-generator"
            element={<ScriptGeneratorWithQuery />}
          />

          <Route
            path="/tools/hook-generator"
            element={<HookGeneratorWithQuery />}
          />

          <Route
            path="/tools/outline-generator"
            element={<OutlineGeneratorWithQuery />}
          />

          <Route
            path="/tools/shorts-generator"
            element={<ShortsGeneratorWithQuery />}
          />

          {/* =========================
              CALCULATORS
              ========================= */}

          <Route
            path="/tools/rpm-calculator"
            element={<RPMCalculator />}
          />

          <Route
            path="/tools/cpm-calculator"
            element={<CPMCalculator />}
          />

          <Route
            path="/tools/money-calculator"
            element={<MoneyCalculator />}
          />

          {/* =========================
              404
              ========================= */}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;