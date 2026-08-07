import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@/components/layout/MainLayout";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
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
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import Disclaimer from "@/pages/Disclaimer";
import CookiePolicy from "@/pages/CookiePolicy";
import FAQ from "@/pages/FAQ";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
<Route
  path="/tools/video-id-extractor"
  element={<VideoIdExtractor />}
/><Route
  path="*"
  element={<NotFound />}
/>
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms" element={<Terms />} />
<Route path="/disclaimer" element={<Disclaimer />} />
<Route path="/cookie-policy" element={<CookiePolicy />} />
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
            element={<TitleGenerator />}
          />
<Route
  path="/tools/rpm-calculator"
  element={<RPMCalculator />}
/>
          <Route
            path="/tools/description-generator"
            element={<DescriptionGenerator />}
          />
<Route
  path="/tools/thumbnail-generator"
  element={<ThumbnailGenerator />}
/>
<Route
  path="/tools/cpm-calculator"
  element={<CPMCalculator />}
/>
          <Route
            path="/tools/tags-generator"
            element={<TagsGenerator />}
          />
<Route
  path="/tools/script-generator"
  element={<ScriptGenerator />}
/>
          <Route
            path="/tools/money-calculator"
            element={<MoneyCalculator />}
          />
<Route
  path="/tools/hashtag-generator"
  element={<HashtagGenerator />}
/>
<Route
  path="/tools/hook-generator"
  element={<HookGenerator />}
/>

<Route
  path="/tools/outline-generator"
  element={<OutlineGenerator />}
/>

<Route
  path="/tools/shorts-generator"
  element={<ShortsGenerator />}
/>
<Route
  path="/tools/keyword-generator"
  element={<KeywordGenerator />}
/>
          <Route
            path="/tools/monetization-checker"
            element={<MonetizationChecker />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;