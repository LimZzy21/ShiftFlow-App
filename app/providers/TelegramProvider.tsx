"use client";

import { useEffect } from "react";

export const TelegramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const tg = (window as TelegramWindow).Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    tg.expand();
    console.log("Telegram :", tg);
  }, []);

  return <>{children}</>;
};
