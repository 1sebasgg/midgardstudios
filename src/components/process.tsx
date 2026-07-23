export function Process() {
  return (
    <section id="estudio" className="py-24 md:py-40 px-6 md:px-12 bg-paper">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full mb-20 md:mb-24">
          <div className="text-[10px] font-medium tracking-[0.3em] uppercase opacity-40 mb-6">
            — Metodología
          </div>
          <h2 className="font-serif text-4xl md:text-7xl font-medium text-balance max-w-[20ch] leading-[1.05]">
            Convertimos tus ideas de diseño en experiencias digitales.
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
  );
}
