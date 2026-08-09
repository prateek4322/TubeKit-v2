import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl font-black text-white">
              TubeKit
            </h2>

            <p className="mt-4 max-w-sm text-slate-400">
              Free AI-powered YouTube tools for creators.
              Generate titles, descriptions, tags, scripts,
              thumbnails and useful YouTube utilities.
            </p>

          </div>

          {/* AI Tools */}

          <div>

            <h3 className="mb-4 font-semibold text-white">
              AI Tools
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li><Link to="/tools/title-generator">Title Generator</Link></li>

              <li><Link to="/tools/description-generator">Description Generator</Link></li>

              <li><Link to="/tools/tags-generator">Tags Generator</Link></li>

              <li><Link to="/tools/hashtag-generator">Hashtag Generator</Link></li>

            </ul>

          </div>

          {/* Utility */}

          <div>

            <h3 className="mb-4 font-semibold text-white">
              Utility Tools
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li><Link to="/tools/money-calculator">Money Calculator</Link></li>

              <li><Link to="/tools/monetization-checker">Monetization Checker</Link></li>

              <li><Link to="/tools/channel-id-finder">Channel ID Finder</Link></li>

              <li><Link to="/tools/thumbnail-downloader">Thumbnail Downloader</Link></li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-4 font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>

            </ul>

          </div>

        </div>

        {/* Legal */}

        <div className="mt-14 flex flex-wrap justify-center gap-6 border-t border-slate-800 pt-8 text-sm text-slate-500">

          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>

          <Link to="/terms" className="hover:text-white">
            Terms & Conditions
          </Link>

          <Link to="/disclaimer" className="hover:text-white">
            Disclaimer
          </Link>

          <Link to="/cookie-policy" className="hover:text-white">
            Cookie Policy
          </Link>

        </div>

        {/* Bottom */}

        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">

          © {new Date().getFullYear()} TubeKit. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}

export default Footer;