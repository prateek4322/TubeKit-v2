import { GoogleGenAI } from "@google/genai";

export async function generateAI(prompt) {
  console.log("Gemini request started");

  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is missing");
  }

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  console.log("Gemini API key found");
  console.log("Sending prompt to Gemini...");

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: prompt,
  });

  console.log("Gemini response received");

  console.log("Response text:", response.text);

  return response.text;
}