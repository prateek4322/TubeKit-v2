import { useState } from "react";
import { Link } from "react-router-dom";

import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";

function RPMCalculator() {
  const [views, setViews] = useState("");
  const [revenue, setRevenue] = useState("");
  const [rpm, setRpm] = useState(null);

  const calculate = () => {
    if (!views || !revenue || Number(views) <= 0) {
      alert("Please enter valid views and revenue.");
      return;
    }

    const result = (Number(revenue) / Number(views)) * 1000;

    setRpm(result);
  };

  const reset = () => {
    setViews("");
    setRevenue("");
    setRpm(null);
  };

  const faqs = [
    {
      question: "What does YouTube RPM mean?",
      answer:
        "RPM means Revenue Per Mille and represents revenue per 1,000 views.",
    },
    {
      question: "How is YouTube RPM calculated?",
      answer:
        "A basic RPM calculation divides revenue by total views and multiplies the result by 1,000.",
    },
    {
      question: "Why does YouTube RPM vary between channels?",
      answer:
        "RPM can vary because audiences, content categories, geography, monetized views, advertiser demand, and revenue sources differ.",
    },
    {
      question: "Is RPM the same as CPM?",
      answer:
        "No. RPM measures revenue per 1,000 views, while CPM is generally an advertising cost metric based on 1,000 ad impressions.",
    },
    {
      question: "Is the TubeKit RPM Calculator free?",
      answer:
        "Yes. TubeKit provides the YouTube RPM Calculator as a free tool for creators.",
    },
  ];

  return (
    <>
      <SEO
        title="YouTube RPM Calculator | Calculate YouTube Revenue Per 1,000 Views"
        description="Use TubeKit's free YouTube RPM Calculator to calculate estimated revenue per 1,000 views. Enter your YouTube views and revenue to calculate RPM instantly."
        keywords="YouTube RPM calculator, RPM calculator, YouTube revenue calculator, YouTube RPM, calculate YouTube RPM, RPM per 1000 views, YouTube earnings calculator"
        canonical="/tools/rpm-calculator"
        faqs={faqs}
      />

      <ToolLayout>
        <ToolHeader
          title="YouTube RPM Calculator"
          description="Calculate estimated YouTube Revenue Per 1,000 Views instantly."
        />

        {/* Calculator */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium text-white">
                Total YouTube Views
              </label>

              <input
                type="number"
                min="1"
                value={views}
                onChange={(e) => setViews(e.target.value)}
                placeholder="Example: 10000"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-white">
                Revenue ($)
              </label>

              <input
                type="number"
                min="0"
                step="0.01"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                placeholder="Example: 50"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none transition focus:border-yellow-500"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={calculate}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Calculate RPM
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
        {rpm !== null && (
          <div className="mt-10 rounded-3xl border border-green-500/30 bg-green-500/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Estimated YouTube RPM
            </h2>

            <p className="mt-4 text-5xl font-black text-green-400">
              ${rpm.toFixed(2)}
            </p>

            <p className="mt-3 text-sm text-slate-400">
              Estimated revenue per 1,000 views based on the values entered.
            </p>
          </div>
        )}

        {/* SEO CONTENT */}
        <section className="mt-16 space-y-12">

          {/* Introduction */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">YouTube RPM</span>{" "}
              <span className="text-yellow-400">Calculator</span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              TubeKit's free YouTube RPM Calculator helps creators estimate
              how much revenue is generated per 1,000 views. Enter your total
              views and estimated revenue to calculate an RPM value instantly.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              RPM is useful when comparing revenue performance across videos,
              channels, audiences, or different periods. The result from this
              calculator should be treated as an estimate based on the numbers
              you enter.
            </p>
          </div>

          {/* How to use */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">How to Use the</span>{" "}
              <span className="text-blue-400">
                YouTube RPM Calculator
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              Calculate your estimated YouTube RPM in a few simple steps:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-muted-foreground">
              <li>Enter your total YouTube views.</li>
              <li>Enter the revenue generated from those views.</li>
              <li>Click the Calculate RPM button.</li>
              <li>Review the estimated RPM.</li>
              <li>Compare the result with other videos or periods.</li>
            </ol>
          </div>

          {/* What is RPM */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">What Is</span>{" "}
              <span className="text-yellow-400">YouTube RPM?</span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              RPM stands for Revenue Per Mille, where "mille" means one
              thousand. It represents the revenue associated with every 1,000
              views based on the calculation being used.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              RPM can vary between creators and videos because revenue depends
              on several factors, including audience location, content
              category, monetized views, advertiser demand and other eligible
              revenue sources.
            </p>
          </div>

          {/* Formula */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">YouTube RPM</span>{" "}
              <span className="text-blue-400">Formula</span>
            </h2>

            <div className="mt-6 rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6 text-center">
              <code className="text-lg font-bold text-white">
                RPM = (Revenue ÷ Total Views) × 1,000
              </code>
            </div>

            <p className="mt-4 leading-8 text-muted-foreground">
              For example, if a channel earns $50 from 10,000 views:
            </p>

            <div className="mt-4 rounded-xl border border-white/10 bg-slate-900 p-5">
              <p className="text-center font-semibold text-white">
                ($50 ÷ 10,000) × 1,000 = $5 RPM
              </p>
            </div>
          </div>

          {/* Factors */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">Factors That Affect</span>{" "}
              <span className="text-yellow-400">YouTube RPM</span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              YouTube RPM is not necessarily the same for every channel or
              video. Several factors can influence revenue performance.
            </p>

            <ul className="mt-6 grid gap-3 text-muted-foreground sm:grid-cols-2">
              <li>✓ Audience location</li>
              <li>✓ Content category</li>
              <li>✓ Number of monetized views</li>
              <li>✓ Advertiser demand</li>
              <li>✓ Video length</li>
              <li>✓ Available advertising opportunities</li>
              <li>✓ Seasonal advertising demand</li>
              <li>✓ Other eligible revenue sources</li>
            </ul>
          </div>

          {/* RPM vs CPM */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">YouTube RPM</span>{" "}
              <span className="text-blue-400">vs CPM</span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              RPM and CPM are related to YouTube advertising and revenue, but
              they represent different metrics.
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[600px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-5 py-4 font-bold text-white">
                      Metric
                    </th>

                    <th className="px-5 py-4 font-bold text-white">
                      Meaning
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-5 py-4 font-semibold text-green-400">
                      RPM
                    </td>

                    <td className="px-5 py-4 text-muted-foreground">
                      Revenue associated with every 1,000 views.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-semibold text-blue-400">
                      CPM
                    </td>

                    <td className="px-5 py-4 text-muted-foreground">
                      Advertising cost associated with 1,000 ad impressions.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Link
              to="/tools/cpm-calculator"
              className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Calculate YouTube CPM →
            </Link>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">YouTube RPM Calculator</span>{" "}
              <span className="text-yellow-400">Features</span>
            </h2>

            <ul className="mt-6 grid gap-3 text-muted-foreground sm:grid-cols-2">
              <li>✓ Quick RPM calculations</li>
              <li>✓ Revenue-based calculation</li>
              <li>✓ View-based calculation</li>
              <li>✓ Simple calculator interface</li>
              <li>✓ Instant estimated result</li>
              <li>✓ Easy-to-understand formula</li>
              <li>✓ Free to use</li>
              <li>✓ No complicated setup</li>
            </ul>
          </div>

          {/* Example */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">YouTube RPM</span>{" "}
              <span className="text-blue-400">Example</span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              Suppose your video receives 100,000 views and generates $300
              in revenue. Using the basic RPM formula:
            </p>

            <div className="mt-5 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-6 text-center">
              <p className="font-bold text-white">
                ($300 ÷ 100,000) × 1,000 = $3 RPM
              </p>
            </div>

            <p className="mt-4 leading-8 text-muted-foreground">
              This means the calculated revenue rate is $3 for every 1,000
              views based on the values entered.
            </p>
          </div>

          {/* Related tools */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">More YouTube</span>{" "}
              <span className="text-yellow-400">Creator Tools</span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              TubeKit provides additional free tools to help YouTube creators
              with SEO, content creation and monetization research.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <Link
                to="/tools/cpm-calculator"
                className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5 transition hover:border-red-400"
              >
                <h3 className="font-bold text-red-400">
                  YouTube CPM Calculator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Calculate CPM using advertising-related values.
                </p>
              </Link>

              <Link
                to="/tools/monetization-checker"
                className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-5 transition hover:border-yellow-400"
              >
                <h3 className="font-bold text-yellow-400">
                  YouTube Monetization Checker →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Check information related to YouTube monetization.
                </p>
              </Link>

              <Link
                to="/tools/title-generator"
                className="rounded-2xl border border-green-500/30 bg-green-500/5 p-5 transition hover:border-green-400"
              >
                <h3 className="font-bold text-green-400">
                  YouTube Title Generator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Generate relevant title ideas for your videos.
                </p>
              </Link>

              <Link
                to="/tools/tags-generator"
                className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-5 transition hover:border-blue-400"
              >
                <h3 className="font-bold text-blue-400">
                  YouTube Tags Generator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Generate relevant tag ideas for your YouTube content.
                </p>
              </Link>

            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-yellow-400">
                Frequently Asked Questions
              </span>{" "}
              <span className="text-blue-400">About YouTube RPM</span>
            </h2>

            <div className="mt-7 space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <h3 className="text-lg font-bold text-white">
                    {faq.question}
                  </h3>

                  <p className="mt-2 leading-7 text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="rounded-3xl border border-green-500/30 bg-green-500/5 p-7">
            <h2 className="text-2xl font-black text-white">
              Calculate Your YouTube RPM Now
            </h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              Enter your views and revenue above to get an estimated RPM.
              You can also compare your result with TubeKit's CPM Calculator.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-500"
              >
                Calculate RPM ↑
              </button>

              <Link
                to="/tools/cpm-calculator"
                className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Try CPM Calculator →
              </Link>
            </div>
          </div>
        </section>
      </ToolLayout>
    </>
  );
}

export default RPMCalculator;