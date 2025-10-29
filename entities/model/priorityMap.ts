import type { Priority } from "./types";
import { ChevronUp, ChevronDown, Minus, ChevronsUp } from "lucide-react";

export const PRIORITY_LABELS: Record<Priority, string> = {
  urgent: "urgent",
  low: "Low",
  medium: "Medium",
  high: "High",
};

export const PRIORITY_ICONS: Record<Priority, React.ElementType> = {
  urgent: ChevronsUp,
  low: ChevronDown,
  medium: Minus,
  high: ChevronUp,
};

export const PRIORITY_COLORS: Record<Priority, string> = {
  urgent: "border-red-600",
  low: "border-green-500",
  medium: "border-yellow-500",
  high: "border-orange-500",
};
