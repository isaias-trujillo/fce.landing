import {
  BriefcaseBusiness,
  Building,
  ExternalLink,
  GraduationCap,
  HandHelping,
  LucideYoutube,
  Megaphone,
  Search,
  Sparkles,
  Users,
  YoutubeIcon,
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

import logo from "@/assets/favicon.svg";

const NavBarMenu = () => {
  return (
    <NavigationMenu viewport={false} className="sticky top-0 z-20 grow-0">
      <NavigationMenuList className="w-screen bg-transparent px-4 py-2 justify-between h-16">
        <a href="/cesepi" className="w-6 h-6 bg-black">
          <img src={logo.src} alt="fce official logo" className="w-6 h-6 " />
        </a>

        <NavigationMenuList>
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
                <li className="hidden">
                  <NavigationMenuLink asChild>
                    <a href="#">
                      <div className="text-sm leading-none font-medium">
                        Historia
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        Tradición académica y liderazgo económico desde 1875
                      </p>
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
          <NavigationMenuItem className="hidden">
            <NavigationMenuTrigger className="flex flex-row items-center gap-2">
              <HandHelping className="size-4" />
              Servicios
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#">Cursos de capacitación</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="#">Programas de especialización</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="#">Estudios y consultorías</a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex flex-row items-center gap-2">
              <Users className="size-4" />
              Equipo
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <a href="/cesepi/consultores/unmsm">Consultores UNMSM</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/cesepi/consultores/externos">
                      Consultores externos
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
              <a
                href="/cesepi/portafolio"
                className="flex flex-row items-center gap-2"
              >
                <BriefcaseBusiness className="size-4" />
                Portafolio
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden">
            <NavigationMenuTrigger className="flex flex-row items-center gap-2">
              <BriefcaseBusiness className="size-4" />
              Portafolio
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <img
                    src="https://images.pexels.com/photos/8428051/pexels-photo-8428051.jpeg"
                    alt="a megaphone handle by a hand"
                    className="h-full rounded-md object-cover"
                  />
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#">Capacitaciones realizadas</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#">Especializaciones ejecutadas</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#">Consultorías desarrolladas</a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex flex-row items-center gap-2">
              <Sparkles className="size-4" />
              Transparencia
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px]">
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#">Actas</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#">Acuerdos</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#">Resoluciones</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#">Plan de trabajo</a>
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
              <a href="/public">Contáctanos</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBarMenu;
