import type { FC, ReactNode } from "react";

type MenuProps = {
  children: ReactNode;
  className?: string;
};

const Menu: FC<MenuProps> = ({ children, className }) => {
  return (
    <ul className={`flex flex-col gap-2 ${className || ""}`}>{children}</ul>
  );
};

export default Menu;
