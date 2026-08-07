import FeaturedTitle from "./FeaturedTitle";
import ToolGrid from "./ToolGrid";

function FeaturedTools() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <FeaturedTitle />

        <ToolGrid />

      </div>
    </section>
  );
}

export default FeaturedTools;