'use client';
import {
    CopyIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    PhoneIcon,
  } from "lucide-react";
  import React from "react";
  
  export const ContactMeByAnima = () => {
    const contactInfo = [
      {
        icon: <MailIcon className="w-6 md:w-8 h-6 md:h-8 text-light-3" />,
        text: "jacobo.solarte@campusucc.edu.co.com",
      },
      {
        icon: <PhoneIcon className="w-6 md:w-8 h-6 md:h-8 text-light-3" />,
        text: "+57 3024791329",
      },
    ];
  
    const socialPlatforms = [
      {
        icon: <GithubIcon className="w-6 h-6" />,
        url: "https://github.com/yourusername",
      },
      {
        icon: <InstagramIcon className="w-6 h-6" />,
        url: "https://instagram.com/yourusername",
      },
      {
        icon: <LinkedinIcon className="w-6 h-6" />,
        url: "https://linkedin.com/in/yourusername",
      },
    ];
  
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
    };
  
    return (
      <section
        id="contact"
        className="flex flex-col items-center justify-center px-4 md:px-20 py-24 w-full bg-dark-2"
      >
        <div className="w-full max-w-4xl flex flex-col gap-12">
          {/* Encabezado */}
          <div className="text-center">
            <span className="inline-block bg-dark-4 text-light-4 px-5 py-1 rounded-xl text-sm font-medium">
              Ponte en contacto
            </span>
            <p className="mt-4 text-light-4 text-xl leading-relaxed">
              No dudes en contactarme si buscas un desarrollador, tienes alguna
              consulta o simplemente quieres conectar.
            </p>
          </div>
  
          {/* Información de contacto */}
          <div className="flex flex-col gap-4 items-center">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-light-2"
              >
                {item.icon}
                <p className="text-2xl md:text-2xl font-medium text-center break-all">
                  {item.text}
                </p>
                <button
                  onClick={() => copyToClipboard(item.text)}
                  className="p-2 rounded-md hover:bg-dark-3 transition"
                  aria-label="Copiar"
                >
                  <CopyIcon className="w-6 h-6 md:w-7 md:h-7 text-light-5 hover:text-light-1" />
                </button>
              </div>
            ))}
          </div>
  
          {/* Redes sociales */}
          <div className="w-full rounded-xl p-6 text-center flex flex-col items-center gap-4">
            <p className="text-light-4 text-xl">
              ¡También puedes encontrarme en estas plataformas!
            </p>
            <div className="flex items-center justify-center gap-6">
              {socialPlatforms.map((platform, index) => (
                <button
                  key={index}
                  onClick={() => window.open(platform.url, "_blank")}
                  className="text-light-5 hover:text-light-1 transition"
                  aria-label="Red social"
                >
                  {platform.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };