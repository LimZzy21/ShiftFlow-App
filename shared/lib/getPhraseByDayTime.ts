import { phrases, phrasesChill, phrasesFunny } from "@/shared/const/";
import { getRandomIndex } from "@/shared/lib";

export const getPhraseByDayTime = () => {
  const hour = new Date().getHours();
  let phrasesToSelect: string[];

  if (hour >= 6 && hour <= 12) {
    phrasesToSelect = phrases;
  } else if (hour <= 18) {
    phrasesToSelect = phrasesFunny;
  } else {
    phrasesToSelect = phrasesChill;
  }
  return phrasesToSelect[getRandomIndex(phrasesToSelect.length)];
};
