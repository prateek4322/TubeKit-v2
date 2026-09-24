import { buildPrompt } from "../services/promptService.js";
import { generateAI } from "../services/geminiService.js";

export const generate = async (req, res) => {
  try {
    const { tool, ...data } = req.body;

    // Validate tool
    if (!tool) {
      return res.status(400).json({
        success: false,
        message: "Please select a valid AI tool.",
      });
    }

    // Build optimized AI prompt
    const prompt = buildPrompt(tool, data);

    // Generate AI response
    // Pass tool so Gemini service can use
    // tool-specific output limits.
    const result = await generateAI(prompt, tool);

    return res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.error("Generate Controller Error:", error);

    const status =
      error?.status ||
      error?.code ||
      error?.response?.status;

    const errorMessage = String(
      error?.message || error || ""
    ).toLowerCase();

    // Gemini temporarily unavailable
    if (
      status === 503 ||
      status === "UNAVAILABLE" ||
      errorMessage.includes("high demand") ||
      errorMessage.includes("temporarily unavailable") ||
      errorMessage.includes("unavailable")
    ) {
      return res.status(503).json({
        success: false,
        errorType: "AI_TEMPORARILY_UNAVAILABLE",
        message:
          "Our AI engine is temporarily busy. Please try again in a few seconds.",
      });
    }

    // Rate limit
    if (
      status === 429 ||
      errorMessage.includes("rate limit") ||
      errorMessage.includes("too many requests")
    ) {
      return res.status(429).json({
        success: false,
        errorType: "AI_RATE_LIMIT",
        message:
          "AI is receiving too many requests right now. Please try again shortly.",
      });
    }

    // Authentication / API key issue
    if (
      status === 401 ||
      status === 403 ||
      errorMessage.includes("api key")
    ) {
      return res.status(500).json({
        success: false,
        errorType: "AI_CONFIGURATION_ERROR",
        message:
          "The AI service is temporarily unavailable. Please try again later.",
      });
    }

    // Generic server error
    return res.status(500).json({
      success: false,
      errorType: "GENERATION_FAILED",
      message:
        "We couldn't generate your results right now. Please try again.",
    });
  }
};