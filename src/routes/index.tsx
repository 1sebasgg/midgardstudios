import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const projectImages = import.meta.glob<{ default: string }>("@/assets/project-*.{jpg,jpeg,png}", {
  eager: true,
});

interface Project {
  id: string;
  number: string;
  title: string;
  imagePath: string;
  alt: string;
  description: string;
  colSpan: string;
  extraClass?: string;
  link?: string;
}

const PROJECTS: Project[] = [
  {
    id: "Maqueta 40 Proyectos",
    number: "01/",
    title: "Maqueta 40 Proyectos",
    imagePath: "/src/assets/project-01.png",
    alt: "Casa brutalista en el bosque",
    description:
      "Rediseño de identidad digital para un hito de la arquitectura moderna. Enfoque en la preservación visual y la interactividad técnica.",
    colSpan: "md:col-span-6",
    link: "https://maqueta40proyectos.lovable.app/",
  },
  {
    id: "Arquitectura en Papel",
    number: "02/",
    title: "Arquitectura en Papel",
    imagePath: "/src/assets/project-02.png",
    alt: "Interior de estudio de arquitectura",
    description:
      "Portafolio interactivo para firma boutique. Navegación basada en planos técnicos y capas constructivas.",
    colSpan: "md:col-span-6",
    link: "https://arquitecturaenpapel.cl/",
    extraClass: "md:pt-48", // Este padding top genera el desfase hacia abajo
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Midgard Studios" },
      {
        name: "description",
        content:
          "Diseñamos portafolios de arquitectura y sitios web profesionales para arquitectos y estudios. Santiago, Chile.",
      },
      { property: "og:title", content: "Midgard Studios" },
      {
        property: "og:description",
        content: "Portafolios de arquitectura y presencia digital.",
      },
      // Obtenemos dinámicamente la imagen para SEO/OpenGraph utilizando el glob import
      { property: "og:image", content: projectImages["/src/assets/project-01.jpg"]?.default },
      { name: "twitter:image", content: projectImages["/src/assets/project-01.jpg"]?.default },
    ],
  }),
  component: Index,
});

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollClick = (hash?: string) => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Hacemos que el navegador haga scroll hacia el ID suavemente
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "mix-blend-normal bg-paper/80 backdrop-blur-md" : "mix-blend-difference"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-4 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div
            className={`text-sm font-semibold tracking-[0.3em] uppercase shrink-0 ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          >
            <Link to="/" hash="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Midgard
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12">
            {[
              ["Proyectos", "proyectos"],
              ["Estudio", "estudio"],
              ["Contacto", "contacto"],
            ].map(([label, href]) => (
              <Link
                to="/"
                key={label}
                onClick={() => handleScrollClick(href)}
                className={`text-[11px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-60 ${
                  scrolled ? "text-ink" : "text-paper"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 overflow-hidden">
        <div className="absolute top-32 md:top-24 left-6 md:left-12 text-[10px] font-medium tracking-[0.3em] uppercase opacity-40">
          Midgard Studios / Santiago, CL
        </div>

        <div className="max-w-screen-2xl mx-auto w-full border-t border-ink/15 pt-12">
          <h1 className="font-serif font-medium leading-[0.85] tracking-tighter text-balance animate-fade-up text-[clamp(4.5rem,15vw,15rem)] -ml-[0.04em]">
            Midgard
          </h1>
          <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end">
            <p
              className="font-serif text-3xl md:text-5xl italic font-medium max-w-[22ch] text-balance leading-[1.05] animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Portafolios de arquitectura y presencia digital.
            </p>
            <div
              className="flex flex-col gap-3 text-[11px] tracking-[0.2em] uppercase font-medium animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <span className="opacity-40">Especialización</span>
              <span>Curaduría Digital</span>
              <span>Visualización 3D</span>
              <span>Desarrollo Web</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-6 md:right-12 flex items-center gap-4">
          <div className="h-px w-20 md:w-24 bg-ink/30 animate-line" />
          <span className="text-[10px] font-medium tracking-[0.25em] uppercase opacity-50">
            Scroll para explorar
          </span>
        </div>
      </header>

      {/* Portfolio */}
      <section id="proyectos" className="bg-carbon text-paper py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-6 lg:gap-12 2xl:gap-24">
            <h2 className="font-serif text-3xl md:text-4xl font-medium truncate">Proyectos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
            {PROJECTS.map((project) => {
              const resolvedImage = projectImages[project.imagePath]?.default;

              // Validamos si es una ruta externa (que empiece con http/https) o interna
              const isExternal = project.link?.startsWith("http");

              // El elemento de la imagen SIEMPRE tiene las clases de animación al hacer hover en el artículo (group)
              const ImageElement = (
                <div
                  className={`w-full aspect-[15/8] overflow-hidden mb-6 md:mb-8 ring-1 ring-paper/10 ${project.link ? "cursor-pointer" : "cursor-default"}`}
                >
                  <img
                    src={resolvedImage}
                    alt={project.alt}
                    className="w-full h-full object-cover grayscale hover:scale-[1.02] hover:grayscale-0 transition-all duration-1000"
                    loading="lazy"
                  />
                </div>
              );

              return (
                <article
                  key={project.id}
                  className={`${project.colSpan} ${project.extraClass || ""} group`}
                >
                  <div className="mb-6 flex items-baseline gap-4">
                    <span className="font-serif italic text-2xl opacity-70">{project.number}</span>
                    <h3 className="text-base md:text-xl font-medium tracking-[0.15em] uppercase">
                      {project.title}
                    </h3>
                  </div>

                  {/* Si tiene link, lo envolvemos para que sea clickeable */}
                  {project.link ? (
                    isExternal ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {ImageElement}
                      </a>
                    ) : (
                      <Link to={project.link}>{ImageElement}</Link>
                    )
                  ) : (
                    ImageElement
                  )}

                  <p className="max-w-[44ch] text-sm md:text-base text-paper/60 leading-relaxed text-pretty">
                    {project.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process / Estudio */}
      <section id="estudio" className="py-24 md:py-40 px-6 md:px-12 bg-paper">
        <div className="max-w-screen-xl mx-auto">
          <div className="w-full mb-20 md:mb-24">
            <div className="text-[10px] font-medium tracking-[0.3em] uppercase opacity-40 mb-6">
              — Metodología
            </div>
            <h2 className="font-serif text-4xl md:text-7xl font-medium text-balance max-w-[20ch] leading-[1.05]">
              Convertimos planos físicos en experiencias digitales.
            </h2>
          </div>

          <div className="w-full grid md:grid-cols-3 gap-14 md:gap-20">
            {[
              {
                n: "01. Análisis",
                t: "Comenzamos entendiendo la visión, objetivos y personalidad de cada estudio o profesional. Analizamos su trabajo, sus referentes y la forma en que quiere presentarse para definir una estrategia digital alineada con su identidad.",
              },
              {
                n: "02. Trazado",
                t: "Organizamos la información y diseñamos la estructura del sitio. Definimos la navegación, jerarquía de contenidos y dirección visual para crear una experiencia clara, coherente y pensada para destacar cada proyecto.",
              },
              {
                n: "03. Construcción",
                t: "Transformamos la estrategia y el diseño en una presencia digital sólida. Desarrollamos sitios web rápidos, elegantes y funcionales, cuidando cada detalle para que el resultado refleje la calidad del trabajo que representan.",
              },
            ].map((s) => (
              <div key={s.n} className="flex flex-col gap-6">
                <div className="h-px w-full bg-ink/15" />
                <h3 className="font-serif text-2xl md:text-3xl italic">{s.n}</h3>
                <p className="text-sm md:text-base leading-relaxed text-pretty max-w-[42ch] text-ink/70">
                  {s.t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contacto" className="bg-carbon text-paper py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 self-end mt-12 md:mt-0">
            <div>
              <h2 className="font-serif text-5xl md:text-8xl font-medium leading-[0.95] mb-12 text-balance">
                Construyamos juntos.
              </h2>
              <a
                href="mailto:contacto.midgardstudios@gmail.com"
                className="group inline-flex items-center bg-paper text-carbon pr-5 transition-transform hover:-translate-y-1"
              >
                <span className="size-11 bg-carbon text-paper flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M1 4.5A1.5 1.5 0 0 1 2.5 3h11A1.5 1.5 0 0 1 15 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 11.5v-7Zm1.5-.5a.5.5 0 0 0-.5.5v.4l6 3.6 6-3.6V4.5a.5.5 0 0 0-.5-.5h-11Zm11.5 2.07-5.74 3.44a.5.5 0 0 1-.52 0L2 6.07V11.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V6.07Z" />
                  </svg>
                </span>
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase">
                  Iniciar Proyecto
                </span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-10 md:gap-12 self-end">
              <div className="flex flex-col gap-5">
                <span className="text-[10px] tracking-[0.25em] uppercase opacity-40">Contacto</span>
                <div className="flex flex-col gap-2 text-sm md:text-base">
                  <span className="select-text cursor-text break-all">
                    contacto.midgardstudios@gmail.com
                  </span>
                  <span className="select-text cursor-text break-all">+56 9 3586 3215</span>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-[10px] tracking-[0.25em] uppercase opacity-40">
                  Ubicación
                </span>
                <p className="text-sm md:text-base leading-relaxed">
                  Santiago, Chile.
                  <br />
                  Disponibles para proyectos globales.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-10 flex sm:flex sm:justify-between items-center gap-4">
            <div className="text-[10px] font-medium tracking-[0.4em] uppercase opacity-40 truncate">
              Midgard Studios © {new Date().getFullYear()}
            </div>
            <div className="flex gap-6 md:gap-8 text-[10px] font-medium tracking-[0.25em] uppercase opacity-40 shrink-0">
              <a
                href="https://instagram.com/midgardstudioscl"
                className="hover:opacity-100 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/56935863215?text=Hola%2C%20me%20interesa%20dise%C3%B1ar%20el%20sitio%20web%20para%20nuestro%20proyecto%20%2F%20estudio%20de%20dise%C3%B1o.%20Me%20gustar%C3%ADa%20conocer%20sus%20planes%20y%20metodolog%C3%ADa%20de%20trabajo."
                target="_blank"
                className="hover:opacity-100 transition-opacity"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
