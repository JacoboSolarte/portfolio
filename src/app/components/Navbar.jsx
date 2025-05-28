"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const HeaderByAnima = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Acerca de mi", id: "about" },
    { label: "Proyectos", id: "projects" },
    { label: "Testimonios", id: "testimonials" },
    { label: "Pasatiempos", id: "hobbies" },
    { label: "Contacto", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full px-4 py-4 md:px-20 flex justify-between items-center transition-colors duration-300 ${
        scrolled
          ? "bg-dark-1/30 backdrop-blur-sm border-b border-transparent"
          : "bg-dark-1"
      }`}
    >
      <div
        className="text-xl font-bold text-light-1 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        Jacobo
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-light-4 md:hidden"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.id)}
            className="text-light-4 hover:text-light-1 transition-colors"
          >
            {item.label}
          </button>
        ))}

        <div className="w-px h-6 bg-dark-5"></div>

        <a
          href="/pdf/CV-Jacobo-Solarte.pdf"
          download
          className="bg-light-2 text-dark-2 px-4 py-2 rounded-xl hover:bg-light-3 text-sm font-semibold"
        >
          Descargar CV
        </a>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-dark-1/95 backdrop-blur-sm md:hidden flex flex-col px-4 pb-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="text-left py-3 text-light-4 hover:text-light-1"
            >
              {item.label}
            </button>
          ))}
          <a
            href="/pdf/CV-Jacobo-Solarte.pdf"
            download
            className="mt-4 bg-light-2 text-dark-2 px-4 py-2 rounded-xl hover:bg-light-3 text-sm font-semibold text-center"
          >
            Descargar CV
          </a>
        </div>
      )}
    </header>
  );
};

export default HeaderByAnima;