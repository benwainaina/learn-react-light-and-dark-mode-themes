import { createSlice } from "@reduxjs/toolkit";
import { IAppStore, IAppThemeMode } from "./interfaces";

const initialState: IAppStore = {
  currentMode: "light",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentMode: (state: IAppStore, action: { payload: IAppThemeMode }) => {
      state.currentMode = action.payload;
    },
  },
});

export const { setCurrentMode } = appSlice.actions;

export const appReducer = appSlice.reducer;
