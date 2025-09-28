import { useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    { name: "Rohan Mehta", feedback: "I improved my band score from 6.5 to 8 in just 3 months! The personalized feedback helped me identify my weak points quickly." },
    { name: "Ananya Sharma", feedback: "The lessons are interactive, clear, and highly effective. I loved the speaking practice sessions!" },
    { name: "Kabir Singh", feedback: "BabyCode IELTS helped me organize my writing and speaking strategies systematically. Highly recommended." },
    { name: "Priya Verma", feedback: "The mock tests gave me the confidence to tackle the real IELTS exam. I could track my improvement every week." },
    { name: "Aditya Rao", feedback: "Excellent guidance for reading and listening sections. The time management tips were a game-changer!" },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".testimonial-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-container">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <p>"{t.feedback}"</p>
            <span>- {t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
