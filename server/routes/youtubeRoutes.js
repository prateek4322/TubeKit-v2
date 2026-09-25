import express from "express";

import {
  monetizationAnalyzer,
  extractVideoTags,
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

export default router;