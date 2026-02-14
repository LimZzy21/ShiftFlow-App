import { axiosInstance } from "@/shared/api/axios";
import { telegram } from "@/shared/api/telegram";

export const attachTelegramInitData = () => {
  axiosInstance.interceptors.request.use((config) => {
    const initData = telegram.getInitData();
    if (initData) {
      config.headers?.set?.("X-Telegram-Init-Data", initData);
    }
    return config;
  });
};
