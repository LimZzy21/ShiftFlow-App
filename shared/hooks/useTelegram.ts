"use client";

import { getTelegramApp } from "@/shared/lib/telegram/webApp";
import { useEffect, useState } from "react";

export const useTelegram = () => {
  const [tg, setTg] = useState<TelegramWebApp | null>(null);
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    const checkTelegram = () => {
      const telegram = getTelegramApp();
      if (!telegram) return false;

      setTg(telegram);

      const telegramUser = telegram.initDataUnsafe?.user ?? null;
      setUser(telegramUser);

      return true;
    };

    if (checkTelegram()) {
      const timer = setTimeout(checkTelegram, 300);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      if (checkTelegram()) {
        clearInterval(interval);
      }
    }, 100);

    const timeout = setTimeout(() => clearInterval(interval), 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return { tg, user };
};
