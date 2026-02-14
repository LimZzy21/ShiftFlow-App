import { configureStore } from "@reduxjs/toolkit";
import { taskSliceReducer } from "@task/model";
import { userSliceReducer } from "@user/model";

export const store = configureStore({
  reducer: {
    tasksState: taskSliceReducer,
    userState: userSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
