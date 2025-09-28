import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu on click
  };

  return (
    <nav>
      <h2>BabyCode IELTS</h2>

      {/* Desktop Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a onClick={() => scrollToSection("features")}>Features</a>
        <a onClick={() => scrollToSection("pricing")}>Pricing</a>
        <a onClick={() => scrollToSection("faq")}>FAQ</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar1 ${isOpen ? "change" : ""}`}></div>
        <div className={`bar2 ${isOpen ? "change" : ""}`}></div>
        <div className={`bar3 ${isOpen ? "change" : ""}`}></div>
      </div>
    </nav>
  );
}
