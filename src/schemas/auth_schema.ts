import { z } from "zod";

//-*-*-* Auth(user) login schema *-*-*-
export const AuthLoginFormResolver = z.object({
  email: z
    .string({ required_error: "L'email est requis" })
    .min(1, { message: "L'email est requis" })
    .email({ message: "L'email invalide" }),
  password: z
    .string({ required_error: "Le mot de passe est requis" })
    .min(1, { message: "Le mot de passe est requis" })
    .min(8, { message: "Le mot de passe doit avoir aumoin 8 caractères" }),
});
export type AuthLoginValueSchema = z.infer<typeof AuthLoginFormResolver>;
