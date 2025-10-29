import { tasksMock } from "@/shared/mocks/tasks";
import { TaskCard } from "@/entities/ui/TaskCard";

export const TaskList = () => {
  return (
    <div className={"space-y-4 px-4"}>
      {tasksMock.map((item) => (
        <TaskCard key={item.id} task={item} />
      ))}
    </div>
  );
};
