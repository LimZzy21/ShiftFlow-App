import { tasksMock } from "@/shared/mocks/tasks";
import { TaskCard } from "@task/ui/task-card/TaskCard";

export const TaskList = () => {
  return (
    <div className={"space-y-2 px-4"}>
      {tasksMock.map((item) => (
        <TaskCard key={item.id} task={item} />
      ))}
    </div>
  );
};
