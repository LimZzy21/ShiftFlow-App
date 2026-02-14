"use client";

import { ReactNode } from "react";
import { useTelegramInit } from "@/shared/hooks/useTelegramInit";

export const TelegramProvider = ({ children }: { children: ReactNode }) => {
  useTelegramInit();

  return <>{children}</>;
};
