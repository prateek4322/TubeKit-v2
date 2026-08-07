
import Schema from "@/components/seo/Schema";
import Hero from "@/components/home/hero/Hero";
import SearchSection from "@/components/home/search/SearchSection";
import FeaturedTools from "@/components/home/featured-tools/FeaturedTools";
import SEO from "@/components/common/SEO";

function Home() {
  return (
    <>
      <SEO
        title="TubeKit - Free AI YouTube Tools for Creators"
        description="Free AI YouTube tools to generate titles, descriptions, tags, scripts, thumbnails and more."
        url="/"
      /> 
<Schema />

<Hero />
      

      <SearchSection />

      <FeaturedTools />

      
    </>
  );
}
export default Home;