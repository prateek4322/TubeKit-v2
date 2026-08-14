export function titlePrompt(data) {
  return `
Generate ${data.count} viral YouTube titles.

Topic: ${data.topic}

Language: ${data.language}

Tone: ${data.tone}

Return only the titles.
`
;
}
