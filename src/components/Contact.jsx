import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.name && form.email && form.message) setSubmitted(true);
    else alert("Please fill all fields!");
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      {submitted ? (
        <p>Thank you! We'll get back to you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
          <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange}></textarea>
          <button type="submit" className="primary-btn">Send Message</button>
        </form>
      )}
    </section>
  );
}
