import { useState } from "react";
import { Link } from "react-router-dom";

import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";

function MoneyCalculator() {
  const [views, setViews] = useState("");
  const [rpm, setRpm] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState(null);

  const calculateRevenue = () => {
    if (!views || !rpm) {
      alert("Please enter Views and RPM.");
      return;
    }

    const monthlyRevenue =
      (Number(views) / 1000) * Number(rpm);

    setResult({
      daily: monthlyRevenue / 30,
      weekly: monthlyRevenue / 4.345,
      monthly: monthlyRevenue,
      yearly: monthlyRevenue * 12,
    });
  };

  const resetCalculator = () => {
    setViews("");
    setRpm("");
    setCurrency("USD");
    setResult(null);
  };

  const symbol = currency === "USD" ? "$" : "₹";

  const faqs = [
    {
      question: "How much money can YouTube videos make?",
      answer:
        "There is no fixed amount. YouTube earnings can vary depending on views, monetized playbacks, audience location, content category, advertiser demand, RPM and other factors.",
    },
    {
      question: "How much does YouTube pay for 1,000 views?",
      answer:
        "There is no universal fixed payment for 1,000 views. The amount can vary significantly depending on factors such as audience, content, monetization and RPM.",
    },
    {
      question: "Does every YouTube view generate money?",
      answer:
        "No. Not every YouTube view results in an ad impression or monetized playback.",
    },
    {
      question: "Is the YouTube Money Calculator accurate?",
      answer:
        "The calculator provides an estimate based on the views and RPM entered by the user. Actual YouTube revenue can be different because monetization and advertising conditions vary.",
    },
    {
      question: "What is the difference between CPM and RPM?",
      answer:
        "CPM generally refers to advertising cost associated with ad impressions, while RPM represents revenue per 1,000 views from the creator's perspective.",
    },
    {
      question: "Is the TubeKit YouTube Money Calculator free?",
      answer:
        "Yes. TubeKit provides the YouTube Money Calculator as a free tool for creators.",
    },
  ];

  return (
    <>
      <SEO
        title="YouTube Money Calculator | Estimate YouTube Earnings Free"
        description="Use TubeKit's free YouTube Money Calculator to estimate YouTube earnings from views and RPM. Calculate daily, weekly, monthly and yearly revenue estimates."
        keywords="YouTube money calculator, YouTube earnings calculator, YouTube revenue calculator, how much does YouTube pay, YouTube income calculator, YouTube RPM calculator, YouTube money calculator free, YouTube earnings per 1000 views"
        canonical="/tools/money-calculator"
        faqs={faqs}
      />

      <ToolLayout>
        <ToolHeader
          title="YouTube Money Calculator"
          description="Estimate your potential YouTube earnings using views and RPM."
        />

        {/* Calculator */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <div className="grid gap-6 md:grid-cols-3">

            <div>
              <label className="mb-2 block font-medium text-white">
                Estimated Monthly Views
              </label>

              <input
                type="number"
                min="0"
                value={views}
                onChange={(e) => setViews(e.target.value)}
                placeholder="100000"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-white">
                RPM
              </label>

              <input
                type="number"
                min="0"
                step="0.01"
                value={rpm}
                onChange={(e) => setRpm(e.target.value)}
                placeholder="3.50"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none transition focus:border-green-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-white">
                Currency
              </label>

              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none"
              >
                <option value="USD">USD ($)</option>
                <option value="INR">INR (₹)</option>
              </select>
            </div>

          </div>

          <div className="mt-8 flex flex-wrap gap-4">

            <button
              onClick={calculateRevenue}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Calculate Earnings
            </button>

            <button
              onClick={resetCalculator}
              className="rounded-xl bg-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-600"
            >
              Reset
            </button>

          </div>

        </div>

        {/* Result */}
        {result && (
          <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="mb-2 text-2xl font-bold text-white">
              Estimated YouTube Earnings
            </h2>

            <p className="mb-6 text-sm text-slate-400">
              These figures are estimates based on the views and RPM you
              entered.
            </p>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              <ResultCard
                title="Daily"
                value={`${symbol}${result.daily.toFixed(2)}`}
                color="red"
              />

              <ResultCard
                title="Weekly"
                value={`${symbol}${result.weekly.toFixed(2)}`}
                color="yellow"
              />

              <ResultCard
                title="Monthly"
                value={`${symbol}${result.monthly.toFixed(2)}`}
                color="green"
              />

              <ResultCard
                title="Yearly"
                value={`${symbol}${result.yearly.toFixed(2)}`}
                color="blue"
              />

            </div>

          </div>
        )}

        {/* SEO CONTENT */}
        <section className="mt-16 space-y-12">

          {/* Introduction */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">YouTube Money</span>{" "}
              <span className="text-yellow-400">
                Calculator
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              Wondering how much money a YouTube channel can make from its
              views? TubeKit's YouTube Money Calculator helps creators
              estimate potential earnings using monthly views and RPM.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              Enter your estimated monthly views, add your RPM and select
              your preferred currency. The calculator provides estimated
              daily, weekly, monthly and yearly revenue figures.
            </p>
          </div>

          {/* How to use */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">How to Use the</span>{" "}
              <span className="text-blue-400">
                YouTube Money Calculator
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              You can estimate your potential YouTube revenue in a few
              simple steps:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-muted-foreground">
              <li>Enter your estimated monthly YouTube views.</li>
              <li>Enter your estimated RPM.</li>
              <li>Select USD or INR.</li>
              <li>Click the Calculate Earnings button.</li>
              <li>Review the daily, weekly, monthly and yearly estimates.</li>
            </ol>
          </div>

          {/* Formula */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">YouTube Earnings</span>{" "}
              <span className="text-yellow-400">
                Formula
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              A basic RPM-based earnings estimate can be calculated using:
            </p>

            <div className="mt-6 rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6 text-center">
              <code className="text-lg font-bold text-blue-400">
                Estimated Revenue = (Views ÷ 1,000) × RPM
              </code>
            </div>

            <p className="mt-5 leading-8 text-muted-foreground">
              For example, if a channel receives 100,000 monthly views and
              has an RPM of $3, the estimated monthly revenue would be
              approximately $300.
            </p>
          </div>

          {/* RPM */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">
                What Is YouTube RPM?
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              RPM stands for Revenue Per Mille and is commonly used to
              understand estimated creator revenue per 1,000 views.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              RPM can vary between channels and videos. Audience location,
              content category, monetized views, advertiser demand and
              other revenue factors can influence the amount.
            </p>

            <Link
              to="/tools/rpm-calculator"
              className="mt-5 inline-flex font-bold text-blue-400 transition hover:text-blue-300"
            >
              Calculate Your YouTube RPM →
            </Link>
          </div>

          {/* Earnings factors */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-blue-400">Factors That Affect</span>{" "}
              <span className="text-red-400">
                YouTube Earnings
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              YouTube earnings are not determined by views alone. Several
              factors can affect the actual amount a creator earns.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-muted-foreground">
              <li>Number of total and monetized views.</li>
              <li>Audience location.</li>
              <li>Content category and topic.</li>
              <li>Advertiser demand.</li>
              <li>Video format and available advertising opportunities.</li>
              <li>Seasonal changes in advertising demand.</li>
              <li>Creator's RPM and eligible revenue sources.</li>
            </ul>
          </div>

          {/* CPM vs RPM */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-yellow-400">CPM vs</span>{" "}
              <span className="text-green-400">RPM</span>
            </h2>

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
                      Revenue per 1,000 views from the creator's perspective.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-semibold text-yellow-400">
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
              className="mt-5 inline-flex font-bold text-red-400 transition hover:text-red-300"
            >
              Calculate YouTube CPM →
            </Link>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">YouTube Money Calculator</span>{" "}
              <span className="text-yellow-400">
                Features
              </span>
            </h2>

            <ul className="mt-6 grid gap-3 text-muted-foreground sm:grid-cols-2">
              <li>✓ YouTube earnings estimation</li>
              <li>✓ Monthly views based calculation</li>
              <li>✓ RPM based revenue estimate</li>
              <li>✓ Daily earnings estimate</li>
              <li>✓ Weekly earnings estimate</li>
              <li>✓ Monthly earnings estimate</li>
              <li>✓ Yearly earnings estimate</li>
              <li>✓ USD and INR support</li>
              <li>✓ Simple calculator interface</li>
              <li>✓ Free to use</li>
            </ul>
          </div>

          {/* Internal Links */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">
                More YouTube Creator
              </span>{" "}
              <span className="text-blue-400">
                Tools
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              TubeKit provides additional free tools to help creators with
              YouTube SEO, content creation and revenue analysis.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <Link
                to="/tools/rpm-calculator"
                className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5 transition hover:border-red-400"
              >
                <h3 className="font-bold text-red-400">
                  YouTube RPM Calculator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Calculate estimated revenue per 1,000 views.
                </p>
              </Link>

              <Link
                to="/tools/cpm-calculator"
                className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-5 transition hover:border-yellow-400"
              >
                <h3 className="font-bold text-yellow-400">
                  YouTube CPM Calculator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Calculate advertising-related CPM estimates.
                </p>
              </Link>

              <Link
                to="/tools/monetization-checker"
                className="rounded-2xl border border-green-500/30 bg-green-500/5 p-5 transition hover:border-green-400"
              >
                <h3 className="font-bold text-green-400">
                  YouTube Monetization Checker →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Check available monetization information for a channel.
                </p>
              </Link>

              <Link
                to="/tools/title-generator"
                className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-5 transition hover:border-blue-400"
              >
                <h3 className="font-bold text-blue-400">
                  AI YouTube Title Generator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Generate relevant YouTube title ideas with AI.
                </p>
              </Link>

              <Link
                to="/tools/tags-generator"
                className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5 transition hover:border-red-400"
              >
                <h3 className="font-bold text-red-400">
                  YouTube Tags Generator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Generate relevant tags for your YouTube videos.
                </p>
              </Link>

              <Link
                to="/tools/thumbnail-generator"
                className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-5 transition hover:border-yellow-400"
              >
                <h3 className="font-bold text-yellow-400">
                  AI Thumbnail Generator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Generate thumbnail concepts for your YouTube content.
                </p>
              </Link>

            </div>
          </div>

          {/* Disclaimer */}
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">
            <h2 className="text-xl font-bold text-yellow-400">
              YouTube Earnings Estimate Disclaimer
            </h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              The results generated by this calculator are estimates only.
              Actual YouTube earnings can vary based on monetization status,
              audience, advertising demand, RPM, monetized playbacks and
              other factors. The calculator should not be treated as a
              guarantee of future income.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">
                Frequently Asked Questions
              </span>{" "}
              <span className="text-blue-400">
                About YouTube Earnings
              </span>
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
          <div className="rounded-3xl border border-blue-500/30 bg-blue-500/5 p-7">

            <h2 className="text-2xl font-black text-white">
              Estimate Your YouTube Earnings Now
            </h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              Enter your monthly views and RPM above to get an estimated
              YouTube revenue breakdown.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Calculate Earnings ↑
              </button>

              <Link
                to="/tools/rpm-calculator"
                className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-500"
              >
                Calculate RPM →
              </Link>

            </div>

          </div>

        </section>
      </ToolLayout>
    </>
  );
}

function ResultCard({ title, value, color }) {
  const colors = {
    red: "border-red-500/30 bg-red-500/5 text-red-400",
    yellow: "border-yellow-500/30 bg-yellow-500/5 text-yellow-400",
    green: "border-green-500/30 bg-green-500/5 text-green-400",
    blue: "border-blue-500/30 bg-blue-500/5 text-blue-400",
  };

  return (
    <div
      className={`rounded-2xl border p-5 text-center ${
        colors[color] || colors.blue
      }`}
    >
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-2xl font-black text-white">
        {value}
      </p>
    </div>
  );
}

export default MoneyCalculator;