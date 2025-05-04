import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import transactionReducer from "./slices/transactions";
import paymentReducer from "./slices/payment";
import userBalancesReducer from "./slices/userBalancesSlice";

export const store = configureStore({
  reducer: {
    Search: userReducer,
    transactions: transactionReducer,
    payment: paymentReducer,
    userBalances: userBalancesReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
