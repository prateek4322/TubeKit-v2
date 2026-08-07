import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-center">

      <h2 className="text-4xl font-black">
        Ready To Create Better
        <br />
        YouTube Content?
      </h2>

      <p className="mt-6 text-slate-400">
        Start using TubeKit today with free AI-powered tools.
      </p>

      <Link
        to="/tools/title-generator"
        className="mt-10 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
      >
        Start Creating
      </Link>

    </section>
  );
}

export default AboutCTA;