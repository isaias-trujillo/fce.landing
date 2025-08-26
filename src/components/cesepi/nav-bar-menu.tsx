import {
  BriefcaseBusiness,
  Building,
  HandHelping,
  Sparkles,
  Users,
  Menu,
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
          <img src="/favicon.svg" alt="fce official logo" className="w-8 h-8" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-[clamp(0.5rem,2vw,1rem)] text-[clamp(0.75rem,0.9vw,1rem)]">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex flex-row items-center gap-2">
                  <Building className="size-4" />
                  Nosotros
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-4">
                      <img
                        src="https://images.pexels.com/photos/17059193/pexels-photo-17059193.jpeg"
                        alt="fce official logo"
                        className="h-full max-w-full rounded-md object-cover"
                      />
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="https://economia.unmsm.edu.pe/cesepi/pages/nosotros.html">
                          Quiénes somos
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="https://economia.unmsm.edu.pe/cesepi/pages/nosotros.html">
                          Misión y visión
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="https://economia.unmsm.edu.pe/cesepi/pages/organigrama.html">
                          Organigrama
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="https://economia.unmsm.edu.pe/cesepi/pages/infraestructura.html">
                          Infraestructura
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a href="/cesepi/servicios">Servicios</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a href="/cesepi/equipo" className="flex gap-2 items-center">
                    <Users className="size-4" />
                    Equipo
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

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
                  <a href="/cesepi#contactanos">Contáctanos</a>
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
                  Menú
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
                <li>
                  <a href="/cesepi/equipo" className="flex gap-2 items-center">
                    <Users className="size-4" /> Equipo
                  </a>
                </li>
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
