import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(
  "https://construction-backend-qirx.onrender.com/api/messages",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }
);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error sending message");
      }

      setSuccess("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h1>{t("contact.title")}</h1>

        {/* WhatsApp */}
        <div className="contact-whatsapp">
          <a
            href="https://wa.me/34643006445"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill="white"
                d="M16.001 2.002c-7.732 0-14 6.268-14 14 0 2.467.646 4.789 1.776 6.805L2 30l7.367-1.93a13.93 13.93 0 006.634 1.677h.001c7.732 0 14-6.268 14-14s-6.268-14-14-14zm0 25.567a11.54 11.54 0 01-5.878-1.604l-.422-.25-4.373 1.146 1.168-4.257-.275-.438a11.538 11.538 0 01-1.767-6.162c0-6.372 5.182-11.553 11.547-11.553 6.373 0 11.553 5.181 11.553 11.553 0 6.371-5.18 11.553-11.553 11.553z"
              />
            </svg>
            <span>+34 643 00 6445</span>
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder={t("contact.name")}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder={t("contact.email")}
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            placeholder={t("contact.message")}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : t("contact.send")}
          </button>
        </form>

        {success && <p style={{ color: "green" }}>{success}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </section>
  );
}
