"use client";

import { TaskCard } from "@task/ui/task-card/TaskCard";
import { selectAllTasks } from "@task/model";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

export const TaskList = () => {
  const tasks = useAppSelector(selectAllTasks);

  return (
    <div className={"space-y-2 px-4"}>
      {tasks.map((item) => (
        <TaskCard key={item.id} task={item} />
      ))}
    </div>
  );
};
