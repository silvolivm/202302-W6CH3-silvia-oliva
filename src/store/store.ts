import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "../reducer/phone.reducer";

export const store = configureStore({
  reducer: {
    phone: phoneReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
