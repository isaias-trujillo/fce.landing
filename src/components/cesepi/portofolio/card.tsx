// Card.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Props {
  title: string;
  description: string;
  img: string;
  kind: "Servicio" | "Especialización" | "Capacitación" | "Estudio";
}

const Card = ({ title, description, img, kind }: Props) => {
  const cardRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!cardRef.current || !imgRef.current) return;

      const ctx = gsap.context(() => {
        gsap.set(imgRef.current, {
          opacity: 0,
          scaleY: 0,
          height: 0,
          transformOrigin: "center top",
        });

        cardRef.current?.addEventListener("mouseenter", () => {
          gsap.to(imgRef.current, {
            opacity: 1,
            scaleY: 1,
            height: "20rem",
            ease: "power1.inOut",
          });
        });

        cardRef.current?.addEventListener("mouseleave", () => {
          gsap.to(imgRef.current, {
            opacity: 0,
            scaleY: 0,
            height: 0,
            ease: "power1.inOut",
          });
        });
      }, cardRef);

      return () => ctx.revert();
    },
    { scope: cardRef },
  );

  return (
    <article
      ref={cardRef}
      className="max-w-2xs rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out
           bg-white/20 border border-white/30 backdrop-blur-md p-3 flex flex-col flex-wrap gap-4 items-center overflow-hidden"
    >
      <img
        ref={imgRef}
        className="object-cover rounded-2xl"
        src={img}
        alt={title}
      />
      <header className="flex flex-col gap-[inherit] p-4">
        <span className="inline-flex place-items-center bg-orange-50 text-orange-700 font-semibold w-fit text-xs px-4 py-2 rounded-full text-center">
          {kind}
        </span>
        <p className="text-xs text-gray-800">{description}</p>
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      </header>
    </article>
  );
};

export default Card;
