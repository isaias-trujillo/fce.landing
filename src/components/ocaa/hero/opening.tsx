import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Opening = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      videoRef.current,
      {
        scaleX: 0,
        transformOrigin: "center top",
      },
      {
        scaleX: 1,
        width: "100%",
        ease: "sine.out",
        onComplete: () => {
          videoRef.current?.play();
        },
      },
    );
  });

  return (
    <video
      className=" max-w-1/5 object-cover"
      ref={videoRef}
      loop
      muted
      playsInline
      src="https://videos.pexels.com/video-files/3064242/3064242-hd_1920_1080_24fps.mp4"
    />
  );
};

export default Opening;
