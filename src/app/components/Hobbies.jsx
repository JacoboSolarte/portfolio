"use client"

export const HoobiesByAnima = () => {
  const hobbies = [
    {
      title: "Microfútbol",
      description:
        "Me encanta jugar microfútbol, especialmente los fines de semana. No solo lo disfruto como una forma de ejercicio, sino también como una oportunidad para conocer nuevas personas y compartir con amigos. Es un espacio donde se combina la competencia y la diversión, y cada partido es una oportunidad para aprender y disfrutar de un buen rato.",
      image: "/images/micro.png",
      imageAlt: "Microfútbol",
      imageRight: true,
    },
    {
      title: "Familia",
      description:
        "La familia es un pilar fundamental en mi vida. Me encanta pasar tiempo con ellos, especialmente en vacaciones, donde aprovechamos para hacer actividades juntos, como cocinar, ver películas o simplemente compartir una buena conversación. Es en estos momentos donde más valoro las conexiones y el apoyo mutuo. Siempre me siento renovado después de un buen rato en familia.",
      image: "/images/familia2.png",
      imageAlt: "Familia",
      imageRight: false,
    },
    {
      title: "Viajar",
      description:
        "Salir a pasear es una de mis actividades favoritas, ya sea por la ciudad o por la naturaleza. Disfruto de caminar por senderos tranquilos o explorar nuevos barrios, ya sea solo o acompañado. Es una manera perfecta de relajarse, descubrir nuevos lugares y disfrutar de los pequeños momentos de la vida. Cada paseo me da una nueva perspectiva y muchas veces encuentro inspiración para mis proyectos.",
      image: "/images/Viajes.png",
      imageAlt: "Viajes",
      imageRight: true,
    },
  ];

  return (
    <section id="hobbies" className="flex flex-col items-center justify-center px-4 py-24 w-full bg-dark-1">
      <div className="flex flex-col items-center justify-center gap-12 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <span className="px-5 py-1 bg-dark-4 text-light-4 rounded-xl">
            <span className="font-medium text-lg">Pasatiempos</span>
          </span>
        </div>

        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="w-full max-w-[896px] bg-dark-3 rounded-xl overflow-hidden shadow-lg mb-1"
          >
            <div className="p-4 md:p-8">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
                {!hobby.imageRight && (
                  <img
                    className="rounded-lg w-full md:w-[300px] h-[260px] md:h-[320px] object-cover"
                    alt={hobby.imageAlt}
                    src={hobby.image}
                  />
                )}

                <div className="flex flex-col w-full md:w-[424px] items-start gap-4">
                  <h3 className="text-light-2 text-2xl font-semibold">{hobby.title}</h3>
                  <p className="text-light-4 text-lg leading-relaxed text-justify">
                    {hobby.description}
                  </p>
                </div>

                {hobby.imageRight && (
                  <img
                    className="rounded-lg w-full md:w-[300px] h-[260px] md:h-[320px] object-cover"
                    alt={hobby.imageAlt}
                    src={hobby.image}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
