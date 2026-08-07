import { Button } from "@/components/ui/button";

export default function GradientButton({
  children,
  className = "",
  ...props
}) {
  return (
    <Button
      {...props}
      className={`
        w-full
        rounded-xl
        bg-gradient-to-r
        from-red-500
        via-yellow-400
        to-blue-600
        py-6
        text-base
        font-semibold
        text-white
        shadow-lg
        shadow-blue-500/20
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-xl
        hover:shadow-blue-500/40
        active:scale-95
        ${className}
      `}
    >
      {children}
    </Button>
  );
}