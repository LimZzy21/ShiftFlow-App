import { getTelegramApp } from "@/shared/lib/telegram/webApp";

export const telegram = {
  getInitData(): string | undefined {
    return getTelegramApp()?.initData;
  },
};
