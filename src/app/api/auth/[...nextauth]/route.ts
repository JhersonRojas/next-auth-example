// Paquetes de Next y React
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// configuración de NextAuth para el acceso en la web
const handler = NextAuth({
    providers: [
        // añadiendo el proovedor de Google para su acceso
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),

        // añadiendo el proovedor de propio para su acceso
        CredentialsProvider({
            id: "credentials-auth",
            name: "credentials-auth",
            credentials: {
                user: { label: "Nombre de usuario", type: "text" },
                password: { label: "Contraseña", type: "password" }
            },
            async authorize(credentials, req) {

                if (!credentials?.user || !credentials?.password)
                    throw new Error("Invalid credentials");

                const userFound = {
                    id: "1",
                    email: credentials.user,
                    name: "Default",
                    password: credentials.password
                };

                if (!userFound)
                    throw new Error("Invalid credentials");

                return userFound;
            }
        })
    ],

    // cambio de rutas para formularios custom
    pages: {
        signIn: "/sigin",
        signOut: "/auth",
    },

    // tipo de sesión que se utiliza en el proyecto
    session: {
        strategy: "jwt",
    },

    // cambios en los callbacks para alterar la respuesta
    callbacks: {
        async jwt({ token: payload, user }) {
            if (user) payload.user = user;
            return payload;
        },
        async session({ session, token }) {
            // console.log({ token: token, session: session });
            return session;
        }
    }
});

export { handler as GET, handler as POST };
