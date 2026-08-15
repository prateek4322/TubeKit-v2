const markdownFiles = import.meta.glob("./*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseValue(value) {
  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  if (trimmed === "true") return true;
  if (trimmed === "false") return false;

  if (trimmed !== "" && !Number.isNaN(Number(trimmed))) {
    return Number(trimmed);
  }

  return trimmed;
}

function parseFrontmatter(rawContent) {
  const match = rawContent.match(
    /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/
  );

  if (!match) {
    return {
      data: {},
      content: rawContent,
    };
  }

  const frontmatterText = match[1];
  const content = match[2];

  const data = {};
  let currentArrayKey = null;

  frontmatterText.split("\n").forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) return;

    if (trimmedLine.startsWith("- ") && currentArrayKey) {
      data[currentArrayKey].push(
        parseValue(trimmedLine.slice(2))
      );

      return;
    }

    const separatorIndex = trimmedLine.indexOf(":");

    if (separatorIndex === -1) return;

    const key = trimmedLine
      .slice(0, separatorIndex)
      .trim();

    const value = trimmedLine
      .slice(separatorIndex + 1)
      .trim();

    if (value === "") {
      data[key] = [];
      currentArrayKey = key;
      return;
    }

    currentArrayKey = null;

    data[key] = parseValue(value);
  });

  return {
    data,
    content,
  };
}

const markdownPosts = Object.entries(markdownFiles).map(
  ([filePath, rawContent]) => {
    const { data, content } = parseFrontmatter(rawContent);

    return {
      ...data,
      content,
      filePath,
      source: "markdown",
    };
  }
);

export default markdownPosts;