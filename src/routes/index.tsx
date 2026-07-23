import { createFileRoute } from "@tanstack/react-router";
import { projectImages } from "../data/projects"; // Ajusta la ruta de importación según corresponda
import { Navigation } from "../components/navigation.tsx";
import { Hero } from "../components/hero.tsx";
import { Portfolio } from "../components/portfolio.tsx";
import { Process } from "../components/process.tsx";
import { Footer } from "../components/footer.tsx";

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
        content: "Creamos presencia digital y Portafolios de arquitectura.",
      },
      { property: "og:image", content: projectImages["/src/assets/project-01.jpg"]?.default },
      { name: "twitter:image", content: projectImages["/src/assets/project-01.jpg"]?.default },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navigation />
      <Hero />
      <Portfolio />
      <Process />
      <Footer />
    </div>
  );
}