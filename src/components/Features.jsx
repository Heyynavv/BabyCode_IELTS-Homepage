import { useEffect } from "react";

export default function Features() {
  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");
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

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="features">
      <div className="feature-card">
        <h3>Speaking</h3>
        <p>Fluency, pronunciation, and confidence boosted with expert guidance.</p>
        <ul>
          <li>Interactive speaking exercises</li>
          <li>Personalized feedback from experts</li>
          <li>Band score improvement strategies</li>
        </ul>
      </div>
      <div className="feature-card">
        <h3>Writing</h3>
        <p>Master essays, letters, and task structures with top strategies.</p>
        <ul>
          <li>Task 1 & Task 2 practice tests</li>
          <li>Grammar & vocabulary enhancement</li>
          <li>Detailed scoring analysis</li>
        </ul>
      </div>
      <div className="feature-card">
        <h3>Reading & Listening</h3>
        <p>Sharpen comprehension and time management with real tests.</p>
        <ul>
          <li>Timed reading practice</li>
          <li>Listening exercises with transcripts</li>
          <li>Strategies to tackle difficult questions</li>
        </ul>
      </div>
    </section>
  );
}
