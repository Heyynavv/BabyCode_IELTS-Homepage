import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const fullText = "Master IELTS with BabyCode";
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const featureRefs = useRef([]);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Fade-in on scroll for feature cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.3 }
    );

    featureRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });
  }, []);

  // Features data
  const features = [
    { title: "📈 Track Progress", desc: "Monitor your scores and see your improvement over time." },
    { title: "🎧 Listening Practice", desc: "Real audio exercises to boost comprehension and timing." },
    { title: "📝 Writing Tasks", desc: "Structured guidance to improve essays and letters." },
    { title: "📚 Reading Exercises", desc: "Practice with real IELTS reading tests." },
    { title: "💬 Speaking Practice", desc: "Interactive speaking tasks with expert feedback." },
  ];

  return (
    <section className="hero">
      {/* Hero Heading */}
      <h1>
        {displayText}
        {showCursor && <span className="cursor">|</span>}
      </h1>

      {/* Subheading */}
      <p>
        Interactive courses, expert guidance, and personalized feedback to achieve your dream band score.
      </p>

      {/* Buttons */}
      <div className="hero-buttons">
        <button className="primary-btn">Get Started</button>
        <button className="secondary-btn">View Courses</button>
      </div>

      {/* Feature Cards */}
      <div className="hero-features">
        {features.map((feature, i) => (
          <div
            key={i}
            className="hero-feature-card"
            ref={(el) => (featureRefs.current[i] = el)}
          >
            <h4>{feature.title}</h4>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Optional floating shapes */}
      <div className="hero-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
      </div>
    </section>
  );
}
