export const selectUser = (state: RootState) => state.userState.user;
export const selectAvatar = (state: RootState) =>
  state.userState.user?.photo_url;
