"use client";

import { getTelegramApp } from "@/shared/lib/telegram/webApp";

export const useTelegram = () => {
  const tg = getTelegramApp();
  const user = tg?.initDataUnsafe?.user ?? null;

  return {
    tg,
    user,
    isTelegram: Boolean(tg),
  };
};
