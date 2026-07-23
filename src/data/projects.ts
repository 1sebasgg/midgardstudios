export const projectImages = import.meta.glob<{ default: string }>(
  "@/assets/project-*.{jpg,jpeg,png}",
  {
    eager: true,
  },
);

export interface Project {
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

export const PROJECTS: Project[] = [
  {
    id: "Maqueta 40 Propuestas",
    number: "01/",
    title: "Maqueta 40 Propuestas",
    imagePath: "/src/assets/project-01.png",
    alt: "Casa brutalista en el bosque",
    description:
      "Espacio organizado que reúne 40 propuestas para su exploración, donde los usuarios pueden comparar y conocer cada proyecto mediante una navegación ágil y directa.",
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
      "Sitio web dedicado a la exploración del patrimonio en Chile, reuniendo información y lecturas en un diseño simple, intuitivo y accesible para todo usuario.",
    colSpan: "md:col-span-6",
    link: "https://arquitecturaenpapel.cl/",
    extraClass: "md:pt-48",
  },
  {
    id: "Diseño web 3D",
    number: "03/",
    title: "Diseño web 3D",
    imagePath: "/src/assets/project-03.png",
    alt: "Interfaz de diseño 3D",
    description:
      "Esta página web está dedicada a la navegación y exploración de modelos 3D, permitiendo a los usuarios visualizar, recorrer e interactuar con representaciones tridimensionales.",
    colSpan: "md:col-span-6",
    link: "https://web-3d-demo.lovable.app/",
  },
  {
    id: "Diseño 3D",
    number: "04/",
    title: "Diseño 3D",
    imagePath: "/src/assets/project-04.png",
    alt: "Interfaz de diseño 3D",
    description:
      "Visualización de modelos 3D mediante vistas específicas, permitiendo explorar espacios de interés. Ofreciendo una experiencia clara y organizada para el análisis del proyecto.",
    colSpan: "md:col-span-6",
    link: "https://modelo3d.lovable.app/",
    extraClass: "md:pt-48",
  }
];
