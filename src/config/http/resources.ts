import http from "./http";

interface GetProps {
  pathURL: string;
  request?: unknown;
}
async function POST({ pathURL, request }: GetProps) {
  const { data } = await http.post(pathURL, request);
  return data;
}
async function GET({ pathURL, request }: GetProps) {
  const { data } = await http.get(pathURL + request);
  return data;
}

export { POST, GET };
