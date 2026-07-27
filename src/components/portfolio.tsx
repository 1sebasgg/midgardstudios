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
                className={`relative w-full aspect-[15/8] overflow-hidden mb-6 md:mb-8 ring-1 ring-paper/10 ${
                  project.link ? "cursor-pointer" : "cursor-default"
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
                    <div className="pointer-events-none absolute inset-0 bg-carbon/0 group-hover:bg-carbon/20 transition-colors duration-700" />

                    <div className="pointer-events-none absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-3 text-paper opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700">
                      <span className="font-serif italic text-sm md:text-base">
                        Ver proyecto
                      </span>
                      <span className="h-px w-8 bg-paper/70" />
                    </div>

                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full border border-paper/60 bg-paper/10 backdrop-blur-[2px] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out">
                        <span className="absolute inset-0 rounded-full border border-paper/30 animate-ping-slow" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          className="w-7 h-7 md:w-10 md:h-10 text-paper transition-transform duration-700 group-hover:translate-x-1"
                        >
                          <line x1="4" y1="12" x2="20" y2="12" />
                          <polyline points="14 6 20 12 14 18" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );

            return (
              <article
                key={project.id}
                className={`${project.colSpan} ${project.extraClass || ""} group`}
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
