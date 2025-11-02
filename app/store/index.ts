import { configureStore } from "@reduxjs/toolkit";
import { taskSliceReducer } from "@task/model";

export const store = configureStore({
  reducer: {
    tasksState: taskSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
