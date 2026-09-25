import ToolCard from "./ToolCard";
import { featuredTools } from "@/data/featuredTools";

function ToolGrid() {
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
      {featuredTools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}

export default ToolGrid;