import { useEffect } from "react";
import {
  FaComments,
  FaPenFancy,
  FaBookOpen,
  FaHeadphones,
  FaSpellCheck,
  FaClipboardCheck,
} from "react-icons/fa";

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
    <section className="features" id = 'features'>
      {/* Section Heading */}
      <div className="features-header">
        <h2>Why Choose Us?</h2>
        <p>
          We go beyond ordinary IELTS prep — offering personalized guidance,
          interactive tools, and proven strategies to help you achieve your
          dream band score.
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        <div className="feature-card">
          <FaComments className="feature-icon" />
          <h3>Speaking</h3>
          <p>Fluency, pronunciation, and confidence boosted with expert guidance.</p>
          <ul>
            <li>Interactive speaking exercises</li>
            <li>Personalized feedback from experts</li>
            <li>Band score improvement strategies</li>
          </ul>
        </div>

        <div className="feature-card">
          <FaPenFancy className="feature-icon" />
          <h3>Writing</h3>
          <p>Master essays, letters, and task structures with top strategies.</p>
          <ul>
            <li>Task 1 & Task 2 practice tests</li>
            <li>Grammar & vocabulary enhancement</li>
            <li>Detailed scoring analysis</li>
          </ul>
        </div>

        <div className="feature-card">
          <FaBookOpen className="feature-icon" />
          <h3>Reading</h3>
          <p>Sharpen comprehension and time management with real tests.</p>
          <ul>
            <li>Timed reading practice</li>
            <li>Skimming & scanning strategies</li>
            <li>Identify tricky question types</li>
          </ul>
        </div>

        <div className="feature-card">
          <FaHeadphones className="feature-icon" />
          <h3>Listening</h3>
          <p>Boost your listening accuracy with structured practice.</p>
          <ul>
            <li>Audio with transcripts</li>
            <li>Accents from different countries</li>
            <li>Note-taking techniques</li>
          </ul>
        </div>

        <div className="feature-card">
          <FaSpellCheck className="feature-icon" />
          <h3>Grammar</h3>
          <p>Enhance sentence structure and accuracy to impress examiners.</p>
          <ul>
            <li>Common IELTS grammar mistakes</li>
            <li>Tenses & sentence formation</li>
            <li>Practice quizzes with feedback</li>
          </ul>
        </div>

        <div className="feature-card">
          <FaClipboardCheck className="feature-icon" />
          <h3>Mock Tests</h3>
          <p>Experience the real exam environment with full-length practice tests.</p>
          <ul>
            <li>Computer-based & paper-based mocks</li>
            <li>Detailed performance reports</li>
            <li>Time management training</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
