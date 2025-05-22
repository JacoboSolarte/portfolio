import { ArrowRightIcon } from "lucide-react";
import React from "react";

export const TestimonialsByAnima = () => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      quote: "Jacobo es un estudiante dedicado y apasionado por la tecnología. Siempre busca soluciones creativas y eficientes para los retos que se le presentan. Es un gusto trabajar con él en proyectos de desarrollo.",
      name: "Jeronimo Unigarro",
      role: "Estudiante - Universidad Cooperativa",
    },
    {
      id: 2,
      quote: "Trabajar con Jacobo fue una experiencia excelente. Tiene una gran capacidad para organizar equipos, proponer ideas innovadoras y entregar resultados de calidad en tiempo récord.",
      name: "Santiago Getial",
      role: "Estudiante - Universidad Cooperativa",
    },
    {
      id: 3,
      quote: "Jacobo demuestra un compromiso admirable con cada tarea que asume. Su enfoque técnico, combinado con su disposición para aprender, lo convierten en un gran integrante para cualquier equipo de desarrollo.",
      name: "Nicolas Diaz",
      role: "Estudiante - Universidad Cooperativa",
    },
    /* {
      id: 4,
      quote: "Jacobo demuestra un compromiso admirable con cada tarea que asume. Su enfoque técnico, combinado con su disposición para aprender, lo convierten en un gran integrante para cualquier equipo de desarrollo.",
      name: "Nicolas Diaz",
      role: "Estudiante - Universidad Cooperativa",
    }, */
  ];

  return (
    <section id="testimonials" className="flex flex-col items-center justify-center gap-8 px-4 md:px-16 py-24 bg-dark-2 w-full">
      <div className="flex flex-col items-center justify-center gap-8 px-4 md:px-8 py-0 w-full">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="px-5 py-1 bg-dark-4 rounded-xl">
              <span className="font-medium text-light-4 text-sm">
                Testimonios
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <p className="mt-[-1.00px] font-semibold text-light-4 text-lg text-center">
              Cosas bonitas que la gente ha dicho sobre mí
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col min-w-[280px] h-[428px] bg-dark-3 rounded-xl overflow-hidden shadow-lg flex-1 max-w-[400px]"
            >
              <div className="flex flex-col items-center gap-6 p-6 md:p-12 h-full">
                <div className="flex w-16 h-16 items-center justify-center gap-2.5 p-5 bg-dark-5 rounded-full overflow-hidden">
                  <img className="w-10 h-10" alt="Icono de usuario" src="/icon-user.svg" />
                </div>
                <p className="font-normal text-light-4 text-base text-center">
                  "{testimonial.quote}"
                </p>
                <div className="flex flex-col items-center gap-1 mt-auto">
                  <h3 className="font-semibold text-light-2 text-lg text-center">
                    {testimonial.name}
                  </h3>
                  <p className="font-medium text-light-4 text-sm text-center">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};