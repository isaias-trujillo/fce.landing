import {
  BriefcaseBusiness,
  Building,
  HandHelping,
  Sparkles,
  Users,
  Menu,
  MessageCircle,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu.tsx";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBarMenu = () => {
  return (
    <nav className="sticky top-0 z-20 w-full bg-background border-b">
      <div className="flex items-center justify-between px-[clamp(1rem,3vw,2rem)] py-2 h-16">
        {/* Logo */}
        <a href="/cesepi" className="flex items-center">
          <img
            src="/cdn/cesepi/logo.jpg"
            alt="fce official logo"
            className="size-12"
          />
          <span>CESEPI</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-[clamp(0.5rem,2vw,1rem)] text-[clamp(0.75rem,0.9vw,1rem)]">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a
                    href="/cesepi/nosotros"
                    className="flex flex-row items-center gap-2"
                  >
                    <Building className="size-4" />
                    Nosotros
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a
                    href="/cesepi/Servicios"
                    className="flex flex-row items-center gap-2"
                  >
                    <HandHelping className="size-4" />
                    Servicios
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a href="/cesepi/equipo" className="flex gap-2 items-center">
                    <Users className="size-4" />
                    Equipo
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem> */}

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a
                    href="/cesepi/portafolio"
                    className="flex flex-row items-center gap-2"
                  >
                    <BriefcaseBusiness className="size-4" />
                    Portafolio
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a
                    href="/cesepi/transparencia"
                    className="flex flex-row items-center gap-2"
                  >
                    <Sparkles className="size-4" />
                    Transparencia
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a
                    href="/cesepi#contactanos"
                    className="flex flex-row items-center gap-2"
                  >
                    <MessageCircle className="size-4" />
                    Contáctanos
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md hover:bg-accent">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[80%] sm:w-[300px] px-[clamp(1rem,4vw,2rem)] h-[100dvh]"
            >
              <SheetHeader>
                <SheetTitle className="text-[clamp(0.85rem,1vw,1.1rem)]">
                  CESEPI ~ Menú
                </SheetTitle>
              </SheetHeader>
              <ul className="mt-6 flex flex-col gap-[clamp(0.5rem,2vw,1rem)] text-[clamp(0.75rem,0.9vw,1rem)]">
                <li>
                  <a
                    href="/cesepi/nosotros"
                    className="flex gap-2 items-center"
                  >
                    <Building className="size-4" /> Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="/cesepi/servicios"
                    className="flex gap-2 items-center"
                  >
                    <HandHelping className="size-4" /> Servicios
                  </a>
                </li>
                {/* <li>
                  <a href="/cesepi/equipo" className="flex gap-2 items-center">
                    <Users className="size-4" /> Equipo
                  </a>
                </li> */}
                <li>
                  <a
                    href="/cesepi/portafolio"
                    className="flex gap-2 items-center"
                  >
                    <BriefcaseBusiness className="size-4" /> Portafolio
                  </a>
                </li>
                <li>
                  <a
                    href="/cesepi/transparencia"
                    className="flex gap-2 items-center"
                  >
                    <Sparkles className="size-4" /> Transparencia
                  </a>
                </li>
                <li>
                  <a
                    href="/cesepi#contacto"
                    className="flex gap-2 items-center"
                  >
                    <MessageCircle className="size-4" />
                    Contáctanos
                  </a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBarMenu;
