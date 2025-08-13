import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { events } from "./events"; // <-- import corregido (ruta relativa)

const YearSlider: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState<number>(0);

  // animación inicial del primer slide
  useEffect(() => {
    if (!trackRef.current) return;
    const firstSlide = slideRefs.current[0];
    if (firstSlide) {
      const elems = firstSlide.querySelectorAll<HTMLElement>(".slide-anim");
      gsap.fromTo(
        elems,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: "power3.out" },
      );
    }
    return () => gsap.killTweensOf("*");
  }, []);

  // función para mover la pista horizontalmente usando GSAP
  const goTo = (index: number) => {
    if (!trackRef.current) return;
    const vw = window.innerWidth;
    gsap.to(trackRef.current, {
      x: -index * vw,
      duration: 0.8,
      ease: "power3.out",
    });
    setActive(index);

    // animar el contenido del slide entrante
    const slide = slideRefs.current[index];
    if (slide) {
      const elems = slide.querySelectorAll<HTMLElement>(".slide-anim");
      gsap.fromTo(
        elems,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: "power3.out" },
      );
    }
  };

  // reubicar la pista al cambiar tamaño de ventana (para mantener el slide activo centrado)
  useEffect(() => {
    const onResize = () => {
      if (!trackRef.current) return;
      gsap.set(trackRef.current, { x: -active * window.innerWidth });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  // navegación con flechas del teclado (opcional pero útil)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(Math.min(active + 1, events.length - 1));
      if (e.key === "ArrowLeft") goTo(Math.max(active - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <div
      ref={wrapperRef}
      className="w-[100dvw] min-h-screen overflow-hidden bg-white text-gray-900 relative"
    >
      {/* track horizontal */}
      <div ref={trackRef} className="flex flex-nowrap will-change-transform">
        {events.map((event, i) => (
          <div
            key={i}
            ref={(el) => (slideRefs.current[i] = el)}
            className="min-w-[100dvw] px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
            aria-hidden={active !== i}
          >
            {/* Izquierda: año grande + título */}
            <div className="space-y-6 slide-anim">
              <h2 className="text-[6rem] md:text-[8rem] font-bold text-gray-200 leading-none">
                {event.year}
              </h2>
              {event.title && (
                <h3 className="text-2xl font-bold">{event.title}</h3>
              )}
            </div>

            {/* Derecha: categorías e ítems (con soporte opcional de image) */}
            <div className="space-y-8">
              {event.categories.map((cat, ci) => (
                <div
                  key={ci}
                  className="slide-anim bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <h4 className="text-lg font-semibold text-yellow-600">
                    {cat.name}
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2 mt-2">
                    {cat.items.map((item, ii) =>
                      item.image ? (
                        <div
                          key={ii}
                          className="relative overflow-hidden rounded-lg shadow image-card"
                        >
                          <img
                            src={item.image}
                            alt={item.client}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2 text-white text-sm">
                            <h5 className="font-bold">{item.client}</h5>
                            <p className="text-gray-200">{item.description}</p>
                          </div>
                        </div>
                      ) : (
                        <div
                          key={ii}
                          className="border-l-4 border-yellow-500 pl-3 hover:bg-yellow-50 rounded transition-colors"
                        >
                          <p className="font-semibold">{item.client}</p>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Timeline: fijo en la parte baja, centra y controla el slider */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-white/90 backdrop-blur-sm p-2 rounded-md border border-gray-200 z-50">
        {events.map((ev, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir a ${ev.year}`}
            className={`px-3 py-1 text-sm focus:outline-none transition ${
              i === active
                ? "bg-yellow-600 text-white rounded"
                : "text-gray-600 hover:text-yellow-600"
            }`}
          >
            {ev.year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YearSlider;
