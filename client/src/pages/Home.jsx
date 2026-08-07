import SEO from "@/components/seo/SEO";
import Schema from "@/components/seo/Schema";
import Hero from "@/components/home/hero/Hero";
import SearchSection from "@/components/home/search/SearchSection";
import FeaturedTools from "@/components/home/featured-tools/FeaturedTools";


function Home() {
  return (
    <>
      <SEO
        title="TubeKit | Free AI Tools for YouTube Creators"
        description="Free AI-powered YouTube tools including Title Generator, Description Generator, Tags Generator, Script Writer, Money Calculator, Monetization Checker and more."
        keywords="TubeKit, YouTube Tools, AI Tools, Title Generator, Tags Generator, Script Writer, Monetization Checker"
        url="https://tubekit.in/"
      />
<SEO

/>

<Schema />

<Hero />
      

      <SearchSection />

      <FeaturedTools />

      
    </>
  );
}
export default Home;