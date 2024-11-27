class EndPointAPI {
  static API_URL: string = process.env.NEXT_PUBLIC_API_URL as string;
  static APP_URL: string = process.env.NEXT_PUBLIC_NEXTAUTH_URL as string;
  static API_V1_URL: string = "/api";
}
export default EndPointAPI;
