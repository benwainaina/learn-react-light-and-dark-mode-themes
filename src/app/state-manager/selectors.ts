import { createSelector } from "@reduxjs/toolkit";
import { IAppStore } from "./interfaces";

/**
 * pick the root app selector
 */
const appSelector = (appStore: IAppStore) => appStore;

/**
 * select the current mode that the user is in
 */
export const selectCurrentMode = createSelector(
  appSelector,
  (state) => state.currentMode
);
