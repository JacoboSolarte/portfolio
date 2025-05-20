'use client'
import React from "react";
import {
  Github,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";

const HeroByAnima = () => {
  const socialPlatforms = [
    {
      icon: <Github className="w-6 h-6 text-light-4" />,
      alt: "Github",
      url: "https://github.com/yourusername",
    },
    {
      icon: <Instagram className="w-6 h-6 text-light-4" />,
      alt: "Instagram",
      url: "https://instagram.com/yourusername",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-light-4" />,
      alt: "Linkedin",
      url: "https://linkedin.com/in/yourusername",
    },
  ];

  return (
    <section className="bg-dark-1 min-h-screen flex items-center py-16 px-6 md:px-20 lg:px-28">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        <div className="flex flex-col items-start gap-6 text-light-1 w-full md:max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm Jacobo
          </h1>
          <p className="text-light-4 text-lg md:text-xl lg:text-2xl leading-relaxed">
            Hola, soy Jacobo Solarte, estudiante de Ingeniería de Software en
            la Universidad Cooperativa de Colombia. Me apasiona el desarrollo
            de soluciones tecnológicas que mejoren la vida de las personas y
            estoy en constante aprendizaje para crecer profesionalmente en el
            mundo del software.
          </p>

          <div className="flex items-center gap-2 text-lg">
            <MapPin className="w-6 h-6 text-light-4" />
            <span className="text-light-4">Nariño - Colombia</span>
          </div>

          <div className="flex items-center gap-2 text-lg">
            <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
            <span className="text-light-4">Disponible para nuevos proyectos</span>
          </div>

          <div className="flex gap-4 pt-4">
            {socialPlatforms.map((platform, index) => (
              <button
                key={index}
                onClick={() => window.open(platform.url, "_blank")}
                className="p-3 rounded-lg hover:bg-dark-3 transition"
                aria-label={platform.alt}
              >
                {platform.icon}
              </button>
            ))}
          </div>
        </div>

        <div className="w-72 h-72 md:w-88 md:h-88 lg:w-104 lg:h-104 rounded-full overflow-hidden flex-shrink-0 ">
          <img
            src="/images/avatar.png"
            alt="Jacobo's profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroByAnima;