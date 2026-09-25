import express from "express";

import {
  monetizationAnalyzer,
  extractVideoTags,
  extractVideoHashtags,
  extractVideoDescription,
  detectShadowban,
  analyzeYouTubeChannel,
  analyzeYouTubeSEO,
  readYouTubeComments,
} from "../controllers/youtubeController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Monetization Analyzer
|--------------------------------------------------------------------------
*/

router.post(
  "/monetization-analyzer",
  monetizationAnalyzer
);

/*
|--------------------------------------------------------------------------
| YouTube Tag Extractor
|--------------------------------------------------------------------------
*/

router.get(
  "/tags",
  extractVideoTags
);

/*
|--------------------------------------------------------------------------
| YouTube Hashtag Extractor
|--------------------------------------------------------------------------
*/

router.get(
  "/hashtags",
  extractVideoHashtags
);

/*
|--------------------------------------------------------------------------
| YouTube Description Extractor
|--------------------------------------------------------------------------
*/

router.get(
  "/description",
  extractVideoDescription
);

/*
|--------------------------------------------------------------------------
| YouTube Shadowban Detector
|--------------------------------------------------------------------------
*/

router.get(
  "/shadowban",
  detectShadowban
);

/*
|--------------------------------------------------------------------------
| YouTube Channel Analyzer
|--------------------------------------------------------------------------
*/

router.get(
  "/channel-analyzer",
  analyzeYouTubeChannel
);

/*
|--------------------------------------------------------------------------
| YouTube SEO Analyzer
|--------------------------------------------------------------------------
*/

router.get(
  "/seo-analyzer",
  analyzeYouTubeSEO
);

/*
|--------------------------------------------------------------------------
| YouTube Comment Reader
|--------------------------------------------------------------------------
*/

router.get(
  "/comments",
  readYouTubeComments
);

export default router;