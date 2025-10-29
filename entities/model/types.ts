export type Status = "todo" | "in_progress" | "done" | "archived";
export type Category = "work" | "personal" | "study" | "health" | "other";
export type Priority = "low" | "medium" | "high" | "urgent";

export interface Task {
  id: string;
  title: string;
  createdAt: string;
  updatedAt?: string;
  deadline?: string;
  status: Status;
  priority: Priority;
  isPinned: boolean;
  category?: Category;
  pinnedItems?: string[];
  description?: string;
  emoji?: string;
}
