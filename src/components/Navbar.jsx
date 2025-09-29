import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // react-scroll for smooth scrolling

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">BabyCode IELTS</div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="features" smooth={true} duration={600} offset={-80} onClick={() => setIsOpen(false)}>Features</Link>
        <Link to="pricing" smooth={true} duration={600} offset={-80} onClick={() => setIsOpen(false)}>Pricing</Link>
        <Link to="testimonials" smooth={true} duration={600} offset={-80} onClick={() => setIsOpen(false)}>Testimonials</Link>
        <Link to="contact" smooth={true} duration={600} offset={-80} onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}
