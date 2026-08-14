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
          "
          style={{
            backgroundImage: "url('/hero-background.png')",
          }}
        />
      </div>

      {/* =========================================
          DARK OVERLAY
          Keeps text readable
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-[#050816]/55
          sm:bg-[#050816]/50
          lg:bg-[#050816]/45
        "
      />

      {/* =========================================
          RESPONSIVE COLOR OVERLAY
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[#050816]/20
          via-[#050816]/35
          to-[#050816]
        "
      />

      {/* =========================================
          AURORA EFFECTS
      ========================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
      >
        {/* Center */}
        <div
          className="
            absolute
            -top-40
            left-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/10
            blur-[130px]

            sm:h-[600px]
            sm:w-[600px]

            lg:h-[700px]
            lg:w-[700px]
            lg:blur-[160px]
          "
        />

        {/* Left */}
        <div
          className="
            absolute
            bottom-0
            -left-24
            h-72
            w-72
            rounded-full
            bg-purple-500/8
            blur-[110px]

            sm:h-80
            sm:w-80

            lg:-left-10
            lg:h-96
            lg:w-96
            lg:blur-[140px]
          "
        />

        {/* Right */}
        <div
          className="
            absolute
            right-[-100px]
            top-20
            h-80
            w-80
            rounded-full
            bg-blue-500/8
            blur-[120px]

            sm:h-96
            sm:w-96

            lg:right-0
            lg:h-[500px]
            lg:w-[500px]
            lg:blur-[150px]
          "
        />
      </div>

      {/* =========================================
          SUBTLE GRID
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          opacity-40
          bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
          bg-[size:32px_32px]

          sm:bg-[size:40px_40px]

          lg:bg-[size:48px_48px]
        "
      />

      {/* =========================================
          MOBILE DARK SIDES
          Prevents background from overpowering text
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#050816]/25
          via-transparent
          to-[#050816]/25

          sm:from-[#050816]/15
          sm:to-[#050816]/15
        "
      />

      {/* =========================================
          BOTTOM FADE
          Blends Hero into next section
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-[#050816]
          to-transparent

          sm:h-40

          lg:h-48
        "
      />
    </>
  );
}

export default BackgroundEffects;