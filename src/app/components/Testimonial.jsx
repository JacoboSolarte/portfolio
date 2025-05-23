'use client';

import { ArrowRightIcon } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const TestimonialsByAnima = () => {
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
    {
      id: 4,
      quote: "Jacobo es un profesional excepcional con una gran capacidad para resolver problemas complejos. Su actitud positiva y su ética de trabajo son inspiradoras para todo el equipo.",
      name: "Marlon Solarte",
      role: "Ingeniero Mecánico - AUNAR",
    },
    {
      id: 5,
      quote: "Colaborar con Jacobo fue un verdadero impulso para nuestro proyecto. Su enfoque metódico y su dominio técnico marcaron una gran diferencia desde el primer día.",
      name: "Juan David Acosta",
      role: "Estudiante - Universidad Cooperativa",
    },
    {
      id: 6,
      quote: "Jacobo tiene una visión clara de los objetivos y una gran habilidad para traducir ideas complejas en soluciones funcionales. Es proactivo, creativo y confiable.",
      name: "Fransico Molina",
      role: "Estudiante - Universidad Cooperativav",
    },
    {
      id: 7,
      quote: "Lo que más destaco de Jacobo es su compromiso con la calidad. Siempre busca mejorar y optimizar cada parte del desarrollo, sin perder de vista la experiencia del usuario.",
      name: "Sebastian Rojas",
      role: "Estudiante - Universidad Cooperativa",
    },
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

        <div className="w-full max-w-7xl px-4 relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              type: 'bullets',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            className="pb-16" // Aumentamos el padding para los puntos
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col min-w-[280px] h-[428px] bg-dark-3 rounded-xl overflow-hidden shadow-lg mx-auto">
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
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Contenedor personalizado para la paginación */}
          <div className="swiper-pagination !relative !bottom-0 !mt-8" />
        </div>
      </div>

      {/* Estilos personalizados para los puntos del slider */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #6B7280;
          opacity: 1;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #3B82F6;
          width: 30px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};