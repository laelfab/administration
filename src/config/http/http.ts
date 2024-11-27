import axios from "axios";
import EndPointAPI from "@/src/config/http/api_end_point";

const GetAxios = axios.create({
  baseURL: EndPointAPI.API_URL,
  timeout: 60000,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
GetAxios.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function (req: any) {
    const token = localStorage.getItem("auth");
    if (token) {
      req.headers.authorization = `Bearer ${token}`;
    }
    return req;
  },
  function (err) {
    return Promise.reject(err);
  }
);
GetAxios.interceptors.response.use(null, (err) => {
  const error = {
    status: err.response?.status,
    original: err,
    validation: {},
    message: "",
  };

  switch (err.response?.status) {
    case 422:
      error.message = "unknown";
      break;
    case 403:
      error.message = "You're not allowed to do that";
      break;
    case 401:
      error.message = err.response.data.error;
      break;
    case 500:
      error.message = "Something went really bad Sorry";
      break;
    default:
      error.message = "Something went wrong. Please try again later";
      break;
  }
  return Promise.reject(error);
});
export const http = GetAxios;
export default http;
