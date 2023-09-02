import NextImg from "next/image"

export default function App() {
  return (
    <span className="w-full h-full grid justify-center items-center">

      <article className="m-auto">
        <h2 className="text-base md:text-2xl my-4">
          Contenido principal de la página
        </h2>

        <NextImg
          width={400}
          height={400}
          src={"/general.svg"}
          alt={"imagen de relleno"}
          className="w-[70vw] h-[70nw] md:w-auto md:h-auto mx-auto block"
        />
      </article>
    </span>
  )
}
