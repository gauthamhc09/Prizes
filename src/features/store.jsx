import { configureStore } from "@reduxjs/toolkit";
import prizesReducer from "./prizes/prizesSlice";

export const store = configureStore({
  reducer: prizesReducer,
});
