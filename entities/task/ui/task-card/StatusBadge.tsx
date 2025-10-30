import { STATUS_COLORS, STATUS_LABELS } from "@task/model/statusMap";
import { cn, getItemByKey } from "@/shared/lib";
import { Status } from "@/shared/types";

interface StatusBadgeProps {
  status: Status;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const taskStatus = getItemByKey(status, STATUS_LABELS);
  const color = getItemByKey(status, STATUS_COLORS);
  return (
    <div className={cn("px-1.5 rounded-xl", color)}>
      <p className={cn("text-[12px] ")}>{taskStatus}</p>
    </div>
  );
};
