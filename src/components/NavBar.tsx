"use client";

// Paquetes de Next y React
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

// Componente Navbar para navegar entre las paginas
export default function NavBar() {

  // estados de la sesión para modificar el componente
  const { data: session } = useSession();
  const url = usePathname().toString();

  // metodo para cierre de sesión en la web
  const handleLogout = () => {
    signOut({ callbackUrl: "/", redirect: true });
  };

  return (
    <nav className="bg-slate-900 w-full h-[10vh] px-10 flex justify-between items-center">
      <NextLink href={"/"}>
        <h1 className="text-center">
          Next-auth con <br className="sm:hidden" />
          Google y credenciales
        </h1>
      </NextLink>
      {
        url == "/sigin"
          ? <></>
          : <>
            {
              session
                ? <button onClick={handleLogout}>
                  <h1>
                    Cerrar Sesión
                  </h1>
                </button>
                : <button onClick={() => signIn()}>
                  <h1>
                    Acceder
                  </h1>
                </button>
            }
          </>
      }
    </nav>
  )
}
