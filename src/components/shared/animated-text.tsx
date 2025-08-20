import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { SplitText } from "gsap/SplitText";
import { useRef, type FC, type ReactNode } from "react";
gsap.registerPlugin(useGSAP);

type Props = {
  children: ReactNode;
};

const AnimatedText: FC<Props> = ({ children }) => {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const split = SplitText.create(headerRef.current, {
        type: "chars,words",
        smartWrap: true,
      });

      gsap.from(split.chars, {
        yPercent: "random([-100, 100])",
        rotation: "random([-25, 25])",
        ease: "back.out",
        autoAlpha: 0,
        yoyo: true,
        stagger: {
          amount: 0.75,
          from: "random",
        },
      });
    },
    { scope: headerRef },
  );

  return (
    <header ref={headerRef} className={`min-w-fit text-balance z-10`}>
      {children}
    </header>
  );
};

export default AnimatedText;
