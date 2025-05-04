import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { SuiClient } from "@mysten/sui/client";

import clientConfig from "@/config/clientConfig";

export interface UserBalancesState {
  lockedSui: number;
  availableSui: number;
  loading: boolean;
  error: string | null;
}

const initialState: UserBalancesState = {
  lockedSui: 0,
  availableSui: 0,
  loading: false,
  error: null,
};

// Thunk to fetch both locked and available SUI
export const fetchUserBalances = createAsyncThunk<
  { lockedSui: number; availableSui: number },
  { address: string; client: SuiClient },
  { rejectValue: string }
>(
  "userBalances/fetchUserBalances",
  async ({ address, client }, { rejectWithValue }) => {
    try {
      // Fetch locked SUI
      let lockedSui = 0;
      const lockedSuiObj = (await client.getDynamicFieldObject({
        parentId: clientConfig.VAULT,
        name: { type: "address", value: address },
      })) as any;
      const lockedSuiId =
        lockedSuiObj.data?.content?.fields.value?.fields?.id.id;
      if (lockedSuiId) {
        const dynamicFields = await client.getDynamicFields({
          parentId: lockedSuiId,
        });
        for (const field of dynamicFields.data) {
          if (
            field.name.type === `${clientConfig.PACKAGE_ID}::lockup::SuiAmount`
          ) {
            const fieldObj = await client.getDynamicFieldObject({
              parentId: lockedSuiId,
              name: field.name,
            });
            if (
              fieldObj.data &&
              fieldObj.data.content &&
              "fields" in fieldObj.data.content
            ) {
              const coinFields = fieldObj.data.content.fields as any;
              if (
                coinFields.balance &&
                typeof coinFields.balance === "string"
              ) {
                lockedSui += Number(coinFields.balance) / 1_000_000_000;
              }
            }
          }
        }
      }

      // Fetch available SUI (sum of all SUI coins in wallet)
      let availableSui = 0;
      const coins = await client.getCoins({
        owner: address,
        coinType: "0x2::sui::SUI",
      });
      for (const coin of coins.data) {
        availableSui += Number(coin.balance) / 1_000_000_000;
      }

      return { lockedSui, availableSui };
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch balances");
    }
  }
);

const userBalancesSlice = createSlice({
  name: "userBalances",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserBalances.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserBalances.fulfilled,
        (
          state,
          action: PayloadAction<{ lockedSui: number; availableSui: number }>
        ) => {
          state.lockedSui = action.payload.lockedSui;
          state.availableSui = action.payload.availableSui;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(fetchUserBalances.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch balances";
      });
  },
});

export default userBalancesSlice.reducer;
