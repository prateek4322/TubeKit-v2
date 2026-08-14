import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFAQ from "@/components/contact/ContactFAQ";
import SEO from "@/components/common/SEO";

function Contact() {
  return (
    <>
      <SEO
        title="Contact TubeKit | Get in Touch With Us"
        description="Contact TubeKit for questions, feedback, support, partnership inquiries, or issues related to our free AI YouTube creator tools."
        keywords="Contact TubeKit, TubeKit support, TubeKit contact, YouTube AI tools support, TubeKit feedback"
        canonical="/contact"
        breadcrumbs={[
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Contact",
            path: "/contact",
          },
        ]}
      />

      <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

        {/* Hero */}
        <section className="relative border-b border-white/5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-[-180px] h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute left-[8%] top-1/2 h-40 w-40 rounded-full bg-red-500/5 blur-3xl" />

            <div className="absolute right-[8%] top-1/2 h-40 w-40 rounded-full bg-green-500/5 blur-3xl" />
          </div>

          <div className="relative">
            <ContactHero />
          </div>
        </section>

        {/* Contact Area */}
        <section className="relative px-6 py-20 sm:py-24">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">

            {/* Contact Form */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8 lg:p-10">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8 lg:p-10">
              <ContactInfo />
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="relative border-t border-white/5">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-96 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl"
          />

          <div className="relative">
            <ContactFAQ />
          </div>

        </section>

      </main>
    </>
  );
}

export default Contact;