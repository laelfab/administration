import { AUTH_CURRENT_URL, AUTH_LOGIN_URL } from "@/src/routes/api/auth-route";
import { GET, POST } from "@/src/config/http/resources";

export const authLoginRepository = async ({ request }: { request: any }) => {
  const { data } = await POST({ pathURL: AUTH_LOGIN_URL, ressources: request });
  return data;
};

export const authCurrentRepository = async () => {
  const { data } = await GET({
    pathURL: AUTH_CURRENT_URL,
  });
  return data.data;
};
