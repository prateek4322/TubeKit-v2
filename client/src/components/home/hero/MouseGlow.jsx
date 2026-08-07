import { useEffect, useState } from "react";

function MouseGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      className="
        pointer-events-none
        absolute
        hidden
        lg:block
        h-[500px]
        w-[500px]
        rounded-full
        bg-blue-500/10
        blur-[140px]
        transition-all
        duration-300
      "
      style={{
        left: position.x - 250,
        top: position.y - 250,
      }}
    />
  );
}

export default MouseGlow;