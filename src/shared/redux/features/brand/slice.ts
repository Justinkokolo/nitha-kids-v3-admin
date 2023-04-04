// Libs
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Type } from "../../../constants/alert";
import type { RootState } from "../../store";

// Utils
import { loadBrands, addBrand, deleteBrand, updateBrand } from "./calls";

// Define a type for the brand state
interface BrandState {
  brands: {
    data: {
      name: string;
      id: number;
      updated_at?: string;
    }[];
    status: string;
    alert: {
      type?: Type;
      message: string;
    };
  };
  brand: {
    name: string;
    id: number;
    updated_at?: string;
  } | null;
}

// Define the initial state using that type
const initialState: BrandState = {
  brands: {
    data: [],
    status: "",
    alert: {
      message: "",
    },
  },
  brand: null,
};

export const brandSlice = createSlice({
  name: "brand",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setBrand: (
      state,
      action: PayloadAction<{
        name: string;
        id: number;
      } | null>
    ) => {
      state.brand = action.payload;
    },
    setBrands: (
      state,
      action: PayloadAction<{
        name: string;
        id: number;
      }[]>
    ) => {
      state.brands = {
        ...state.brands,
        data: action.payload
      };
    },
  },
  extraReducers: (builder) => {
    // GET
    builder.addCase(loadBrands.pending, (state, action) => {
      state.brands.status = "loading";
      state.brands.alert = initialState.brands.alert;
    });
    builder.addCase(loadBrands.fulfilled, (state, action) => {
      state.brands.data = action.payload["brands"];
      state.brands.status = "success";
    });
    builder.addCase(loadBrands.rejected, (state, action) => {
      state.brands.status = "failed";
    });
    // STORE
    builder.addCase(addBrand.pending, (state, action) => {
      state.brands.status = "loading";
      state.brands.alert = initialState.brands.alert;
    });
    builder.addCase(addBrand.fulfilled, (state, action) => {
      state.brands.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully added a brand",
      };
      state.brands.alert = alert;
    });
    builder.addCase(addBrand.rejected, (state, action) => {
      state.brands.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
    });
    // DELETE
    builder.addCase(deleteBrand.pending, (state, action) => {
      state.brands.status = "loading";
      state.brands.alert = initialState.brands.alert;
    });
    builder.addCase(deleteBrand.fulfilled, (state, action) => {
      state.brands.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully delete the brand",
      };
      state.brands.alert = alert;
    });
    builder.addCase(deleteBrand.rejected, (state, action) => {
      state.brands.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
    });
    // UPDATE
    builder.addCase(updateBrand.pending, (state, action) => {
      state.brands.status = "loading";
      state.brands.alert = initialState.brands.alert;
    });
    builder.addCase(updateBrand.fulfilled, (state, action) => {
      state.brands.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully updated the brand",
      };
      state.brands.alert = alert;
    });
    builder.addCase(updateBrand.rejected, (state, action) => {
      state.brands.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
    });
  },
});

export const { setBrand, setBrands } = brandSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBrand = (state: RootState) => state.brand.brands;

export default brandSlice.reducer;
