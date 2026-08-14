import { Link } from "react-router-dom";
import {
  Home,
  Search,
  ArrowLeft,
  Sparkles,
  Wrench,
} from "lucide-react";

import SEO from "@/components/common/SEO";

function NotFound() {
  return (
    <>
      <SEO
        title="404 | Page Not Found | TubeKit"
        description="The page you're looking for doesn't exist or may have been moved. Explore TubeKit's free AI-powered YouTube creator tools."
        canonical="/404"
        noIndex={true}
      />

      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">

        {/* Background Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-red-500/5 blur-3xl" />

          <div className="absolute right-[10%] bottom-[15%] h-40 w-40 rounded-full bg-green-500/5 blur-3xl" />
        </div>

        {/* Main Card */}
        <div className="relative w-full max-w-3xl">

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12 lg:p-16">

            {/* Icon */}
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-blue-400/20 bg-blue-500/10 shadow-lg shadow-blue-500/10">
              <Search
                size={42}
                strokeWidth={1.8}
                className="text-blue-400"
              />
            </div>

            {/* 404 */}
            <div className="mt-8">

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
                Error
              </p>

              <h1 className="mt-2 text-7xl font-black tracking-tight sm:text-8xl">
                <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
                  404
                </span>
              </h1>

            </div>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              Page Not Found
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              The page you're looking for doesn't exist or may have
              been moved. You can return to the homepage or explore
              TubeKit's free YouTube creator tools.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 px-7 py-3.5 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <Home size={19} className="mr-2" />
                Go Home
              </Link>

              <Link
                to="/tools"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/[0.07]"
              >
                <Wrench size={19} className="mr-2" />
                Browse Tools
              </Link>

            </div>

            {/* Back */}
            <button
              type="button"
              onClick={() => window.history.back()}
              className="mt-8 inline-flex items-center text-sm font-medium text-slate-500 transition hover:text-white"
            >
              <ArrowLeft size={17} className="mr-2" />
              Go Back
            </button>

            {/* Bottom Brand */}
            <div className="mt-12 border-t border-white/5 pt-7">

              <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <Sparkles
                  size={15}
                  className="text-blue-400"
                />

                <span>
                  Powered by{" "}
                  <span className="font-semibold text-slate-300">
                    TubeKit
                  </span>
                </span>
              </div>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}

export default NotFound;