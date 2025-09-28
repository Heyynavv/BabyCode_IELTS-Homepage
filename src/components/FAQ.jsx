import { useState } from "react";

export default function FAQ() {
  const faqs = [
    { q: "How long does it take to improve my band score?", a: "It depends on your current level, but most students see improvements in 2–3 months." },
    { q: "Do you offer 1-on-1 coaching?", a: "Yes, our Premium plan includes personalized 1-on-1 coaching." },
    { q: "Are the courses online?", a: "Yes, all courses are fully online and accessible anytime." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((item, idx) => (
        <div key={idx} className="faq-item">
          <h4 onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
            {item.q} {openIndex === idx ? "−" : "+"}
          </h4>
          {openIndex === idx && <p>{item.a}</p>}
        </div>
      ))}
    </section>
  );
}
