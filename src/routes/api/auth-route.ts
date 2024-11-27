import EndPointAPI from "@/src/config/http/api_end_point";
export const AUTH_CURRENT_URL =
  EndPointAPI.API_V1_URL + "/auth/users/getCurrentUserInfos";

export const AUTH_LOGIN_URL = EndPointAPI.API_V1_URL + "/auth/users/login";
export const AUTH_VERIFY_URL =
  EndPointAPI.API_V1_URL + "/auth/users/verifyPasswordResetToken";
export const AUTH_VERIFY_EMAIL_URL =
  EndPointAPI.API_V1_URL + "/auth/users/sendPasswordResetEmail";
export const AUTH_RESET_PASSWORD_URL =
  EndPointAPI.API_V1_URL + "/auth/users/passwordReset";
export const AUTH_CHANGE_PASSWORD_URL =
  EndPointAPI.API_V1_URL + "/auth/users/passwordUpdate/";
export const AUTH_LOGOUT_URL = EndPointAPI.API_V1_URL + "/auth/users/logout";
