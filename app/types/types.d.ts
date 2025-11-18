declare type RootState = ReturnType<
  typeof import("../store/index").store.getState
>;
declare type AppDispatch = typeof import("../store/index").store.dispatch;
