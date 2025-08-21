import {
  Building,
  ExternalLink,
  GraduationCap,
  Megaphone,
  Menu,
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

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBarMenu = () => {
  return (
    <nav className="sticky top-0 z-20  w-screen bg-background px-6 py-2">
      <div className="flex  items-center justify-between">
        <a href="/" className="size-8">
          <img src="/favicon.svg" alt="fce official logo" className="size-8" />
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="">
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
                    <NavigationMenuLink asChild>
                      <a href="#">Presentación</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
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
                      <a href="#">Misión y visión</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Autoridades</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Docentes</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Organización</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Directorio</a>
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
                    <NavigationMenuLink asChild>
                      <a href="#">Economía</a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#">Economía Pública</a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
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
                    <NavigationMenuLink asChild>
                      <a href="#">Noticias</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Eventos</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Publicaciones</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Galería de Sustentaciones</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
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
                    <NavigationMenuLink asChild>
                      <a href="#">Acuerdos de Consejo de Facultad</a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#">Resoluciones</a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#">Promoción de docentes</a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#">Ratificación de docentes</a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#">SINAD</a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#">Informes económicos</a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#">Plan estratégico</a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#">Manual de Organización y Funciones</a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="/public">
                  <div className={navigationMenuTriggerStyle()}>
                    Contáctanos
                  </div>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] px-6 sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menú de navegación</SheetTitle>
              <SheetDescription>
                Explora las diferentes secciones de la FCE.
              </SheetDescription>
            </SheetHeader>
            <ul className="flex flex-col gap-4 py-4">
              <li>
                <a href="#">
                  <div className="flex flex-row items-center gap-2">
                    <Building size={16} />
                    Conócenos
                  </div>
                </a>
                <ul className="mt-2 ml-4 flex flex-col gap-2 border-l pl-4 text-sm text-gray-600">
                  <li>
                    <a href="#">Presentación</a>
                  </li>
                  <li>
                    <a href="#">Historia</a>
                  </li>
                  <li>
                    <a href="#">Misión y visión</a>
                  </li>
                  <li>
                    <a href="#">Autoridades</a>
                  </li>
                  <li>
                    <a href="#">Docentes</a>
                  </li>
                  <li>
                    <a href="#">Organización</a>
                  </li>
                  <li>
                    <a href="#">Directorio</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <div className="flex flex-row items-center gap-2">
                    <GraduationCap size={16} />
                    Escuelas
                  </div>
                </a>
                <ul className="mt-2 ml-4 flex flex-col gap-2 border-l pl-4 text-sm text-gray-600">
                  <li>
                    <a href="#">Economía</a>
                  </li>
                  <li>
                    <a href="#">Economía Pública</a>
                  </li>
                  <li>
                    <a href="#">Economía Internacional</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <div className="flex flex-row items-center gap-2">
                    <Megaphone size={16} />
                    Difusión
                  </div>
                </a>
                <ul className="mt-2 ml-4 flex flex-col gap-2 border-l pl-4 text-sm text-gray-600">
                  <li>
                    <a href="#">Noticias</a>
                  </li>
                  <li>
                    <a href="#">Eventos</a>
                  </li>
                  <li>
                    <a href="#">Publicaciones</a>
                  </li>
                  <li>
                    <a href="#">Galería de Sustentaciones</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@facultaddecienciaseconomic8432">
                      <div className="flex flex-row items-center gap-2">
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4"
                        >
                          <title>YouTube</title>
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        YouTube
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <div className="flex flex-row items-center gap-2">
                    <Sparkles size={16} />
                    Transparencia
                  </div>
                </a>
                <ul className="mt-2 ml-4 flex flex-col gap-2 border-l pl-4 text-sm text-gray-600">
                  <li>
                    <a href="#">Acuerdos de Consejo de Facultad</a>
                  </li>
                  <li>
                    <a href="#">Resoluciones</a>
                  </li>
                  <li>
                    <a href="#">Promoción de docentes</a>
                  </li>
                  <li>
                    <a href="#">Ratificación de docentes</a>
                  </li>
                  <li>
                    <a href="#">SINAD</a>
                  </li>
                  <li>
                    <a href="#">Informes económicos</a>
                  </li>
                  <li>
                    <a href="#">Plan estratégico</a>
                  </li>
                  <li>
                    <a href="#">Manual de Organización y Funciones</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/public">
                  <div className="flex flex-row items-center gap-2">
                    <ExternalLink size={16} />
                    Contáctanos
                  </div>
                </a>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBarMenu;
