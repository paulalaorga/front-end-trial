import React from "react";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false); 
const menuRef = useRef(null); 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="nav-bar" ref={menuRef}>
      <nav className={`nav ${isMenuOpen ? "show" : ""}`}>
        <p>Store</p>
        <p>Our Story</p>
        <p>Journal</p>
      </nav>
      {!isMenuOpen && (
      <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        alt="burger menu"/>
      </div>
      )}
    </div>
  );
};

export default Navbar;
