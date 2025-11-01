import { Category, Priority, Status } from "@/shared/types";

export const TASK_PRIORITY: Priority[] = ["low", "medium", "high", "urgent"];
export const TASK_CATEGORY: Category[] = [
  "work",
  "personal",
  "study",
  "health",
  "other",
];
export const TASK_STATUS: Status[] = [
  "todo",
  "in_progress",
  "done",
  "archived",
];

export const TASK_CATEGORY_MAP = [
  { value: null, label: "Category" },
  { value: "work", label: "Work" },
  {
    value: "personal",
    label: "Personal",
  },
  { value: "study", label: "Study" },
  { value: "health", label: "Health" },
  { value: "other", label: "Other" },
];
export const TASK_PRIORITY_MAP = [
  { value: null, label: "Priority" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  {
    value: "high",
    label: "High",
  },
  { value: "urgent", label: "Urgent" },
];
