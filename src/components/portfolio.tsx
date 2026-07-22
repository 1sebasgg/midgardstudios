import { Link } from "@tanstack/react-router";
import { PROJECTS, projectImages } from "../data/projects";

export function Portfolio() {
  return (
    <section
      id="proyectos"
      className="bg-carbon text-paper pt-12 pb-24 md:pt-20 md:pb-40 px-6 md:px-12"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-12 md:mb-20 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-6 lg:gap-12 2xl:gap-24">
          <h2 className="font-serif text-4xl md:text-5xl font-medium">Proyectos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          {PROJECTS.map((project) => {
            const resolvedImage = projectImages[project.imagePath]?.default;
            const isExternal = project.link?.startsWith("http");

            const ImageElement = (
              <div
                className={`w-full aspect-[15/8] overflow-hidden mb-6 md:mb-8 ring-1 ring-paper/10 ${
                  project.link ? "cursor-pointer" : "cursor-default"
                }`}
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

                <p className="max-w-[44ch] text-sm md:text-base text-paper/60 leading-relaxed text-pretty">
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
