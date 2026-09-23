function BackgroundEffects() {
  return (
    <>
      {/* =========================================
          HERO BACKGROUND IMAGE
      ========================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
      >
        <div
          className="
            absolute inset-0
            bg-[#050816]
            bg-cover
            bg-center
            bg-no-repeat
            scale-[1.02]
          "
          style={{
            backgroundImage: "url('/hero-background.png')",
          }}
        />
      </div>

      {/* =========================================
          PREMIUM DARK OVERLAY
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-[#030712]/35
          sm:bg-[#030712]/30
          lg:bg-[#030712]/25
        "
      />

      {/* =========================================
          TOP TO BOTTOM DEPTH
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-b
          from-[#030712]/20
          via-transparent
          to-[#030712]/85
        "
      />

      {/* =========================================
          RGYB AURORA GLOW
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          overflow-hidden
        "
      >
        {/* RED - left */}
        <div
          className="
            absolute
            -left-32
            top-16
            h-72
            w-72
            rounded-full
            bg-red-500/10
            blur-[110px]
            animate-[floatGlow_8s_ease-in-out_infinite]
            sm:h-80
            sm:w-80
            lg:-left-20
            lg:h-[420px]
            lg:w-[420px]
          "
        />

        {/* BLUE - right */}
        <div
          className="
            absolute
            -right-32
            top-10
            h-80
            w-80
            rounded-full
            bg-blue-500/12
            blur-[120px]
            animate-[floatGlowReverse_10s_ease-in-out_infinite]
            sm:h-96
            sm:w-96
            lg:-right-10
            lg:h-[500px]
            lg:w-[500px]
          "
        />

        {/* GREEN - bottom left */}
        <div
          className="
            absolute
            bottom-[-120px]
            left-[18%]
            h-72
            w-72
            rounded-full
            bg-green-500/8
            blur-[120px]
            sm:h-80
            sm:w-80
            lg:h-96
            lg:w-96
          "
        />

        {/* YELLOW - bottom right */}
        <div
          className="
            absolute
            bottom-[-140px]
            right-[18%]
            h-72
            w-72
            rounded-full
            bg-yellow-400/7
            blur-[120px]
            sm:h-80
            sm:w-80
            lg:h-96
            lg:w-96
          "
        />

        {/* CENTER BLUE LIGHT */}
        <div
          className="
            absolute
            -top-40
            left-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/7
            blur-[130px]
            sm:h-[520px]
            sm:w-[520px]
            lg:h-[650px]
            lg:w-[650px]
            lg:blur-[160px]
          "
        />
      </div>

      {/* =========================================
          PREMIUM GRID
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)]
          bg-[size:32px_32px]
          opacity-30
          sm:bg-[size:40px_40px]
          sm:opacity-25
          lg:bg-[size:48px_48px]
          lg:opacity-20
        "
      />

      {/* =========================================
          SIDE VIGNETTE
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-r
          from-[#030712]/35
          via-transparent
          to-[#030712]/35
          sm:from-[#030712]/20
          sm:to-[#030712]/20
        "
      />

      {/* =========================================
          TOP LIGHT LINE
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-[80%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />

      {/* =========================================
          BOTTOM FADE
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-28
          bg-gradient-to-t
          from-[#030712]
          to-transparent
          sm:h-36
          lg:h-44
        "
      />

      {/* =========================================
          ANIMATION
      ========================================== */}

      <style>{`
        @keyframes floatGlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(20px, -15px, 0) scale(1.08);
          }
        }

        @keyframes floatGlowReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-20px, 15px, 0) scale(1.06);
          }
        }
      `}</style>
    </>
  );
}

export default BackgroundEffects;