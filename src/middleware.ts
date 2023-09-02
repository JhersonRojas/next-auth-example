export { default } from "next-auth/middleware"

// Configuración de paths restringidos
export const config = {
    matcher: ["/dashboard/:path*", "/api/users/:path*"]
}
