import {
  Building,
  ExternalLink,
  GraduationCap,
  Megaphone,
  Search,
  Sparkles,
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
    <NavigationMenu viewport={false} className="sticky top-0 z-20">
      <NavigationMenuList className="w-screen bg-background px-4 py-2 justify-between h-16">
        <a href="/" className="w-6 h-6 bg-black">
          <img src={logo.src} alt="fce official logo" className="w-6 h-6 " />
        </a>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex flex-row items-center gap-2">
              <Building className="size-4" />
              Conócenos
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <img
                    src="https://images.pexels.com/photos/17060512/pexels-photo-17060512.jpeg"
                    alt="fce official logo"
                    className="h-full max-w-full rounded-md object-cover"
                  />
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Presentación</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
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
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Misión y visión</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Autoridades</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Docentes</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Organización</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Directorio</a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="hidden">
            <NavigationMenuTrigger>Organización</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Consejo de facultad</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Decanato</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Dirección Académica</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Vicedecanato Académico</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Vicedecanato de Investigación y Posgrado</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Dirección Administrativa</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Departamento Académico de Economía</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Instituto de Investigaciones Económica</a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex flex-row items-center gap-2">
              <GraduationCap className="size-4" />
              Escuelas
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Economía</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Economía Pública</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Economía Internacional</a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex flex-row items-center gap-2">
              <Megaphone className="size-4" />
              Difusión
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-5">
                  <img
                    src="https://images.pexels.com/photos/4947408/pexels-photo-4947408.jpeg"
                    alt="a megaphone handle by a hand"
                    className="h-full rounded-md object-cover"
                  />
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Noticias</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Eventos</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Publicaciones</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Galería de Sustentaciones</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="https://www.youtube.com/@facultaddecienciaseconomic8432">
                      <div className="text-sm leading-none font-medium flex flex-row items-center gap-2">
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>YouTube</title>
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        YouTube
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        Conferencias, actividades culturales y más.
                      </p>
                    </a>
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
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Acuerdos de Consejo de Facultad</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Resoluciones</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Promoción de docentes</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Ratificación de docentes</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">SINAD</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Informes económicos</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Plan estratégico</a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <a href="#">Manual de Organización y Funciones</a>
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
