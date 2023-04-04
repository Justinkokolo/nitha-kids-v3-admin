// Libs
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Type } from "../../../constants/alert";
import type { RootState } from "../../store";

// Utils
import {
  loadCurrencies,
  addCurrency,
  deleteCurrency,
  updateCurrency,
} from "./calls";

// Define a type for the currency state
interface CurrencyState {
  currencies: {
    data: {
      name: string;
      symbol: string;
      id: number;
    }[];
    status: string;
    alert: {
      type?: Type;
      message: string;
    };
  };
  currency: {
    name: string;
    symbol: string;
    id: number;
  } | null;
}

// Define the initial state using that type
const initialState: CurrencyState = {
  currencies: {
    data: [],
    status: "",
    alert: {
      message: "",
    },
  },
  currency: null,
};

export const currencySlice = createSlice({
  name: "currency",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurrency: (
      state,
      action: PayloadAction<{
        name: string;
        symbol: string;
        id: number;
      } | null>
    ) => {
      state.currency = action.payload;
    },
    setCurrencies: (
      state,
      action: PayloadAction<{
        name: string;
        symbol: string;
        id: number;
      }[]>
    ) => {
      state.currencies = {
        ...state.currencies,
        data: action.payload
      };
    },
  },
  extraReducers: (builder) => {
    // GET
    builder.addCase(loadCurrencies.pending, (state, action) => {
      state.currencies.status = "loading";
      state.currencies.alert = initialState.currencies.alert;
    });
    builder.addCase(loadCurrencies.fulfilled, (state, action) => {
      state.currencies.data = action.payload["currencies"];
      state.currencies.status = "success";
    });
    builder.addCase(loadCurrencies.rejected, (state, action) => {
      state.currencies.status = "failed";
    });
    // STORE
    builder.addCase(addCurrency.pending, (state, action) => {
      state.currencies.status = "loading";
      state.currencies.alert = initialState.currencies.alert;
    });
    builder.addCase(addCurrency.fulfilled, (state, action) => {
      state.currencies.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully added a currency",
      };
      state.currencies.alert = alert;
    });
    builder.addCase(addCurrency.rejected, (state, action) => {
      state.currencies.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
    });
    // DELETE
    builder.addCase(deleteCurrency.pending, (state, action) => {
      state.currencies.status = "loading";
      state.currencies.alert = initialState.currencies.alert;
    });
    builder.addCase(deleteCurrency.fulfilled, (state, action) => {
      state.currencies.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully delete the currency",
      };
      state.currencies.alert = alert;
    });
    builder.addCase(deleteCurrency.rejected, (state, action) => {
      state.currencies.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
    });
    // UPDATE
    builder.addCase(updateCurrency.pending, (state, action) => {
      state.currencies.status = "loading";
      state.currencies.alert = initialState.currencies.alert;
    });
    builder.addCase(updateCurrency.fulfilled, (state, action) => {
      state.currencies.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully updated the currency",
      };
      state.currencies.alert = alert;
    });
    builder.addCase(updateCurrency.rejected, (state, action) => {
      state.currencies.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
    });
  },
});

export const { setCurrency, setCurrencies } = currencySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrency = (state: RootState) => state.currency.currencies;

export default currencySlice.reducer;
