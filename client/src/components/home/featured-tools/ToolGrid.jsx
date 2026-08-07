import ToolCard from "./ToolCard";
import { featuredTools } from "@/data/featuredTools";

function ToolGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {featuredTools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}

export default ToolGrid;