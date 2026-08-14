import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import WhyTubeKit from "@/components/about/WhyTubeKit";
import ToolHighlights from "@/components/about/ToolHighlights";
import AboutCTA from "@/components/about/AboutCTA";
import SEO from "@/components/common/SEO";

function About() {
  return (
    <>
      <SEO
        title="About TubeKit | Free AI Tools for YouTube Creators"
        description="Learn about TubeKit, our mission, and how we help YouTube creators create better titles, scripts, thumbnails, keywords and content with free AI tools."
        keywords="About TubeKit, TubeKit, YouTube AI tools, AI tools for YouTube creators, YouTube creator tools"
        canonical="/about"
        image="/og-image.png"
        breadcrumbs={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "About TubeKit",
            url: "/about",
          },
        ]}
        organization
      />

      <main className="min-h-screen bg-slate-950 text-white">
        <AboutHero />

        <Mission />

        <WhyTubeKit />

        <ToolHighlights />

        <AboutCTA />
      </main>
    </>
  );
}

export default About;