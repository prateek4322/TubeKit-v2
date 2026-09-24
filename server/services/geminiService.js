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

/*
 * Output limits by tool.
 * Smaller outputs = less generation time and API usage.
 */
const OUTPUT_LIMITS = {
  "title-generator": 500,
  "description-generator": 600,
  "tags-generator": 350,
  "hashtag-generator": 300,
  "keyword-generator": 400,
  "thumbnail-generator": 600,
  "hook-generator": 500,
  "outline-generator": 700,
  "shorts-generator": 600,
  "community-post-generator": 700,

  // Script needs significantly more output.
  "script-generator": 2200,

  // Safe fallback
  default: 800,
};

/*
 * Temporary Gemini errors that can be retried once.
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
    message.includes("rate limit") ||
    message.includes("too many requests") ||
    message.includes("temporarily")
  );
}

/*
 * Prevent the same prompt from being generated
 * multiple times simultaneously.
 */
const activeRequests = new Map();

export async function generateAI(prompt, tool = "default") {
  const requestKey = `${tool}:${prompt}`;

  // If exactly the same request is already running,
  // reuse that request instead of creating another Gemini call.
  if (activeRequests.has(requestKey)) {
    console.log("Duplicate request prevented.");
    return activeRequests.get(requestKey);
  }

  const outputTokens =
    OUTPUT_LIMITS[tool] || OUTPUT_LIMITS.default;

  const request = generateWithRetry(
    prompt,
    outputTokens
  );

  activeRequests.set(requestKey, request);

  try {
    return await request;
  } finally {
    activeRequests.delete(requestKey);
  }
}

async function generateWithRetry(prompt, outputTokens) {
  const start = Date.now();

  try {
    console.log("Gemini request started");

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: prompt,

      config: {
        thinkingConfig: {
          thinkingLevel: "minimal",
        },

        maxOutputTokens: outputTokens,
      },
    });

    const result = response.text?.trim();

    console.log(
      `Gemini response received in ${
        Date.now() - start
      }ms`
    );

    if (!result) {
      throw new Error(
        "Gemini returned an empty response."
      );
    }

    return result;

  } catch (error) {
    console.error(
      "Gemini API Error:",
      error?.message || error
    );

    /*
     * Only one retry.
     * No long 1.5s + 3s + 4.5s retry chain.
     */
    if (!isRetryableError(error)) {
      throw error;
    }

    console.log(
      "Gemini temporarily unavailable. Retrying once..."
    );

    try {
      const retryResponse =
        await ai.models.generateContent({
          model: "gemini-3.5-flash-lite",
          contents: prompt,

          config: {
            thinkingConfig: {
              thinkingLevel: "minimal",
            },

            maxOutputTokens: outputTokens,
          },
        });

      const result =
        retryResponse.text?.trim();

      console.log(
        `Gemini retry completed in ${
          Date.now() - start
        }ms`
      );

      if (!result) {
        throw new Error(
          "Gemini returned an empty response."
        );
      }

      return result;

    } catch (retryError) {
      console.error(
        "Gemini retry failed:",
        retryError?.message || retryError
      );

      throw retryError;
    }
  }
}