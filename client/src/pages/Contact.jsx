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
            url: "/",
          },
          {
            name: "Contact",
            url: "/contact",
          },
        ]}
      />

      <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-white/10">

          {/* RGYB Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            {/* Red */}
            <div className="absolute left-[4%] top-20 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />

            {/* Yellow */}
            <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-[120px]" />

            {/* Green */}
            <div className="absolute right-1/3 top-10 h-64 w-64 rounded-full bg-green-500/10 blur-[120px]" />

            {/* Blue */}
            <div className="absolute right-[4%] top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="relative">
            <ContactHero />
          </div>

          {/* RGYB Bottom Line */}
          <div className="absolute bottom-0 left-1/2 h-[2px] w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

        </section>


        {/* =====================================================
            CONTACT AREA
        ====================================================== */}

        <section className="relative px-6 py-16 sm:py-20 lg:py-24">

          {/* Background Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-red-500/5 blur-[120px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]"
          />

          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">

            {/* =================================================
                CONTACT FORM
            ================================================== */}

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.04] sm:p-8 lg:p-10">

              {/* RGYB Top Accent */}
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <ContactForm />
              </div>

            </div>


            {/* =================================================
                CONTACT INFORMATION
            ================================================== */}

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:border-green-400/20 hover:bg-white/[0.04] sm:p-8 lg:p-10">

              {/* RGYB Top Accent */}
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

              {/* Glow */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-green-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <ContactInfo />
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FAQ
        ====================================================== */}

        <section className="relative overflow-hidden border-t border-white/10">

          {/* RGYB Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-[10%] top-20 h-64 w-64 rounded-full bg-red-500/5 blur-[120px]" />

            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/5 blur-[120px]" />

            <div className="absolute right-[10%] top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-[120px]" />
          </div>

          <div className="relative">
            <ContactFAQ />
          </div>

        </section>


        {/* =====================================================
            BOTTOM RGYB LINE
        ====================================================== */}

        <div className="h-[2px] w-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

      </main>
    </>
  );
}

export default Contact;