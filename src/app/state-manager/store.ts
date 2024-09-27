/**
 * This is the main entry point for the state manager
 */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { appReducer } from "./slice";
import hardSet from "redux-persist/es/stateReconciler/hardSet";

export const STORE = configureStore({
  reducer: persistReducer(
    {
      key: "root",
      storage,
      stateReconciler: hardSet,
    },
    appReducer
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        /**
         * We need to disable the below actions as per the guideling from
         * redux-toolkit usage with redux-persis
         *
         * https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
         */
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk: {
        extraArgument: {},
      },
    }),
});

export const STORE_PERSISTOR = persistStore(STORE);
