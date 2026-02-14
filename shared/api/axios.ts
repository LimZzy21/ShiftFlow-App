import axios from "axios";
import { attachTelegramInitData } from "@/shared/api/interceptors/telegramInitData";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: process.env.NEXT_PUBLIC_API_TIMEOUT
    ? Number(process.env.NEXT_PUBLIC_API_TIMEOUT)
    : 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

attachTelegramInitData();
