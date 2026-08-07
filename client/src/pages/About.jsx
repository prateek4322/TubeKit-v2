import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import WhyTubeKit from "@/components/about/WhyTubeKit";
import ToolHighlights from "@/components/about/ToolHighlights";
import AboutCTA from "@/components/about/AboutCTA";
import SEO from "@/components/seo/SEO";
function About() {
  return (
    <main className="bg-slate-950 text-white">
      <AboutHero />
      <Mission />
      <WhyTubeKit />
      <ToolHighlights />
      <AboutCTA />
    </main>
  );
}
<SEO
  title="About TubeKit"
  description="Learn about TubeKit and our mission to help YouTube creators."
  url="https://tubekit.in/about"
/>
export default About;