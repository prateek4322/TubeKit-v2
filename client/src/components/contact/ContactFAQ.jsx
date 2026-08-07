function ContactFAQ() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">

      <h2 className="text-center text-3xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="mt-10 space-y-6">

        <Item
          q="Is TubeKit free?"
          a="Yes. TubeKit provides free AI and utility tools."
        />

        <Item
          q="Do I need an account?"
          a="No. Most tools can be used without creating an account."
        />

        <Item
          q="Can I report bugs?"
          a="Yes. Please use the contact form above."
        />

      </div>

    </section>
  );
}

function Item({
  q,
  a,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h3 className="font-semibold">
        {q}
      </h3>

      <p className="mt-3 text-slate-400">
        {a}
      </p>

    </div>
  );
}

export default ContactFAQ;