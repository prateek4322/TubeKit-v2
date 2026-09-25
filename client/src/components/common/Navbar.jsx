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
    { name: "YouTube Description Extractor", path: "/tools/description-extractor" },
    { name: "YouTube Shadowban Detector", path: "/tools/shadowban-detector" },
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

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setAiToolsOpen(false);
    setUtilityToolsOpen(false);
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMobileMenu();
  };

  const desktopLinkClass = ({ isActive }) =>
    `whitespace-nowrap text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "font-semibold text-blue-400"
        : "text-slate-300 hover:text-white"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `rounded-xl px-4 py-3 transition-colors ${
      isActive
        ? "bg-slate-800 font-semibold text-blue-400"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      {/* Wider horizontal breathing room keeps the navbar from feeling cut off */}
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Logo */}
        <Link
          to="/"
          onClick={handleHomeClick}
          aria-label="TubeKit Home"
          className="flex shrink-0 items-center"
        >
          <img
            src="/tubekit-logo.png"
            alt="TubeKit"
            className="h-16 w-auto object-contain transition-transform duration-200 hover:scale-105 sm:h-18"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-5 pr-5 lg:gap-6 lg:pr-6 md:flex">
          {/* Home */}
          <NavLink to="/" onClick={handleHomeClick} className={desktopLinkClass}>
            Home
          </NavLink>

          {/* AI Tools */}
          <div
            className="relative shrink-0"
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
              <span>AI Tools</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  aiToolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {aiToolsOpen && (
              <div className="absolute right-0 top-full w-72 pt-4">
                <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl shadow-black/40">
                  {aiTools.map((tool) => (
                    <NavLink
                      key={tool.path}
                      to={tool.path}
                      onClick={closeMobileMenu}
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

          {/* Utility Tools */}
          <div
            className="relative shrink-0"
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
              <span>Utility Tools</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  utilityToolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {utilityToolsOpen && (
              <div className="absolute right-0 top-full w-80 pt-4">
                <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl shadow-black/40">
                  {utilityTools.map((tool) => (
                    <NavLink
                      key={tool.path}
                      to={tool.path}
                      onClick={closeMobileMenu}
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
          <NavLink to="/blog" className={desktopLinkClass}>
            Blog
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="shrink-0 text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 sm:px-8">
            {/* Home */}
            <NavLink to="/" onClick={handleHomeClick} className={mobileLinkClass}>
              Home
            </NavLink>

            {/* AI Tools */}
            <button
              type="button"
              onClick={() => {
                setAiToolsOpen((prev) => !prev);
                setUtilityToolsOpen(false);
              }}
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

            {/* Utility Tools */}
            <button
              type="button"
              onClick={() => {
                setUtilityToolsOpen((prev) => !prev);
                setAiToolsOpen(false);
              }}
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

            {/* Blog */}
            <NavLink
              to="/blog"
              onClick={closeMobileMenu}
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