import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aiToolsOpen, setAiToolsOpen] = useState(false);
  const [utilityToolsOpen, setUtilityToolsOpen] = useState(false);

  const aiTools = [
    {
      name: "AI Title Generator",
      path: "/tools/title-generator",
    },
    {
      name: "AI Description Generator",
      path: "/tools/description-generator",
    },
    {
      name: "AI Tags Generator",
      path: "/tools/tags-generator",
    },
    {
      name: "AI Hashtag Generator",
      path: "/tools/hashtag-generator",
    },
    {
      name: "AI Keyword Generator",
      path: "/tools/keyword-generator",
    },
    {
      name: "AI Script Generator",
      path: "/tools/script-generator",
    },
    {
      name: "AI Hook Generator",
      path: "/tools/hook-generator",
    },
    {
      name: "AI Outline Generator",
      path: "/tools/outline-generator",
    },
    {
      name: "AI Thumbnail Generator",
      path: "/tools/thumbnail-generator",
    },
    {
      name: "AI Shorts Generator",
      path: "/tools/shorts-generator",
    },
  ];

  const utilityTools = [
    {
      name: "Video ID Extractor",
      path: "/tools/video-id-extractor",
    },
    {
      name: "Channel ID Finder",
      path: "/tools/channel-id-finder",
    },
    {
      name: "Thumbnail Downloader",
      path: "/tools/thumbnail-downloader",
    },
    {
      name: "RPM Calculator",
      path: "/tools/rpm-calculator",
    },
    {
      name: "CPM Calculator",
      path: "/tools/cpm-calculator",
    },
    {
      name: "YouTube Money Calculator",
      path: "/tools/money-calculator",
    },
    {
      name: "Monetization Checker",
      path: "/tools/monetization-checker",
    },
  ];

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setAiToolsOpen(false);
    setUtilityToolsOpen(false);
  };

  // Home page par click karne par top par scroll
  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    closeMobileMenu();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={handleHomeClick}
          aria-label="TubeKit Home"
          className="flex items-center"
        >
          <img
            src="/tubekit-logo.png"
            alt="TubeKit"
            className="h-18 w-auto object-contain transition-transform duration-200 hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          {/* Home */}
          <NavLink
            to="/"
            onClick={handleHomeClick}
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive
                  ? "font-semibold text-blue-400"
                  : "text-slate-300 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          {/* AI Tools Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAiToolsOpen(true)}
            onMouseLeave={() => setAiToolsOpen(false)}
          >
            <button
              type="button"
              onClick={() =>
                setAiToolsOpen((prev) => !prev)
              }
              className="flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white"
            >
              <span>AI Tools</span>

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  aiToolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {aiToolsOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4">
                <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl shadow-black/40">

                  {aiTools.map((tool) => (
                    <NavLink
                      key={tool.path}
                      to={tool.path}
                      onClick={() => setAiToolsOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-sm transition-colors ${
                          isActive
                            ? "bg-slate-800 font-semibold text-blue-400"
                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                        }`
                      }
                    >
                      {tool.name}
                    </NavLink>
                  ))}

                </div>
              </div>
            )}
          </div>

          {/* Utility Tools Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setUtilityToolsOpen(true)}
            onMouseLeave={() => setUtilityToolsOpen(false)}
          >
            <button
              type="button"
              onClick={() =>
                setUtilityToolsOpen((prev) => !prev)
              }
              className="flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white"
            >
              <span>Utility Tools</span>

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  utilityToolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {utilityToolsOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl shadow-black/40">

                  {utilityTools.map((tool) => (
                    <NavLink
                      key={tool.path}
                      to={tool.path}
                      onClick={() =>
                        setUtilityToolsOpen(false)
                      }
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-sm transition-colors ${
                          isActive
                            ? "bg-slate-800 font-semibold text-blue-400"
                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                        }`
                      }
                    >
                      {tool.name}
                    </NavLink>
                  ))}

                </div>
              </div>
            )}
          </div>

          {/* Blog */}
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive
                  ? "font-semibold text-blue-400"
                  : "text-slate-300 hover:text-white"
              }`
            }
          >
            Blog
          </NavLink>

        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          className="text-white md:hidden"
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 p-5">

            {/* Mobile Home */}
            <NavLink
              to="/"
              onClick={handleHomeClick}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 transition-colors ${
                  isActive
                    ? "bg-slate-800 font-semibold text-blue-400"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            {/* Mobile AI Tools */}
            <button
              type="button"
              onClick={() =>
                setAiToolsOpen((prev) => !prev)
              }
              className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            >
              <span>AI Tools</span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  aiToolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {aiToolsOpen && (
              <div className="ml-4 space-y-1 border-l border-slate-800 pl-3">
                {aiTools.map((tool) => (
                  <NavLink
                    key={tool.path}
                    to={tool.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "bg-slate-800 text-blue-400"
                          : "text-slate-400 hover:bg-slate-800 hover:text-white"
                      }`
                    }
                  >
                    {tool.name}
                  </NavLink>
                ))}
              </div>
            )}

            {/* Mobile Utility Tools */}
            <button
              type="button"
              onClick={() =>
                setUtilityToolsOpen((prev) => !prev)
              }
              className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            >
              <span>Utility Tools</span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  utilityToolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {utilityToolsOpen && (
              <div className="ml-4 space-y-1 border-l border-slate-800 pl-3">
                {utilityTools.map((tool) => (
                  <NavLink
                    key={tool.path}
                    to={tool.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "bg-slate-800 text-blue-400"
                          : "text-slate-400 hover:bg-slate-800 hover:text-white"
                      }`
                    }
                  >
                    {tool.name}
                  </NavLink>
                ))}
              </div>
            )}

            {/* Mobile Blog */}
            <NavLink
              to="/blog"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 transition-colors ${
                  isActive
                    ? "bg-slate-800 font-semibold text-blue-400"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              Blog
            </NavLink>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;