import { Link } from "@tanstack/react-router";
import { PROJECTS, projectImages } from "../data/projects";

export function Portfolio() {
  return (
    <section
      id="proyectos"
      className="bg-carbon text-paper pt-12 pb-24 md:pt-20 md:pb-40 px-6 md:px-12"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-medium">Proyectos</h2>

          <p className="mt-3 text-sm md:text-base text-paper/60 tracking-wide">
            Algunos de nuestros diseños.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          {PROJECTS.map((project) => {
            const resolvedImage = projectImages[project.imagePath]?.default;
            const isExternal = project.link?.startsWith("http");

            const ImageElement = (
              <div
                className={`group relative w-full aspect-[15/8] overflow-hidden mb-6 md:mb-8 ring-1 ring-paper/10 ${project.link ? "cursor-pointer" : "cursor-default"
                  }`}
              >
                <img
                  src={resolvedImage}
                  alt={project.alt}
                  className="w-full h-full object-cover grayscale group-hover:scale-[1.04] group-hover:grayscale-0 transition-all duration-1000"
                  loading="lazy"
                />

                {project.link && (
                  <>
                    {/* Indicador de enlace siempre visible */}
                    <div className="pointer-events-none absolute top-4 right-4 md:top-6 md:right-6 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-paper/30 bg-carbon/40 backdrop-blur-md text-paper transition-all duration-500 group-hover:bg-paper group-hover:text-carbon group-hover:scale-110 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-carbon/0 group-hover:bg-carbon/20 transition-colors duration-700" />

                    <div className="pointer-events-none absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-3 text-paper opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700">
                      <span className="font-serif italic text-sm md:text-base">
                        Ver proyecto
                      </span>
                      <span className="h-px w-8 bg-paper/70" />
                    </div>
                  </>
                )}
              </div>
            );

            return (
              <article
                key={project.id}
                className={`${project.colSpan} ${project.extraClass || ""}`}
              >
                <div className="mb-6 flex items-baseline gap-4">
                  <span className="font-serif italic text-2xl opacity-70">{project.number}</span>
                  <h3 className="text-base md:text-2xl font-serif tracking-[0.15em]">
                    {project.title}
                  </h3>
                </div>

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

                <p className="max-w-[55ch] text-sm md:text-base text-paper/60 leading-relaxed text-pretty">
                  {project.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
