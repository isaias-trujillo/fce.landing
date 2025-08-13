import pictures from "@/components/cesepi/hero/pictures";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useId, useRef } from "react";
gsap.registerPlugin(useGSAP);

const Masonry = () => {
  const id = useId();
  const articleRef = useRef<HTMLElement>(null);

  useGSAP(
    ({ selector }) => {
      gsap.to(selector?.("img"), {
        opacity: 1,
        ease: "back.inOut",
        stagger: {
          each: 6 / 50,
          from: "random",
        },
      });
    },
    { scope: articleRef },
  );

  return (
    <article
      ref={articleRef}
      className="xl:max-w-4xl max-w-2xl max-sm:columns-2 columns-3 gap-4 space-y-4"
    >
      {pictures.map((picture, index) => (
        <img
          key={`${id}-picture-${index}`}
          src={picture.url}
          alt={picture.alt}
          className={`opacity-0 rounded-xl w-full mb-4 object-cover break-inside-avoid ${picture.className}`}
        />
      ))}
    </article>
  );
};

export default Masonry;
