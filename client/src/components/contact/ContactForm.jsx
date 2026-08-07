import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Connect this form with your backend or Formspree."
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-slate-800 bg-slate-900 p-8"
    >

      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-950 p-4 outline-none"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-950 p-4 outline-none"
      />

      <input
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-950 p-4 outline-none"
      />

      <textarea
        rows={6}
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-950 p-4 outline-none"
      />

      <button
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold"
      >
        Send Message
      </button>

    </form>
  );
}

export default ContactForm;