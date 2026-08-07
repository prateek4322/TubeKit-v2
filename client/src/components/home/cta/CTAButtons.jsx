import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function CTAButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <Button
        asChild
        size="lg"className="rounded-xl bg-blue-600 px-8 py-6 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
      >
        <Link to="/signup">
          Start Creating Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>

      <Button
  asChild
  size="lg"
  className="rounded-xl border border-blue-500 bg-transparent px-8 py-6 text-lg font-semibold text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-xl hover:shadow-blue-500/30"
>
        <Link to="/">
  <PlayCircle className="mr-2 h-5 w-5" />
  Watch Demo
</Link>
      </Button>
    </div>
  );
}

export default CTAButtons;