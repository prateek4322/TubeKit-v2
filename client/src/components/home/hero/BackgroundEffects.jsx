function BackgroundEffects() {
  return (
    <>
      {/* =====================================================
          HERO BACKGROUND IMAGE
          Desktop: full cinematic background
          Mobile: controlled / subtle background
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="
            absolute inset-0
            bg-[#050816]
            bg-no-repeat
            bg-[length:100%_100%]
            bg-center
            opacity-70

            sm:opacity-80
            lg:opacity-100
          "
          style={{
            backgroundImage: "url('/hero-background.png')",
          }}
        />

        {/* Mobile dark layer over image */}
        <div
          className="
            absolute inset-0
            bg-black/45
            sm:bg-black/30
            lg:bg-black/15
          "
        />
      </div>

      {/* =====================================================
          PREMIUM DARK OVERLAY
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[#030712]/45
          sm:bg-[#030712]/30
          lg:bg-[#030712]/20
        "
      />

      {/* =====================================================
          TOP TO BOTTOM DEPTH
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-b
          from-black/20
          via-transparent
          to-black/90
        "
      />

      {/* =====================================================
          RGYB AURORA GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          overflow-hidden
        "
      >
        {/* RED */}
        <div
          className="
            absolute
            -left-28
            top-20
            h-56
            w-56
            rounded-full
            bg-red-500/8
            blur-[100px]
            animate-[floatGlow_8s_ease-in-out_infinite]

            sm:-left-24
            sm:top-16
            sm:h-72
            sm:w-72
            sm:bg-red-500/10

            lg:-left-20
            lg:top-16
            lg:h-[420px]
            lg:w-[420px]
            lg:bg-red-500/10
            lg:blur-[110px]
          "
        />

        {/* BLUE */}
        <div
          className="
            absolute
            -right-28
            top-16
            h-60
            w-60
            rounded-full
            bg-blue-500/9
            blur-[100px]
            animate-[floatGlowReverse_10s_ease-in-out_infinite]

            sm:-right-24
            sm:h-80
            sm:w-80
            sm:bg-blue-500/10

            lg:-right-10
            lg:top-10
            lg:h-[500px]
            lg:w-[500px]
            lg:bg-blue-500/12
            lg:blur-[120px]
          "
        />

        {/* GREEN */}
        <div
          className="
            absolute
            bottom-[-100px]
            left-[10%]
            h-56
            w-56
            rounded-full
            bg-green-500/6
            blur-[100px]

            sm:bottom-[-120px]
            sm:left-[18%]
            sm:h-72
            sm:w-72

            lg:h-96
            lg:w-96
          "
        />

        {/* YELLOW */}
        <div
          className="
            absolute
            bottom-[-110px]
            right-[10%]
            h-56
            w-56
            rounded-full
            bg-yellow-400/5
            blur-[100px]

            sm:bottom-[-140px]
            sm:right-[18%]
            sm:h-72
            sm:w-72

            lg:h-96
            lg:w-96
          "
        />

        {/* CENTER BLUE */}
        <div
          className="
            absolute
            -top-32
            left-1/2
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-blue-500/5
            blur-[110px]

            sm:-top-40
            sm:h-[420px]
            sm:w-[420px]

            lg:h-[650px]
            lg:w-[650px]
            lg:blur-[160px]
          "
        />
      </div>

      {/* =====================================================
          PREMIUM GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)]
          bg-[size:28px_28px]
          opacity-20

          sm:bg-[size:36px_36px]
          sm:opacity-20

          lg:bg-[size:48px_48px]
          lg:opacity-20
        "
      />

      {/* =====================================================
          SIDE VIGNETTE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-r
          from-black/40
          via-transparent
          to-black/40

          sm:from-black/25
          sm:to-black/25

          lg:from-black/15
          lg:to-black/15
        "
      />

      {/* =====================================================
          TOP LIGHT LINE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-[75%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/15
          to-transparent
        "
      />

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-24
          bg-gradient-to-t
          from-black
          to-transparent

          sm:h-32

          lg:h-44
        "
      />

      {/* =====================================================
          ANIMATION
      ====================================================== */}

      <style>{`
        @keyframes floatGlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(15px, -12px, 0) scale(1.06);
          }
        }

        @keyframes floatGlowReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-15px, 12px, 0) scale(1.05);
          }
        }
      `}</style>
    </>
  );
}

export default BackgroundEffects;