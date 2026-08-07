import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEO from "@/components/common/SEO";
const faqs = [
  {
    question: "Is TubeKit free to use?",
    answer:
      "Yes. Most TubeKit tools are completely free to use without creating an account.",
  },
  {
    question: "Do I need to sign in?",
    answer:
      "No. You can use the majority of our AI and utility tools without signing in.",
  },
  {
    question: "Which AI models power TubeKit?",
    answer:
      "TubeKit uses modern AI models to generate YouTube titles, descriptions, scripts, tags, and other creator-focused content.",
  },
  {
    question: "Are the generated titles and scripts unique?",
    answer:
      "AI generates original content based on your input, but you should always review and edit it before publishing.",
  },
  {
    question: "Does TubeKit store my prompts?",
    answer:
      "We only collect the minimum information required to operate the website. Please read our Privacy Policy for complete details.",
  },
  {
    question: "Can I use TubeKit on mobile?",
    answer:
      "Yes. TubeKit is fully responsive and works on desktop, tablet, and mobile devices.",
  },
  {
    question: "How does the Monetization Checker work?",
    answer:
      "The tool analyzes publicly available YouTube channel information and estimates monetization eligibility based on YouTube Partner Program requirements.",
  },
  {
    question: "Will more tools be added?",
    answer:
      "Yes. TubeKit is continuously expanding with new AI tools and YouTube utilities.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
   <> <SEO
title="FAQ | TubeKit"
description="Frequently asked questions."
url="/faq"
/>
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">

        <div className="text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Help Center
          </span>

          <h1 className="mt-6 text-4xl font-black sm:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Find answers to the most common questions about TubeKit,
            AI tools, YouTube utilities, privacy, and usage.
          </p>

        </div>

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                {open === index ? (
                  <ChevronUp className="text-blue-400" />
                ) : (
                  <ChevronDown className="text-slate-400" />
                )}
              </button>

              {open === index && (
                <div className="border-t border-slate-800 px-6 py-5">

                  <p className="leading-8 text-slate-400">
                    {faq.answer}
                  </p>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </main>
    </>
  );
}

export default FAQ;