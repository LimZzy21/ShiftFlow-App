"use client";

import { useTelegram } from "@/shared/hooks/useTelegram";
import Image from "next/image";
import { MoodPhrase } from "@/widgets/ui/header/MoodPhrase";

export const Header = () => {
  const { user } = useTelegram();

  return (
    <div className={"p-4 justify-between flex items-center"}>
      <div className={"relative w-2/3"}>
        <h1 className={"text-3xl text-white relative text-shadow-2xs z-10"}>
          ShiftFlow
        </h1>
        <MoodPhrase />
      </div>
      {user?.photo_url ? (
        <Image
          key={user.photo_url}
          className="rounded-full h-full shadow-md"
          src={user.photo_url}
          alt={`${user.first_name}'s avatar`}
          width={32}
          height={32}
        />
      ) : null}
    </div>
  );
};
