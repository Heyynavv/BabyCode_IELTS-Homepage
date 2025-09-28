import { useEffect, useState } from "react";

export default function Hero() {
  const fullText = "Maaster IELTS with BabyCode";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <h1>{displayText}</h1>
      <p>
        Interactive courses, expert guidance, and personalized feedback to help
        you achieve your dream band score.
      </p>

      <div className="hero-buttons">
        <button className="primary-btn">Get Started</button>
        <button className="secondary-btn">View Courses</button>
      </div>

      <div className="hero-features">
        <div className="hero-feature-card">
          <h4>📈 Track Progress</h4>
          <p>Monitor your scores and see your improvement over time.</p>
        </div>
        <div className="hero-feature-card">
          <h4>🎧 Listening Practice</h4>
          <p>Real audio exercises to boost comprehension and timing.</p>
        </div>
        <div className="hero-feature-card">
          <h4>📝 Writing Tasks</h4>
          <p>Structured guidance to improve essays and letters.</p>
        </div>
      </div>

      <div className="hero-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
      </div>
    </section>
  );
}
