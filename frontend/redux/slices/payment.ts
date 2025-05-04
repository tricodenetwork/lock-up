import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Slip = {
  sendAmount: number;
  senderCountry: string;
  receiverCountry: string;
  receiverAmount: number;
  sendAmountSui: number;
};

const initialState = {
  sendAmount: 0,
  senderCountry: "",
  receiverAmount: 0,
  receiverCountry: "",
} as Slip;

export const section = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setSlip: (state, action: PayloadAction<Slip>) => {
      state.sendAmount = action.payload.sendAmount;
      state.senderCountry = action.payload.senderCountry;
      state.receiverAmount = action.payload.receiverAmount;
      state.receiverCountry = action.payload.receiverCountry;
      state.sendAmountSui = action.payload.sendAmountSui;
    },
    resetSlip: (state) => {
      state = initialState;
    },
  },
});

export const { setSlip, resetSlip } = section.actions;
export default section.reducer;
