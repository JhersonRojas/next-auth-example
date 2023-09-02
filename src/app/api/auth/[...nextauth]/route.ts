import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
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
    pages: {
        signIn: "/sigin",
        signOut: "/auth",
    },
    session: {
        strategy: "jwt",
    },
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
