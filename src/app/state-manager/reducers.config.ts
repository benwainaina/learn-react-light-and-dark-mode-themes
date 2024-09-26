import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { appReducer } from "./slice";

export const appReducerConfig = persistReducer(
  {
    key: "root",
    storage,
  },
  appReducer
);
