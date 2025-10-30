import { cn, getItemByKey } from "@/shared/lib";
import { PRIORITY_COLORS, PRIORITY_ICONS } from "@task/model/priorityMap";
import { IconRenderer } from "@/shared/components/ui";
import { Priority } from "@/shared/types";

interface PriorityBadgeProps {
  priority: Priority;
}

export const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const priorityIcon = getItemByKey(priority, PRIORITY_ICONS);
  const priorityColor = getItemByKey(priority, PRIORITY_COLORS);

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full border-2 size-5 ",
        priorityColor,
      )}
    >
      <IconRenderer
        Icon={priorityIcon}
        className={cn("size-4", priorityColor)}
      />
    </div>
  );
};
