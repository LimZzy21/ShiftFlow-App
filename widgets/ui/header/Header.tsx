"use client";

import Image from "next/image";
import { MoodPhrase } from "@/widgets/ui/header/MoodPhrase";
import { selectAvatar } from "@user/model";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

export const Header = () => {
  const ava = useAppSelector(selectAvatar);

  return (
    <div className={"p-4 justify-between flex items-center"}>
      <div className={"relative w-2/3"}>
        <h1
          className={
            "text-3xl text-white relative text-shadow-2xs z-10 font-pattaya"
          }
        >
          ShiftFlow
        </h1>
        <MoodPhrase />
      </div>
      {ava ? (
        <Image
          className="rounded-full h-full shadow-md"
          src={ava}
          alt={`your's avatar`}
          width={32}
          height={32}
        />
      ) : null}
    </div>
  );
};
