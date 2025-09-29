import { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const section = document.querySelector(".contact");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("⚠️ Please fill out all fields.");
      return;
    }

    setError("");
    setSubmitted(true);

    // Simulate API call
    setTimeout(() => {
      alert("✅ Thanks for reaching out! We’ll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 1500);
  };

  return (
    <section className="contact" id="contact">
      <h2>Get in Touch</h2>
      <p>Have questions? We’d love to hear from you. Fill out the form below 👇</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Your Name</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Your Email</label>
        </div>

        <div className="input-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <label>Your Message</label>
        </div>

        {error && <p className="error">{error}</p>}
        {submitted && <p className="success">🎉 Message sent successfully!</p>}

        <button type="submit" className="btn-submit">
          {submitted ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
