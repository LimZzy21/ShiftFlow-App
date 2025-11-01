import { CreateTaskForm } from "@/features/task/create/ui/CreateTaskForm";

export const CreateTask = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border  border-white/20 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.25)] ">
      <CreateTaskForm />
    </div>
  );
};
