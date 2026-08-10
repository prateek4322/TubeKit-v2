import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function generateAI(prompt) {
  const start = Date.now();

  console.log("Gemini request started");

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: prompt,
  });

  console.log(
    `Gemini response received in ${Date.now() - start}ms`
  );

  return response.text;
}