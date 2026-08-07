const prompts = {
  "title-generator": ({ topic, language, tone, count }) => `
Generate ${count} viral and SEO-optimized YouTube titles.

Topic: ${topic}
Language: ${language}
Tone: ${tone}

Rules:
- Make titles highly clickable.
- Keep each title under 70 characters.
- Use curiosity where appropriate.
- Return one title per line.
- No numbering.
- No explanation.
`,

  "description-generator": ({ topic, language, tone }) => `
Write an SEO-optimized YouTube description.

Topic: ${topic}
Language: ${language}
Tone: ${tone}

Requirements:
- Around 150–250 words.
- Include important SEO keywords naturally.
- Add a strong hook in the beginning.
- End with a Call-To-Action (Like, Comment & Subscribe).
- Return only the description.
`,

  "tags-generator": ({ topic }) => `
Generate 30 SEO-optimized YouTube tags.

Topic: ${topic}

Rules:
- Return only tags.
- Separate each tag with commas.
- No numbering.
- No explanation.
`,

  "hashtag-generator": ({ topic }) => `
Generate 20 trending YouTube hashtags.

Topic: ${topic}

Rules:
- Return one hashtag per line.
- Start every line with #.
- No numbering.
- No explanation.
`,

  "keyword-generator": ({ topic }) => `
Generate 30 high-search-volume YouTube SEO keywords.

Topic: ${topic}

Rules:
- Return one keyword per line.
- No numbering.
- No explanation.
`,

  "thumbnail-generator": ({ topic }) => `
Generate 10 highly clickable YouTube thumbnail ideas.

Topic: ${topic}

Requirements:
- Short and attention-grabbing.
- Focus on high CTR.
- Mention colors, expressions, or visual concepts where helpful.
- One idea per line.
- No numbering.
- No explanation.
`,

  "script-generator": ({ topic, language, tone }) => `
You are an expert YouTube script writer.

Create a complete YouTube video script.

Topic: ${topic}

Language: ${language}

Tone: ${tone}

Structure:

1. Powerful Hook (10–20 sec)

2. Introduction

3. Main Content
   - Divide into clear sections
   - Explain in detail

4. Key Takeaways

5. Call To Action

Requirements:
- Around 1200–1800 words.
- Easy to understand.
- Human-like writing.
- Engaging throughout.
- Return only the script.
`,

  "hook-generator": ({ topic }) => `
Generate 20 highly engaging YouTube hooks.

Topic: ${topic}

Rules:
- One hook per line.
- No numbering.
- Maximum 20 words.
- Highly clickable.
`,

 "outline-generator": ({ topic }) => `
Create a complete YouTube video outline.

Topic: ${topic}

Structure:
1. Hook
2. Introduction
3. Main Point 1
4. Main Point 2
5. Main Point 3
6. Summary
7. CTA

Return only the outline.
`,
  "shorts-generator": ({ topic }) => `
Generate 20 viral YouTube Shorts ideas.

Topic: ${topic}

Rules:
- One idea per line.
- No numbering.
- Highly engaging.
`,

  "community-post-generator": ({ topic }) => `
Generate 10 engaging YouTube Community Posts.

Topic: ${topic}

Rules:
- One post per line.
- Encourage comments.
- No numbering.
`,
};

export default prompts;