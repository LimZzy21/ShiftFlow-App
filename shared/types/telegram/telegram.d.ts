declare global {
  interface TelegramWebApp {
    ready: () => void;
    expand: () => void;
    initDataUnsafe?: {
      user?: {
        id: number;
        first_name: string;
        last_name?: string;
        username?: string;
        language_code?: string;
      };
    };
  }

  interface TelegramWindow extends Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}

export {};
