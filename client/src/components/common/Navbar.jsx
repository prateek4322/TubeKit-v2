import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aiToolsOpen, setAiToolsOpen] = useState(false);
  const [utilityToolsOpen, setUtilityToolsOpen] = useState(false);

  const aiTools = [
    { name: "AI Title Generator", path: "/tools/title-generator" },
    { name: "AI Description Generator", path: "/tools/description-generator" },
    { name: "AI Tags Generator", path: "/tools/tags-generator" },
    { name: "AI Hashtag Generator", path: "/tools/hashtag-generator" },
    { name: "AI Keyword Generator", path: "/tools/keyword-generator" },
    { name: "AI Thumbnail Generator", path: "/tools/thumbnail-generator" },
    { name: "AI Script Writer", path: "/tools/script-generator" },
    { name: "AI Hook Generator", path: "/tools/hook-generator" },
    { name: "AI Outline Generator", path: "/tools/outline-generator" },
    { name: "AI Shorts Generator", path: "/tools/shorts-generator" },
  ];

  const utilityTools = [
    { name: "YouTube Tag Extractor", path: "/tools/tag-extractor" },
    { name: "YouTube Hashtag Extractor", path: "/tools/hashtag-extractor" },
    {
      name: "YouTube Description Extractor",
      path: "/tools/description-extractor",
    },
    {
      name: "YouTube Shadowban Detector",
      path: "/tools/shadowban-detector",
    },
    { name: "YouTube Channel Analyzer", path: "/tools/channel-analyzer" },
    { name: "YouTube SEO Analyzer", path: "/tools/seo-analyzer" },
    { name: "YouTube Comment Reader", path: "/tools/comment-reader" },
    { name: "Video ID Extractor", path: "/tools/video-id-extractor" },
    { name: "Thumbnail Downloader", path: "/tools/thumbnail-downloader" },
    { name: "Channel ID Finder", path: "/tools/channel-id-finder" },
    { name: "Monetization Checker", path: "/tools/monetization-checker" },
    { name: "CPM Calculator", path: "/tools/cpm-calculator" },
    { name: "RPM Calculator", path: "/tools/rpm-calculator" },
    { name: "Money Calculator", path: "/tools/money-calculator" },
  ];

  const closeAllMenus = () => {
    setMenuOpen(false);
    setAiToolsOpen(false);
    setUtilityToolsOpen(false);
  };

  const handleHomeClick = () => {
    closeAllMenus();

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  const desktopLinkClass = ({ isActive }) =>
    `whitespace-nowrap text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "font-semibold text-red-400"
        : "text-slate-300 hover:text-white"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-xl px-4 py-3 text-sm transition-colors ${
      isActive
        ? "bg-slate-800 font-semibold text-red-400"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
      {/* NAVBAR */}
      <div className="mx-auto flex min-h-[72px] w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link
          to="/"
          onClick={handleHomeClick}
          className="group flex shrink-0 items-center"
          aria-label="TubeKit Home"
        >
          <img
            src="/tubekit-logo.png"
            alt="TubeKit"
            className="h-14 w-auto max-w-[170px] object-contain transition-transform duration-200 group-hover:scale-[1.03]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.style.display = "block";
            }}
          />

          {/* Fallback if logo.png is missing */}
          <span className="hidden text-2xl font-extrabold tracking-tight text-white">
            Tube<span className="text-red-500">Kit</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="ml-auto hidden items-center gap-5 md:flex lg:gap-7">
          {/* HOME */}
          <NavLink
            to="/"
            onClick={handleHomeClick}
            className={desktopLinkClass}
          >
            Home
          </NavLink>

          {/* AI TOOLS */}
          <div
            className="relative"
            onMouseEnter={() => {
              setAiToolsOpen(true);
              setUtilityToolsOpen(false);
            }}
            onMouseLeave={() => setAiToolsOpen(false)}
          >
            <button
              type="button"
              onClick={() => {
                setAiToolsOpen((prev) => !prev);
                setUtilityToolsOpen(false);
              }}
              className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              AI Tools

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  aiToolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {aiToolsOpen && (
              <div className="absolute right-0 top-full w-72 pt-3">
                <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl shadow-black/50">
                  <div className="max-h-[70vh] overflow-y-auto">
                    {aiTools.map((tool) => (
                      <NavLink
                        key={tool.path}
                        to={tool.path}
                        onClick={closeAllMenus}
                        className={({ isActive }) =>
                          `block rounded-xl px-4 py-3 text-sm transition-colors ${
                            isActive
                              ? "bg-slate-800 font-semibold text-red-400"
                              : "text-slate-300 hover:bg-slate-800 hover:text-white"
                          }`
                        }
                      >
                        {tool.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* UTILITY TOOLS */}
          <div
            className="relative"
            onMouseEnter={() => {
              setUtilityToolsOpen(true);
              setAiToolsOpen(false);
            }}
            onMouseLeave={() => setUtilityToolsOpen(false)}
          >
            <button
              type="button"
              onClick={() => {
                setUtilityToolsOpen((prev) => !prev);
                setAiToolsOpen(false);
              }}
              className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              Utility Tools

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  utilityToolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {utilityToolsOpen && (
              <div className="absolute right-0 top-full w-80 pt-3">
                <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl shadow-black/50">
                  <div className="max-h-[70vh] overflow-y-auto">
                    {utilityTools.map((tool) => (
                      <NavLink
                        key={tool.path}
                        to={tool.path}
                        onClick={closeAllMenus}
                        className={({ isActive }) =>
                          `block rounded-xl px-4 py-3 text-sm transition-colors ${
                            isActive
                              ? "bg-slate-800 font-semibold text-red-400"
                              : "text-slate-300 hover:bg-slate-800 hover:text-white"
                          }`
                        }
                      >
                        {tool.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* BLOG */}
          <NavLink to="/blog" className={desktopLinkClass}>
            Blog
          </NavLink>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setAiToolsOpen(false);
            setUtilityToolsOpen(false);
          }}
          className="ml-auto rounded-lg p-2 text-white transition-colors hover:bg-slate-800 md:hidden"
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-h-[calc(100vh-72px)] max-w-7xl flex-col gap-2 overflow-y-auto px-4 py-4 sm:px-6">
            {/* HOME */}
            <NavLink
              to="/"
              onClick={handleHomeClick}
              className={mobileLinkClass}
            >
              Home
            </NavLink>

            {/* AI TOOLS */}
            <button
              type="button"
              onClick={() => {
                setAiToolsOpen((prev) => !prev);
                setUtilityToolsOpen(false);
              }}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
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
              <div className="ml-3 space-y-1 border-l border-slate-800 pl-3">
                {aiTools.map((tool) => (
                  <NavLink
                    key={tool.path}
                    to={tool.path}
                    onClick={closeAllMenus}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "bg-slate-800 text-red-400"
                          : "text-slate-400 hover:bg-slate-800 hover:text-white"
                      }`
                    }
                  >
                    {tool.name}
                  </NavLink>
                ))}
              </div>
            )}

            {/* UTILITY TOOLS */}
            <button
              type="button"
              onClick={() => {
                setUtilityToolsOpen((prev) => !prev);
                setAiToolsOpen(false);
              }}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
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
              <div className="ml-3 space-y-1 border-l border-slate-800 pl-3">
                {utilityTools.map((tool) => (
                  <NavLink
                    key={tool.path}
                    to={tool.path}
                    onClick={closeAllMenus}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "bg-slate-800 text-red-400"
                          : "text-slate-400 hover:bg-slate-800 hover:text-white"
                      }`
                    }
                  >
                    {tool.name}
                  </NavLink>
                ))}
              </div>
            )}

            {/* BLOG */}
            <NavLink
              to="/blog"
              onClick={closeAllMenus}
              className={mobileLinkClass}
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