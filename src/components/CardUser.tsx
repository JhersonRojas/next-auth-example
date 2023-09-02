"use client";

// Paquetes de Next y React
import { useSession } from "next-auth/react";
import NextImg from "next/image";

// Componente para la pagina restringida y enseñar los datos del usuario que ingreso
export default function CardUser() {

  // estados de la sesión del usuario
  const { data: session } = useSession()

  /* eslint-disable @next/next/no-img-element */
  return (
    <>
      {
        !session?.user
          ? <></>
          :
          <div className="bg-slate-900 w-[80vw] md:w-[25vw] h-[60vh] px-6 py-8 rounded md:grid">
            <label htmlFor="image" className="text-slate-400 text-center">
              Avatar
              {
                session.user?.image
                  ? <img
                    width={250}
                    height={250}
                    id="image"
                    src={session.user?.image}
                    alt={session.user.name ?? ""}
                    className="w-auto h-auto mx-auto my-2 mb-4 rounded-[50%]"
                  />
                  : <NextImg
                    width={100}
                    height={100}
                    id="image"
                    src={"/avatar.svg"}
                    alt={"avatar default"}
                    className="bg-white w-[10rem] h-[10rem] mx-auto my-2 mb-4 rounded-[50%]"
                  />
              }
            </label>

            <label htmlFor="user" className="text-slate-400 text-sm h-auto">
              Nombre
              <h2
                id="user"
                className="text-white text-xl mb-4"
              >
                {session.user?.name}
              </h2>
            </label>

            <label htmlFor="email" className="text-slate-400 text-sm h-auto">
              Correo
              <h2
                id="email"
                className="text-white text-xl"
              >
                {session.user?.email}
              </h2>
            </label>
          </div>
      }
    </>
  )
}
