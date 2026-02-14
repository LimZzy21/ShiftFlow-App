declare global {
  interface TelegramWebApp {
    ready: () => void;
    expand: () => void;
    initDataUnsafe?: {
      user?: TelegramUser;
    };
    initData: string;
  }

  interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    photo_url: string;
  }

  interface TelegramWindow extends Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}

export {};
