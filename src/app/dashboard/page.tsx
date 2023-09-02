// Componentes y/o estilos
import CardUser from "@/components/CardUser"

// pagina restringida a menos de tener una sesión activa
export default function Dashboard() {
  return (
    <span className="w-full h-full flex justify-center items-center">
      <CardUser />
    </span>
  )
}
