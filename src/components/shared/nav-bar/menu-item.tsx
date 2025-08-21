import type { FC } from "react";

export type MenuItemProps = {
  label: string;
  href?: string;
};

const MenuItem: FC<MenuItemProps> = ({ label, href }) => {
  return (
    <li>
      <a href={href || "#"} className="px-3 py-2 hover:text-blue-600">
        {label}
      </a>
    </li>
  );
};

export default MenuItem;
