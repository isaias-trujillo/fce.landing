import type { FC } from "react";

type Props = {
  imgSrc: string;
  fullName: string;
  title: string;
  category?: string;
  className?: string;
};

const GalleryItem: FC<Props> = ({
  imgSrc,
  fullName,
  title,
  category,
  className = "text-violet-700 ",
}) => {
  return (
    <article className="item gap-4 flex flex-col max-w-3xs">
      <img
        className="aspect-square object-cover rounded-xl"
        src={imgSrc}
        loading="lazy"
      ></img>

      <header className="gap-[inherit]">
        <h1
          className={`font-bold flex gap-2 items-start justify-between  ${className}`}
        >
          <span>{fullName}</span>
          <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded-sm max-w-fit">
            {category && (category === "internal" ? "UNMSM" : "Externo")}
          </span>
        </h1>
        <h2 className="text-sm">{title}</h2>
      </header>
    </article>
  );
};

export default GalleryItem;
