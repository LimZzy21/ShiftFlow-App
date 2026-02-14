"use client";

import { useEffect } from "react";
import { setUser } from "@/entities/user/model/slice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppSelector";

export const useTelegramInit = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const tg = (window as TelegramWindow).Telegram?.WebApp;

    if (!tg) return;
    tg.ready();
    tg.expand();

    const user = tg.initDataUnsafe?.user;

    if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch]);
};
