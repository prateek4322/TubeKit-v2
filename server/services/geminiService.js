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
  apiKey: apiKey,
});

export async function generateAI(prompt) {
  const start = Date.now();

  console.log("Gemini request started");

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: prompt,
    });

    console.log(
      `Gemini response received in ${Date.now() - start}ms`
    );

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}