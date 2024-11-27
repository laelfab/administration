"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
interface AuthProps {
  email: string;
  password: string;
}
export const loginAction = async ({ email, password }: AuthProps) => {
  try {
    await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }
    return { error: "erreur 500" };
  }
};

export const logoutAction = async () => {
  // localStorage.removeItem("auth");
  await signOut();
};
