import type { FC } from "react";
import Menu from "./menu";
import MenuItem, { type MenuItemProps } from "./menu-item";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";

type NavBarMenuProps = {
  items: MenuItemProps[];
  view: "desktop" | "mobile";
};

const NavBarMenu: FC<NavBarMenuProps> = ({ items, view }) => {
  if (view === "desktop") {
    return (
      <nav>
        <Menu className="lg:flex-row hidden lg:flex">
          {items.map((item) => (
            <MenuItem key={item.label} {...item} />
          ))}
        </Menu>
      </nav>
    );
  }

  // mobile
  return (
    <nav className="lg:hidden">
      <Sheet>
        <SheetTrigger className="p-2">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="p-4">
          <Menu>
            {items.map((item) => (
              <MenuItem key={item.label} {...item} />
            ))}
          </Menu>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavBarMenu;
