import prompts from "../utils/prompts.js";

export function buildPrompt(tool, data) {
  const builder = prompts[tool];

  if (!builder) {
    throw new Error("Invalid tool");
  }

  return builder(data);
}