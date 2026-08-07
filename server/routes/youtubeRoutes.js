import express from "express";

import { monetizationAnalyzer } from "../controllers/youtubeController.js";

const router = express.Router();

router.post(
  "/monetization-analyzer",
  monetizationAnalyzer
);

export default router;