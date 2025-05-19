'use client';
import React from "react";

export function AboutByAnima() {
  const aboutMeText = [
    "Soy estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia. Desde que comencé mi carrera, he encontrado en la tecnología una forma de transformar ideas en soluciones útiles para las personas. Me gusta involucrarme en proyectos que me reten a pensar, diseñar y construir herramientas que realmente hagan la diferencia.",
    "Soy una persona curiosa, comprometida con el aprendizaje constante, y siempre estoy buscando mejorar mis habilidades tanto en el desarrollo web como en la lógica de programación y estructuras de datos. Me interesa especialmente el diseño de interfaces funcionales y la creación de experiencias digitales agradables y eficientes.",
    "Además del mundo del software, tengo una gran pasión por el deporte, especialmente el microfútbol. Jugar me permite mantener el equilibrio entre el estudio y el bienestar físico, trabajar en equipo, y desarrollar disciplina, algo que también aplico en mi formación profesional.",
    "Estoy enfocado en seguir creciendo como desarrollador y en construir un portafolio que refleje lo que soy capaz de hacer con dedicación, creatividad y esfuerzo."
  ];

  return (
    <section id="about" className="bg-dark-2 px-4 md:px-20 py-24 w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex justify-center">
          <span className="px-5 py-1 bg-dark-4 text-light-4 text-sm rounded-xl font-medium">
            Acerca de mí
          </span>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-auto max-h-[635px] object-cover rounded-xl"
              src="/images/ImagenAbout.png"
              alt="Imagen de perfil"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-light-2 text-2xl md:text-3xl font-semibold">
              Aquí hay un poco sobre mí
            </h3>
            <div className="text-base leading-6 text-light-4 space-y-4">
              {aboutMeText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}