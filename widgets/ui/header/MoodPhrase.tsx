import { getPhraseByDayTime } from "@/shared/lib";

export const MoodPhrase = () => {
  const phrase = getPhraseByDayTime();

  return (
    <p
      suppressHydrationWarning
      className="text-[10px] relative -top-1.5 z-0 text-red-900 font-pattaya"
    >
      {phrase}
    </p>
  );
};
