import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFAQ from "@/components/contact/ContactFAQ";
import SEO from "@/components/common/SEO";
function Contact() {
  return ( 
  <> <SEO
title="Contact TubeKit"
description="Contact TubeKit."
url="/contact"
/>
    <main className="bg-slate-950 text-white">
      <ContactHero />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </section>

      <ContactFAQ />
    </main>
    </>
  );
}

export default Contact;