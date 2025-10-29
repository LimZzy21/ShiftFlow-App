export function getTelegramApp() {
  if (typeof window === "undefined") return null;
  return (window as TelegramWindow).Telegram?.WebApp ?? null;
}
