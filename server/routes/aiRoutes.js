import express from "express";
import { generate } from "../controllers/aiController.js";
import { submitContact } from "../controllers/contactController.js";

const router = express.Router();

router.post("/generate", generate);

router.post("/contact", submitContact);

export default router;