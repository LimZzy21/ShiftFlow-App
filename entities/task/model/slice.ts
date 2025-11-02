import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { CreateTaskPayload, Task } from "@task/model/types";

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    {
      id: "1",
      title: "Drink more water",
      createdAt: new Date().toISOString(),
      deadlineDate: "2025-11-01T12:00:00Z",
      status: "todo",
      priority: "low",
      isPinned: true,
      emoji: "💧",
      category: "health",
      description: "Hey you, just drink more water than you do it usually",
    },
    {
      id: "2",
      title: "Review PR",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: "in_progress",
      priority: "high",
      isPinned: false,
      category: "work",
      description: "It was hard, but u need to do it ;)",
    },
    {
      id: "3",
      title: "Workout ️",
      createdAt: new Date().toISOString(),
      status: "done",
      priority: "medium",
      isPinned: false,
      category: "health",
    },
    {
      id: "4",
      title: "Learn some new stuff ️",
      createdAt: new Date().toISOString(),
      status: "done",
      priority: "urgent",
      isPinned: false,
      category: "health",
    },
  ],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: {
      reducer(state, action: PayloadAction<Task>) {
        state.tasks.push(action.payload);
      },
      prepare(taskData: CreateTaskPayload) {
        return {
          payload: {
            ...taskData,
            id: nanoid(),
            createdAt: new Date().toISOString(),
          } as Task,
        };
      },
    },
  },
});

export const { createTask } = taskSlice.actions;
export default taskSlice.reducer;
