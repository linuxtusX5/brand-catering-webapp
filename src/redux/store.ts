import { createSlice, configureStore } from "@reduxjs/toolkit";

// Define the state type
interface AuthState {
  isLogin: boolean;
}

// Initial state
const initialState: AuthState = {
  isLogin: false,
};

// Create slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

// Export actions
export const authActions = authSlice.actions;

// Create and export the store
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer, // important to use a key here
  },
});

// Export RootState and AppDispatch for use in your app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
