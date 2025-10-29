"use client";

import { getTelegramApp } from "@/shared/lib/telegram/webApp";

export const useTelegram = () => {
  const tg = getTelegramApp();
  const user = tg?.initDataUnsafe?.user;
  console.log("tg: ", tg);
  return { tg, user };
};
