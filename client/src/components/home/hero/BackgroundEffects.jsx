function BackgroundEffects() {
return (
<>
{/* ================= BACKGROUND IMAGE ================= */}

<div  
    aria-hidden="true"  
    className="  
      pointer-events-none  
      absolute  
      inset-0  
      hidden  
      overflow-hidden  
      sm:block  
    "  
  >  
    <div  
      className="  
        absolute  
        inset-0  
        bg-cover  
        bg-center  
        bg-no-repeat  
        opacity-70  
        lg:opacity-100  
      "  
      style={{  
        backgroundImage: "url('/hero-background.png')",  
      }}  
    />  

    <div className="absolute inset-0 bg-black/45 lg:bg-black/20" />  
  </div>  

  {/* ================= MOBILE BACKGROUND ================= */}  

  <div  
    aria-hidden="true"  
    className="  
      pointer-events-none  
      absolute  
      inset-0  
      bg-[#030712]  
      sm:hidden  
    "  
  />  

  {/* ================= DARK OVERLAY ================= */}  

  <div  
    aria-hidden="true"  
    className="  
      pointer-events-none  
      absolute  
      inset-0  
      bg-black/35  
      sm:bg-black/25  
    "  
  />  

  {/* ================= RED GLOW ================= */}  

  <div  
    aria-hidden="true"  
    className="  
      pointer-events-none  
      absolute  
      -left-24  
      top-24  
      h-56  
      w-56  
      rounded-full  
      bg-red-600/20  
      blur-[90px]  
      sm:h-72  
      sm:w-72  
      lg:h-96  
      lg:w-96  
    "  
  />  

  {/* ================= BLUE GLOW ================= */}  

  <div  
    aria-hidden="true"  
    className="  
      pointer-events-none  
      absolute  
      -right-24  
      top-20  
      h-56  
      w-56  
      rounded-full  
      bg-blue-600/20  
      blur-[90px]  
      sm:h-72  
      sm:w-72  
      lg:h-96  
      lg:w-96  
    "  
  />  

  {/* ================= GREEN GLOW ================= */}  

  <div  
    aria-hidden="true"  
    className="  
      pointer-events-none  
      absolute  
      -bottom-24  
      left-1/4  
      h-48  
      w-48  
      rounded-full  
      bg-green-500/15  
      blur-[80px]  
      sm:h-64  
      sm:w-64  
      lg:h-80  
      lg:w-80  
    "  
  />  

  {/* ================= YELLOW GLOW ================= */}  

  <div  
    aria-hidden="true"  
    className="  
      pointer-events-none  
      absolute  
      -bottom-20  
      right-1/4  
      h-44  
      w-44  
      rounded-full  
      bg-yellow-400/10  
      blur-[80px]  
      sm:h-60  
      sm:w-60  
      lg:h-72  
      lg:w-72  
    "  
  />  

  {/* ================= GRID ================= */}  

  <div  
    aria-hidden="true"  
    className="  
      pointer-events-none  
      absolute  
      inset-0  
      opacity-20  
      sm:opacity-30  
    "  
    style={{  
      backgroundImage: `  
        linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),  
        linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)  
      `,  
      backgroundSize: "40px 40px",  
    }}  
  />  

  {/* ================= VIGNETTE ================= */}  

  <div  
    aria-hidden="true"  
    className="  
      pointer-events-none  
      absolute  
      inset-0  
      bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.65)_100%)]  
    "  
  />  

  {/* ================= TOP LINE ================= */}  

  <div  
    aria-hidden="true"  
    className="  
      pointer-events-none  
      absolute  
      left-0  
      right-0  
      top-0  
      h-px  
      bg-gradient-to-r  
      from-transparent  
      via-red-500/70  
      to-transparent  
    "  
  />  

  {/* ================= BOTTOM FADE ================= */}  

  <div  
    aria-hidden="true"  
    className="  
      pointer-events-none  
      absolute  
      bottom-0  
      left-0  
      right-0  
      h-32  
      bg-gradient-to-t  
      from-black  
      to-transparent  
    "  
  />  
</>

);
}

export default BackgroundEffects;