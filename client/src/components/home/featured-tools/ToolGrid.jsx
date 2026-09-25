import ToolCard from "./ToolCard";

const tools = [
  {
    title: "AI Title Generator",
    description:
      "Create engaging YouTube title ideas around your topic, keywords, and audience.",
    icon: "title",
    color: "red",
    path: "/tools/title-generator",
  },
  {
    title: "AI Description Generator",
    description:
      "Generate structured YouTube descriptions with context, keywords, and clear calls to action.",
    icon: "description",
    color: "green",
    path: "/tools/description-generator",
  },
  {
    title: "AI Tags Generator",
    description:
      "Generate relevant YouTube tag ideas based on your video topic and search context.",
    icon: "tags",
    color: "yellow",
    path: "/tools/tags-generator",
  },
  {
    title: "AI Hashtag Generator",
    description:
      "Create relevant hashtag ideas for YouTube videos, Shorts, and creator campaigns.",
    icon: "hashtag",
    color: "blue",
    path: "/tools/hashtag-generator",
  },
  {
    title: "AI Keyword Generator",
    description:
      "Explore keyword ideas around your topic and the search intent of your target viewers.",
    icon: "keyword",
    color: "red",
    path: "/tools/keyword-generator",
  },
  {
    title: "AI Thumbnail Generator",
    description:
      "Explore creative thumbnail concepts and visual directions before designing your final thumbnail.",
    icon: "thumbnail",
    color: "green",
    path: "/tools/thumbnail-generator",
  },
  {
    title: "AI Script Writer",
    description:
      "Turn a simple video idea into a structured script with hooks, sections, and a clear flow.",
    icon: "script",
    color: "yellow",
    path: "/tools/script-generator",
  },
  {
    title: "AI Hook Generator",
    description:
      "Create focused opening hooks that capture attention and give viewers a reason to continue.",
    icon: "hook",
    color: "blue",
    path: "/tools/hook-generator",
  },
  {
    title: "AI Outline Generator",
    description:
      "Build organized video outlines with sections and talking points for faster content planning.",
    icon: "outline",
    color: "red",
    path: "/tools/outline-generator",
  },
  {
    title: "AI Shorts Generator",
    description:
      "Generate short-form video ideas, structures, and content concepts for YouTube Shorts.",
    icon: "shorts",
    color: "green",
    path: "/tools/shorts-generator",
  },
];

export default function ToolGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-x-5
        gap-y-7
        sm:grid-cols-2
        sm:gap-x-6
        sm:gap-y-8
        lg:grid-cols-3
        lg:gap-x-7
        lg:gap-y-9
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