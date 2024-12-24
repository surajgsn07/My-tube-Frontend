import { getCookie } from "./axios/cookieFunc";

export const mainName = "Watch-IT";
export const request = "http://localhost:8000/api/v1";

export const token =  getCookie("accessToken")