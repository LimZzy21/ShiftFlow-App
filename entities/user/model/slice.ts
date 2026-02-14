import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: TelegramUser | null;
  isLoaded: boolean;
}

const initialState: UserState = {
  user: null,
  isLoaded: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<TelegramUser>) {
      state.user = action.payload;
      state.isLoaded = true;
    },
    clearUser(state) {
      state.user = null;
      state.isLoaded = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
