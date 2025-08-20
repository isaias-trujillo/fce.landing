import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useId, useRef, type FC, type ReactNode } from "react";
gsap.registerPlugin(useGSAP);

const Gallery: FC<{ children: ReactNode }> = ({ children }) => {
  const id = useId();
  const articleRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!articleRef.current) return;
      gsap.to(".item", {
        opacity: 1,
        ease: "back.inOut",
        stagger: {
          each: 1,
          from: "random",
        },
      });
    },
    { scope: articleRef },
  );

  return (
    <div
      ref={articleRef}
      class="grid gap-[clamp(1rem,2dvw,2rem+2rem)] max-w-[min(calc(100%_-_4rem),_80rem)]"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,15rem), 1fr))",
      }}
    >
      {children}
    </div>
  );
};

export default Gallery;
