import { type DefaultSession } from "next-auth";
type ExtendedUser = DefaultSession["user"] & {
  id: number;
  roleId: number;
  roleName: string;
};
declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
