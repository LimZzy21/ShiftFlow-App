import { cn, formatDateHelper } from "@/shared/lib";
import { Pin } from "lucide-react";
import { PriorityBadge, StatusBadge } from "@task/ui/task-card";
import { Task } from "@/shared/types";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className={cn("bg-white rounded-xl ps-3 pe-2 min-h-7 py-1")}>
      <div className={"flex justify-between"}>
        <div>
          <h2 className={"text-sm text-zinc-700 font-ubuntu"}>
            {task.title} {task.emoji}
          </h2>
        </div>

        <div className={"my-auto relative flex items-center gap-x-1"}>
          {task.deadlineDate && (
            <div>
              <p className={"text-[10px]"}>
                {formatDateHelper(task.deadlineDate)}
              </p>
            </div>
          )}
          <StatusBadge status={task.status} />
          {task.priority && <PriorityBadge priority={task.priority} />}
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
