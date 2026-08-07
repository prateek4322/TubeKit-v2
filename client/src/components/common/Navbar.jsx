import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/search/SearchBar";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

const navItems = [
  { label: "Home", href: "/" },
  { label: "AI Tools", href: "/ai-tools" },
  { label: "Utility Tools", href: "/utility-tools" },
];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
      
        <Link
          to="/"
          className="text-3xl font-black tracking-tight"
        >
          <span className="text-red-500">Tube</span>
          <span className="text-blue-500">Kit</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-all duration-300 ${
                  isActive
                    ? "font-semibold text-blue-400"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
<div className="hidden lg:flex w-full max-w-md">
  <SearchBar />
</div>
        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">

          

          

        </div>

        {/* Mobile Toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="flex flex-col gap-4 p-6">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 transition hover:text-white"
              >
                {item.name}
              </NavLink>
            ))}

            
          

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;