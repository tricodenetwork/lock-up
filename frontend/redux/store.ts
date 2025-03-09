import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import transactionReducer from "./slices/transactions";

export const store = configureStore({
  reducer: { Search: userReducer,transactions:transactionReducer  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
