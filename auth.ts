import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AuthRoutes } from "./src/routes/app/autorize";
import { AuthLoginFormResolver } from "@/src/schemas/auth_schema";
import {
  DEFAULT_REDIRECT_USER_LOGGED,
  LOGIN_ROUTE,
} from "@/src/routes/app/all-route";
export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [
    Credentials({
      authorize: async (credentials) => {
        let user = null;

        const validateFields = AuthLoginFormResolver.safeParse(credentials);
        if (!validateFields.success) {
          throw new Error("Les indentifiants sont incorrectes!");
        }
        user = {
          //id: 1,
          name: "John DOE",
          email: "jhondoe@gmail.com",
          //role: "admin",
        };
        //localStorage.setItem("auth", "jhondoe@gmail.com");
        if (!user) {
          return null;
        }
        return user;
      },
    }),
  ],
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      const isLogged = !!auth?.user;
      const { pathname } = nextUrl;
      if (AuthRoutes.includes(pathname)) {
        if (isLogged) {
          return Response.redirect(
            new URL(DEFAULT_REDIRECT_USER_LOGGED, nextUrl)
          );
        }
        return true;
      }

      if (!isLogged) {
        return Response.redirect(new URL(LOGIN_ROUTE, nextUrl));
      }

      return isLogged;
    },
  },
  pages: {
    signIn: LOGIN_ROUTE,
    signOut: LOGIN_ROUTE,
    //error: "/error",
  },
  secret: process.env.AUTH_SECRET,
});
