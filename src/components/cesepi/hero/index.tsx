import pictures from "@/components/cesepi/hero/pictures";
import AnimatedText from "@/components/shared/animated-text";
import Masonry from "@/components/cesepi/hero/masonry";

const Hero = () => {
  return (
    <section className="w-dvw p-4 gap-8 flex flex-row grow flex-wrap justify-center items-center">
      {/* Izquierda: texto + CTA + servicios */}
      <article className="space-y-8 max-w-md flex flex-col">
        <header className="space-y-3 max-w-3xl">
          <p className="text-sm text-gray-500">
            Centro de Servicios y Elaboración de Proyectos de Inversión
          </p>
          <AnimatedText>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Transformamos
              <div className="flex flex-row ">
                ideas
                <img
                  src="https://cdn-icons-gif.flaticon.com/12511/12511270.gif"
                  alt="bulb"
                  className="size-14"
                />
              </div>
              en proyectos con impacto
            </h1>
          </AnimatedText>
        </header>

        <p className="text-base text-gray-600 max-w-2xl">
          Con más de 30 años de experiencia, articulamos el conocimiento
          académico con soluciones estratégicas orientadas al desarrollo del
          país.
        </p>

        <aside className="bg-sky-100 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2">
            <img
              src="https://images.pexels.com/photos/3204350/pexels-photo-3204350.jpeg"
              alt="Especialista 1"
              className="w-6 h-6 rounded-full"
            />
            <img
              src="https://images.pexels.com/photos/7437498/pexels-photo-7437498.jpeg"
              alt="Especialista 2"
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm font-medium text-gray-800">
              +5 consultores
            </span>
          </div>

          <h2 className="text-lg font-semibold text-gray-900">
            Nuestros servicios
          </h2>

          <p className="text-sm text-gray-700">
            Diseñamos soluciones, capacitamos equipos y desarrollamos proyectos
            para instituciones públicas y privadas.
          </p>

          <div className="flex justify-between gap-4">
            <a
              href="/cesepi/servicios"
              className="inline-flex items-center gap-2 px-5 py-2 text-white bg-black rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Conocer más<span aria-hidden>↗</span>
            </a>
          </div>
        </aside>
      </article>
      <Masonry />
    </section>
  );
};

export default Hero;
