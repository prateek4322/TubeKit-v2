import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";

import MainLayout from "@/components/layout/MainLayout";

import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog from "@/pages/blog/Blog";
import BlogPost from "@/pages/blog/BlogPost";

import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import Disclaimer from "@/pages/Disclaimer";
import CookiePolicy from "@/pages/CookiePolicy";
import FAQ from "@/pages/FAQ";

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

function TitleGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return (
    <TitleGenerator
      query={searchParams.get("q") || ""}
    />
  );
}

function DescriptionGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return (
    <DescriptionGenerator
      query={searchParams.get("q") || ""}
    />
  );
}

function TagsGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return (
    <TagsGenerator
      query={searchParams.get("q") || ""}
    />
  );
}

function ScriptGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return (
    <ScriptGenerator
      query={searchParams.get("q") || ""}
    />
  );
}

function ThumbnailGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return (
    <ThumbnailGenerator
      query={searchParams.get("q") || ""}
    />
  );
}

function HashtagGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return (
    <HashtagGenerator
      query={searchParams.get("q") || ""}
    />
  );
}

function KeywordGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return (
    <KeywordGenerator
      query={searchParams.get("q") || ""}
    />
  );
}

function HookGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return (
    <HookGenerator
      query={searchParams.get("q") || ""}
    />
  );
}

function OutlineGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return (
    <OutlineGenerator
      query={searchParams.get("q") || ""}
    />
  );
}

function ShortsGeneratorWithQuery() {
  const [searchParams] = useSearchParams();

  return (
    <ShortsGenerator
      query={searchParams.get("q") || ""}
    />
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="/faq" element={<FAQ />} />

          {/* Blog */}
          <Route
            path="/blog/:slug"
            element={<BlogPost />}
          />

          {/* Legal */}
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />

          <Route
            path="/disclaimer"
            element={<Disclaimer />}
          />

          <Route
            path="/cookie-policy"
            element={<CookiePolicy />}
          />

          {/* Tools */}

          <Route
            path="/tools/video-id-extractor"
            element={<VideoIdExtractor />}
          />

          <Route
            path="/tools/channel-id-finder"
            element={<ChannelIdFinder />}
          />

          <Route
            path="/tools/thumbnail-downloader"
            element={<ThumbnailDownloader />}
          />

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
            path="/tools/script-generator"
            element={<ScriptGeneratorWithQuery />}
          />

          <Route
            path="/tools/thumbnail-generator"
            element={<ThumbnailGeneratorWithQuery />}
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

          {/* Calculators */}
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

          <Route
            path="/tools/monetization-checker"
            element={<MonetizationChecker />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;