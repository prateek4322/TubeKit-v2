import { useState } from "react";
import api from "@/services/api";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!form.subject.trim()) {
      setError("Please enter a subject.");
      return;
    }

    if (!form.message.trim()) {
      setError("Please enter your message.");
      return;
    }

    try {
      setLoading(true);

      // Backend endpoint confirm hone ke baad
      // "/contact" ko exact endpoint se replace karenge.
      const response = await api.post("/contact", form);

      if (response.data?.success) {
        setSuccess(
          response.data.message || "Your message has been sent successfully."
        );

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setError(
          response.data?.message || "Failed to send your message."
        );
      }
    } catch (err) {
      console.error("CONTACT FORM ERROR:", err);
      console.error("RESPONSE:", err.response);

      setError(
        err.response?.data?.message ||
          "Unable to connect to the server. Please try again later."
      );
    } finally {
      setLoading(false);
    }
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
        className="w-full rounded-xl bg-slate-950 p-4 text-white outline-none"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-950 p-4 text-white outline-none"
      />

      <input
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-950 p-4 text-white outline-none"
      />

      <textarea
        rows={6}
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-950 p-4 text-white outline-none"
      />

      {error && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
          {error}
        </p>
      )}

      {success && (
        <p className="rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-400">
          {success}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 py-4 font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;