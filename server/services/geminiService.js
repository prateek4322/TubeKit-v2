import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

console.log(
  "Gemini Service API Key:",
  apiKey ? "FOUND" : "MISSING"
);

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing");
}

const ai = new GoogleGenAI({
  apiKey,
});

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Check whether an error is temporary and worth retrying.
 */
function isRetryableError(error) {
  const status =
    error?.status ||
    error?.code ||
    error?.response?.status;

  const message = String(
    error?.message || error || ""
  ).toLowerCase();

  return (
    status === 503 ||
    status === 429 ||
    status === 500 ||
    status === "UNAVAILABLE" ||
    message.includes("unavailable") ||
    message.includes("high demand") ||
    message.includes("temporarily") ||
    message.includes("rate limit") ||
    message.includes("too many requests")
  );
}

export async function generateAI(prompt) {
  const start = Date.now();

  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(
        `Gemini request started - attempt ${attempt}/${maxAttempts}`
      );

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: prompt,
      });

      console.log(
        `Gemini response received in ${
          Date.now() - start
        }ms`
      );

      return response.text;

    } catch (error) {
      const retryable = isRetryableError(error);

      console.error(
        `Gemini API Error - attempt ${attempt}:`,
        error?.message || error
      );

      // Permanent error or last attempt
      if (!retryable || attempt === maxAttempts) {
        throw error;
      }

      // Exponential backoff:
      // 1st retry -> 1.5 sec
      // 2nd retry -> 3 sec
      const delay = attempt * 1500;

      console.log(
        `Gemini temporarily unavailable. Retrying in ${delay}ms...`
      );

      await sleep(delay);
    }
  }

  throw new Error("Gemini request failed after multiple attempts.");
}