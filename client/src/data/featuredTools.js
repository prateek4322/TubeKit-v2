import FeaturedTitle from "./FeaturedTitle";
import ToolGrid from "./ToolGrid";

function FeaturedTools() {
  return (
    <section className="bg-slate-950 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <FeaturedTitle />

        <div className="mt-14 sm:mt-16">
          <ToolGrid />
        </div>
      </div>
    </section>
  );
}

export default FeaturedTools;