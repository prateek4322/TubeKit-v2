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

/**
 * Retry only temporary Gemini errors.
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
    message.includes("too many requests")
  );
}

export async function generateAI(prompt) {
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
      },
    });

    const result = response.text?.trim();

    console.log(
      `Gemini response received in ${
        Date.now() - start
      }ms`
    );

    if (!result) {
      throw new Error("Gemini returned an empty response.");
    }

    return result;

  } catch (error) {
    console.error(
      "Gemini API Error:",
      error?.message || error
    );

    /*
     * One fast retry only.
     * This prevents long waiting when Gemini is temporarily busy.
     */
    if (isRetryableError(error)) {
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
            },
          });

        const retryResult =
          retryResponse.text?.trim();

        console.log(
          `Gemini retry completed in ${
            Date.now() - start
          }ms`
        );

        if (!retryResult) {
          throw new Error(
            "Gemini returned an empty response."
          );
        }

        return retryResult;

      } catch (retryError) {
        console.error(
          "Gemini retry failed:",
          retryError?.message || retryError
        );

        throw retryError;
      }
    }

    throw error;
  }
}