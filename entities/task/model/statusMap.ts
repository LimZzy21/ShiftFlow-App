import { Status } from "@/shared/types";

export const STATUS_LABELS: Record<Status, string> = {
  todo: "Todo",
  in_progress: "In Progress",
  done: "Done",
  archived: "Archived",
};

export const STATUS_COLORS: Record<Status, string> = {
  todo: "bg-blue-200",
  in_progress: "bg-yellow-200",
  done: "bg-green-200",
  archived: "bg-gray-200",
};
