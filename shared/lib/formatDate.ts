import { formatDate } from "date-fns";

export const formatDateHelper = (
  date: string | null,
  format = "dd-MM-yyyy",
) => {
  if (!date) return "";
  return formatDate(date, format);
};
