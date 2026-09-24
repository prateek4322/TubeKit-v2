const prompts = {
  "title-generator": ({ topic, language = "English", tone = "Professional", count = 10 }) => `
Generate ${count} YouTube titles for:

Topic: ${topic}
Language: ${language}
Tone: ${tone}

Rules:
- SEO-friendly and highly clickable.
- Under 70 characters each.
- Use curiosity when natural.
- One title per line.
- No numbering.
- No explanations.
`,

  "description-generator": ({ topic, language = "English", tone = "Professional" }) => `
Write a YouTube description for:

Topic: ${topic}
Language: ${language}
Tone: ${tone}

Rules:
- 150-200 words.
- Strong hook in the first 2 sentences.
- Naturally include relevant SEO keywords.
- End with a Like, Comment and Subscribe CTA.
- Return only the description.
`,

  "tags-generator": ({ topic }) => `
Generate 30 relevant YouTube SEO tags for:

Topic: ${topic}

Return only comma-separated tags.
No numbering.
No explanation.
`,

  "hashtag-generator": ({ topic }) => `
Generate 20 relevant YouTube hashtags for:

Topic: ${topic}

Rules:
- One hashtag per line.
- Every line starts with #.
- No numbering.
- No explanation.
`,

  "keyword-generator": ({ topic }) => `
Generate 30 relevant YouTube SEO keywords for:

Topic: ${topic}

Rules:
- Prioritize relevant search intent.
- One keyword per line.
- No numbering.
- No explanation.
`,

  "thumbnail-generator": ({ topic }) => `
Generate 10 YouTube thumbnail concepts for:

Topic: ${topic}

Rules:
- Short and highly clickable.
- Focus on CTR.
- Mention visual elements, expressions, text or colors when useful.
- One idea per line.
- No numbering.
- No explanation.
`,

  "script-generator": ({ topic, language = "English", tone = "Professional" }) => `
Create a YouTube video script.

Topic: ${topic}
Language: ${language}
Tone: ${tone}

Structure:
Hook
Introduction
Main Content
Key Takeaways
CTA

Rules:
- Approximately 1000-1400 words.
- Clear sections.
- Natural and engaging.
- Easy to understand.
- Avoid unnecessary repetition.
- Return only the script.
`,

  "hook-generator": ({ topic }) => `
Generate 20 engaging YouTube hooks for:

Topic: ${topic}

Rules:
- One hook per line.
- Maximum 20 words each.
- Strong curiosity and attention.
- No numbering.
- No explanation.
`,

  "outline-generator": ({ topic }) => `
Create a YouTube video outline.

Topic: ${topic}

Structure:
Hook
Introduction
Main Point 1
Main Point 2
Main Point 3
Summary
CTA

Return only the outline.
`,

  "shorts-generator": ({ topic }) => `
Generate 20 YouTube Shorts ideas for:

Topic: ${topic}

Rules:
- Short and engaging.
- One idea per line.
- No numbering.
- No explanation.
`,

  "community-post-generator": ({ topic }) => `
Generate 10 engaging YouTube Community Posts for:

Topic: ${topic}

Rules:
- Encourage audience interaction.
- One post per line.
- No numbering.
- No explanation.
`,
};

export default prompts;