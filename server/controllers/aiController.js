import { buildPrompt } from "../services/promptService.js";
import { generateAI } from "../services/geminiService.js";

export const generate = async (req, res) => {
  try {
    const { tool, ...data } = req.body;

    const prompt = buildPrompt(tool, data);

    const result = await generateAI(prompt);

    res.json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};