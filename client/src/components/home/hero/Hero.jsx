import HeroContent from "./HeroContent";
import HeroSearch from "./HeroSearch";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import HeroDashboard from "./HeroDashboard";
import BackgroundEffects from "./BackgroundEffects";
import FloatingBadge from "./FloatingBadge";
import MouseGlow from "./MouseGlow";
import { FadeUp } from "./HeroAnimation";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      <BackgroundEffects />

      <MouseGlow />
<FloatingBadge
  top="12%"
  left="5%"
  text="🔥 Trending"
/>

<FloatingBadge
  top="22%"
  right="6%"
  text="✨ AI Powered"
/>

<FloatingBadge
  bottom="14%"
  right="18%"
  text="⚡ SEO Optimized"
/>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-14 px-6 py-14 sm:py-16 lg:py-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">

        {/* Left */}

        <div className="w-full">

          <FadeUp>
            <HeroContent />
          </FadeUp>

          <FadeUp delay={0.2}>
            <HeroSearch />
          </FadeUp>

          <FadeUp delay={0.3}>
            <HeroButtons />
          </FadeUp>

          <FadeUp delay={0.4}>
            <HeroStats />
          </FadeUp>

        </div>

        {/* Right */}

        <FadeUp delay={0.5}>
          <HeroDashboard />
        </FadeUp>

      </div>

    </section>
  );
}

export default Hero;