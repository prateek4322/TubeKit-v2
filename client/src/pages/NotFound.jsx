import { Link } from "react-router-dom";
import { Home, Search, ArrowLeft } from "lucide-react";
import SEO from "@/components/seo/SEO";
function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="max-w-2xl text-center">

        <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-blue-600/10">
          <Search size={42} className="text-blue-500" />
        </div>

        <h1 className="text-7xl font-black text-white">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          The page you're looking for doesn't exist or may have been
          moved. You can return to the homepage or explore our free
          YouTube AI tools.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            <Home size={20} className="mr-2" />

            Go Home
          </Link>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-8 py-4 font-semibold text-white transition hover:border-blue-500"
          >
            Browse Tools
          </Link>

        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-8 inline-flex items-center text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={18} className="mr-2" />

          Go Back
        </button>
<SEO
  title="404 | Page Not Found | TubeKit"
  description="The page you are looking for could not be found."
  url="https://tubekit.in/404"
/>
      </div>

    </main>
  );
}

export default NotFound;