import { useState } from "react";
import { Link } from "react-router-dom";

import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";

function CPMCalculator() {
  const [views, setViews] = useState("");
  const [earnings, setEarnings] = useState("");
  const [cpm, setCpm] = useState(null);

  const faqs = [
    {
      question: "What does YouTube CPM mean?",
      answer:
        "CPM means Cost Per Mille and represents the cost associated with 1,000 advertising impressions.",
    },
    {
      question: "How is YouTube CPM calculated?",
      answer:
        "A basic CPM calculation divides the advertising amount by the number of impressions and multiplies the result by 1,000.",
    },
    {
      question: "Is CPM the same as YouTube earnings?",
      answer:
        "No. CPM is primarily an advertising metric. A creator's actual revenue can differ because of revenue sharing, monetized playbacks, audience location and other factors.",
    },
    {
      question: "Why does YouTube CPM change?",
      answer:
        "CPM can change because advertiser demand, audience location, content category, seasonality and available advertising inventory can vary.",
    },
    {
      question: "Is a higher CPM always better for a YouTube creator?",
      answer:
        "Not necessarily. CPM alone does not determine total creator revenue. Monetized views, RPM, audience and other factors also affect earnings.",
    },
    {
      question: "Is the TubeKit CPM Calculator free?",
      answer:
        "Yes. TubeKit provides the YouTube CPM Calculator as a free tool for creators.",
    },
  ];

  const calculate = () => {
    if (!views || !earnings) {
      alert("Please enter all fields.");
      return;
    }

    const totalViews = Number(views);
    const totalEarnings = Number(earnings);

    if (
      totalViews <= 0 ||
      totalEarnings < 0 ||
      Number.isNaN(totalViews) ||
      Number.isNaN(totalEarnings)
    ) {
      alert("Please enter valid values.");
      return;
    }

    const result = (totalEarnings / totalViews) * 1000;

    setCpm(result);
  };

  const reset = () => {
    setViews("");
    setEarnings("");
    setCpm(null);
  };

  return (
    <>
      <SEO
        title="YouTube CPM Calculator | Calculate CPM Free | TubeKit"
        description="Calculate YouTube CPM from earnings and views with TubeKit's free YouTube CPM Calculator. Understand CPM, RPM, advertising costs and YouTube revenue metrics."
        keywords="YouTube CPM calculator, CPM calculator YouTube, YouTube CPM, CPM calculator, YouTube advertising CPM, YouTube earnings calculator, CPM vs RPM, YouTube revenue"
        canonical="/tools/cpm-calculator"
        faqs={faqs}
      />

      <ToolLayout>
        <ToolHeader
          title="YouTube CPM Calculator"
          description="Calculate estimated CPM from your total earnings and views."
        />

        {/* Calculator */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-semibold text-white">
                Total Views / Impressions
              </label>

              <input
                type="number"
                min="1"
                value={views}
                onChange={(e) => setViews(e.target.value)}
                placeholder="100000"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-white">
                Total Earnings ($)
              </label>

              <input
                type="number"
                min="0"
                step="0.01"
                value={earnings}
                onChange={(e) => setEarnings(e.target.value)}
                placeholder="500"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={calculate}
              className="rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 px-6 py-3 font-bold text-white transition hover:opacity-90"
            >
              Calculate CPM
            </button>

            <button
              onClick={reset}
              className="rounded-xl bg-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-600"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Result */}
        {cpm !== null && (
          <div className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 text-center">
            <h2 className="text-2xl font-black text-blue-400">
              Estimated CPM
            </h2>

            <p className="mt-4 text-5xl font-black text-white">
              ${cpm.toFixed(2)}
            </p>

            <p className="mt-3 text-sm text-slate-400">
              Estimated cost/revenue equivalent per 1,000 views based
              on the values entered above.
            </p>
          </div>
        )}

        {/* SEO Content */}
        <section className="mt-16 space-y-12">

          {/* Introduction */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">
                YouTube CPM Calculator
              </span>{" "}
              <span className="text-blue-400">
                Free Online Tool
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              TubeKit's YouTube CPM Calculator helps creators estimate
              CPM using total earnings and views or impressions. Enter
              your values above and the calculator applies the CPM
              formula automatically.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              CPM is an important advertising metric, but it should not
              be treated as the same thing as a creator's final YouTube
              earnings. Actual revenue can vary depending on monetized
              views, audience, advertising demand, revenue sharing and
              other factors.
            </p>
          </div>

          {/* How to Use */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">
                How to Use the
              </span>{" "}
              <span className="text-yellow-400">
                YouTube CPM Calculator
              </span>
            </h2>

            <ol className="mt-6 list-decimal space-y-3 pl-6 text-muted-foreground">
              <li>Enter the total views or impressions.</li>
              <li>Enter the corresponding earnings or advertising amount.</li>
              <li>Click the Calculate CPM button.</li>
              <li>Review the estimated CPM.</li>
              <li>Use the result to compare advertising performance.</li>
            </ol>
          </div>

          {/* What is CPM */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-yellow-400">
                What Is YouTube
              </span>{" "}
              <span className="text-red-400">
                CPM?
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              CPM stands for Cost Per Mille, where “mille” means one
              thousand. In advertising, CPM describes the cost associated
              with one thousand ad impressions.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              For creators, CPM can be useful for understanding
              advertising demand around their content. However, CPM
              should not be confused with RPM, which is a different
              YouTube revenue metric.
            </p>
          </div>

          {/* Formula */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-blue-400">
                YouTube CPM
              </span>{" "}
              <span className="text-green-400">
                Formula
              </span>
            </h2>

            <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-6 text-center">
              <p className="text-xl font-black text-white">
                CPM = (Earnings ÷ Impressions) × 1,000
              </p>
            </div>

            <p className="mt-4 leading-8 text-muted-foreground">
              For example, if $500 is associated with 100,000
              impressions, the basic calculation would be:
            </p>

            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-5">
              <code className="text-green-400">
                ($500 ÷ 100,000) × 1,000 = $5 CPM
              </code>
            </div>
          </div>

          {/* CPM vs RPM */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">
                CPM
              </span>{" "}
              <span className="text-yellow-400">
                vs
              </span>{" "}
              <span className="text-blue-400">
                RPM
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              CPM and RPM are often confused, but they represent
              different concepts.
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-800">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="px-5 py-4 font-black text-red-400">
                      Metric
                    </th>

                    <th className="px-5 py-4 font-black text-blue-400">
                      Meaning
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="px-5 py-4 font-bold text-white">
                      CPM
                    </td>

                    <td className="px-5 py-4 text-muted-foreground">
                      Cost associated with 1,000 advertising impressions.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-bold text-white">
                      RPM
                    </td>

                    <td className="px-5 py-4 text-muted-foreground">
                      Estimated creator revenue per 1,000 views.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Factors */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">
                Factors That Affect
              </span>{" "}
              <span className="text-yellow-400">
                YouTube CPM
              </span>
            </h2>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-muted-foreground">
              <li>Audience location and market.</li>
              <li>Advertiser demand.</li>
              <li>Content category.</li>
              <li>Audience demographics.</li>
              <li>Time of year and seasonality.</li>
              <li>Available advertising inventory.</li>
              <li>Competition among advertisers.</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-blue-400">
                YouTube CPM Calculator
              </span>{" "}
              <span className="text-red-400">
                Features
              </span>
            </h2>

            <ul className="mt-6 grid gap-3 text-muted-foreground sm:grid-cols-2">
              <li>✓ Quick CPM calculation</li>
              <li>✓ Simple interface</li>
              <li>✓ Earnings-based calculation</li>
              <li>✓ View/impression-based calculation</li>
              <li>✓ Instant results</li>
              <li>✓ Mobile-friendly</li>
              <li>✓ Free to use</li>
              <li>✓ No complicated setup</li>
            </ul>
          </div>

          {/* Internal Links */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-yellow-400">
                More YouTube
              </span>{" "}
              <span className="text-green-400">
                Creator Tools
              </span>
            </h2>

            <p className="mt-4 text-muted-foreground">
              Use TubeKit's other free tools to analyze revenue and
              improve your YouTube content.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <Link
                to="/tools/rpm-calculator"
                className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5 transition hover:border-red-400"
              >
                <h3 className="font-black text-red-400">
                  YouTube RPM Calculator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Calculate estimated revenue per 1,000 views.
                </p>
              </Link>

              <Link
                to="/tools/money-calculator"
                className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-5 transition hover:border-yellow-400"
              >
                <h3 className="font-black text-yellow-400">
                  YouTube Money Calculator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Estimate potential YouTube earnings from views and RPM.
                </p>
              </Link>

              <Link
                to="/tools/monetization-checker"
                className="rounded-2xl border border-green-500/30 bg-green-500/5 p-5 transition hover:border-green-400"
              >
                <h3 className="font-black text-green-400">
                  Monetization Checker →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Check estimated YouTube monetization eligibility.
                </p>
              </Link>

              <Link
                to="/tools/tags-generator"
                className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-5 transition hover:border-blue-400"
              >
                <h3 className="font-black text-blue-400">
                  YouTube Tags Generator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Generate relevant tags for your YouTube videos.
                </p>
              </Link>

            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">
                Frequently Asked Questions
              </span>{" "}
              <span className="text-blue-400">
                About YouTube CPM
              </span>
            </h2>

            <div className="mt-7 space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <h3 className="text-lg font-black text-white">
                    {faq.question}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </section>
      </ToolLayout>
    </>
  );
}

export default CPMCalculator;