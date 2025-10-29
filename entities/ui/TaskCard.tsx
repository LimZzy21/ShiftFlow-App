import { Task } from "@/entities";
import { cn, formatDate, getItemByKey } from "@/shared/lib";
import { Pin } from "lucide-react";
import { STATUS_COLORS, STATUS_LABELS } from "@/entities/model";
import { PRIORITY_ICONS, PRIORITY_COLORS } from "@/entities/model/";
import { IconRenderer } from "@/shared/components/ui";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const status = getItemByKey(task.status, STATUS_LABELS);
  const color = getItemByKey(task.status, STATUS_COLORS);
  const priorityIcon = getItemByKey(task.priority, PRIORITY_ICONS);
  const priorityColor = getItemByKey(task.priority, PRIORITY_COLORS);

  return (
    <div
      className={cn(
        "bg-white rounded-xl ps-3 pe-2 min-h-7 py-1",
        task.isPinned && "border-b-green-600 border-x-green-600 border-2",
      )}
    >
      <div className={"flex justify-between"}>
        <div>
          <h2 className={"text-sm text-zinc-700"}>
            {task.title} {task.emoji}
          </h2>
        </div>

        <div className={"my-auto relative flex items-center gap-x-1"}>
          {task.deadline && (
            <div>
              <p className={"text-[10px]"}>{formatDate(task.deadline)}</p>
            </div>
          )}

          <div className={cn("px-1.5 rounded-xl", color)}>
            <p className={cn("text-[12px] ")}>{status}</p>
          </div>
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
          {task.isPinned && (
            <Pin
              className={
                "absolute -right-3 -top-3 rotate-45 text-red-600 fill-red-300"
              }
              size={"16"}
            />
          )}
        </div>
      </div>

      <div className={"ps-2"}>
        <p className={"text-[12px]"}>{task.description}</p>
      </div>
    </div>
  );
};
