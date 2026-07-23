export function Hero() {
  return (
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
            Creamos presencia digital y Portafolios de proyectos.
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
  );
}
