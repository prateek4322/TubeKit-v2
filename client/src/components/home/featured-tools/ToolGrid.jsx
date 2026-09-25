import ToolCard from "./ToolCard";

const tools = [
  {
    title: "AI Title Generator",
    description: "Generate catchy and SEO-friendly YouTube titles in seconds.",
    icon: "✦",
    color: "red",
    path: "/tools/title-generator",
  },
  {
    title: "AI Description Generator",
    description: "Create engaging YouTube descriptions that are optimized for search.",
    icon: "✎",
    color: "green",
    path: "/tools/description-generator",
  },
  {
    title: "AI Tags Generator",
    description: "Find relevant YouTube tags to improve your video's reach.",
    icon: "#",
    color: "yellow",
    path: "/tools/tags-generator",
  },
  {
    title: "AI Script Writer",
    description: "Generate structured video scripts with AI for your next upload.",
    icon: "▤",
    color: "blue",
    path: "/tools/script-generator",
  },
  {
    title: "Thumbnail Ideas",
    description: "Get creative thumbnail concepts designed for better clicks.",
    icon: "▣",
    color: "red",
    path: "/tools/thumbnail-generator",
  },
  {
    title: "Trending Keywords",
    description: "Discover keyword and topic ideas for your YouTube content.",
    icon: "↗",
    color: "green",
    path: "/tools/keyword-generator",
  },
];

export default function ToolGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-5
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {tools.map((tool) => (
        <ToolCard
          key={tool.path}
          title={tool.title}
          description={tool.description}
          icon={tool.icon}
          color={tool.color}
          path={tool.path}
        />
      ))}
    </div>
  );
}