'use client'
import React from "react";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";

export const WorkByAnima = () => {
  // Project data for mapping
  const projects = [
    {
      id: 1,
      title: "AutoRent",
      description:
        "El sistema de Alquiler de Autos es una aplicación web que permite a los usuarios iniciar sesión y realizar el alquiler de vehículos disponibles en la plataforma. Su objetivo principal es ofrecer una experiencia sencilla e intuitiva para la gestión de reservas de automóviles, asegurando la disponibilidad y el cumplimiento de las normas de alquiler.",
      image: "/images/Autorent2.png",
      imagePosition: "left",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
      githubUrl: "https://github.com/JacoboSolarte/AutoRent.git",
      demoUrl: "https://auto-rent-tawny.vercel.app/login",
    },
    {
      id: 2,
      title: "Card",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      image: "/images/cardimage.png",
      imagePosition: "right",
      technologies: ["React", "Python", "Tailwindcss", "Figma"],
      githubUrl: "https://github.com/yourusername/fiskil",
      demoUrl: "https://fiskil-demo.com",
    },
    {
      id: 3,
      title: "Fiskil",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      image: "",
      imagePosition: "left",
      technologies: ["Next.js", "Typescript", "Tailwindcss", "Figma"],
      githubUrl: "https://github.com/yourusername/fiskil-2",
      demoUrl: "https://fiskil-2-demo.com",
    },
  ];

  return (
    <section id="projects" className="bg-dark-1 py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-12 pb-24">
        <header className="w-full flex flex-col items-start gap-4">
          <div className="w-full flex justify-center">
            <span className="bg-dark-4 text-light-4 px-5 py-1 rounded-xl font-body3-medium-all">
              Proyectos
            </span>
          </div>
          <div className="w-full text-center">
            <p className="text-xl text-light-4 font-normal leading-7 font-['Inter',Helvetica]">
              Algunos de los proyectos que he construido
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-12 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row overflow-hidden bg-dark-3 rounded-xl shadow-[0px_25px_25px_#00000026]"
            >
              {project.imagePosition === "left" ? (
                <>
                  <div className="flex-1 p-6 md:p-12 bg-dark-4 rounded-[12px_0px_0px_12px] border-r border-dark-4">
                    <div className="h-64 md:h-96 rounded-xl overflow-hidden shadow-drop-shadow-lg">
                      {project.image && (
                        <img
                          className="w-full h-full object-cover rounded-xl"
                          alt={project.title}
                          src={project.image}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-6 p-6 md:p-12">
                    <h3 className="font-semibold text-xl text-light-2 font-['Inter',Helvetica] leading-7">
                      {project.title}
                    </h3>
                    <p className="text-light-4 font-body2-normal-all">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-dark-4 text-light-4 px-5 py-1 rounded-xl font-body3-medium-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        className="p-1.5 rounded-lg hover:bg-dark-4"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <GithubIcon className="w-6 h-6 text-light-4" />
                      </button>
                      <button
                        className="p-1.5 rounded-lg hover:bg-dark-4"
                        onClick={() => window.open(project.demoUrl, "_blank")}
                      >
                        <ExternalLinkIcon className="w-6 h-6 text-light-4" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1 flex flex-col gap-6 p-6 md:p-12">
                    <h3 className="font-semibold text-xl text-light-2 font-['Inter',Helvetica] leading-7">
                      {project.title}
                    </h3>
                    <p className="text-light-4 font-body2-normal-all">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-dark-4 text-light-4 px-5 py-1 rounded-xl font-body3-medium-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        className="p-1.5 rounded-lg hover:bg-dark-4"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <GithubIcon className="w-6 h-6 text-light-4" />
                      </button>
                      <button
                        className="p-1.5 rounded-lg hover:bg-dark-4"
                        onClick={() => window.open(project.demoUrl, "_blank")}
                      >
                        <ExternalLinkIcon className="w-6 h-6 text-light-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 p-6 md:p-12 bg-dark-4 rounded-[0px_12px_12px_0px] border-l border-dark-4">
                    <div className="h-64 md:h-96 rounded-xl overflow-hidden shadow-drop-shadow-lg">
                      {project.image && (
                        <img
                          className="w-full h-full object-cover rounded-xl"
                          alt={project.title}
                          src={project.image}
                        />
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};