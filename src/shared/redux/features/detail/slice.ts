// Libs
import { createSlice } from "@reduxjs/toolkit";
import { Type } from "../../../constants/alert";
import type { RootState } from "../../store";

// Utils
import {
  addProductDetail,
  editProductDetail
} from "./calls";
import { IDetail } from '../../../../types/index';

// Define a type for the product state
interface DetailState {
  detail: {
    data?: IDetail | undefined;
    status: string;
    alert: {
      type?: Type;
      message: string;
    };
  };
}

// Define the initial state using that type
const initialState: DetailState = {
  detail: {
    data: undefined,
    status: '',
    alert: {
      message: ''
    },
  },
};

export const detailSlice = createSlice({
  name: "detail",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // STORE
    builder.addCase(addProductDetail.pending, (state) => {
      state.detail.status = "loading";
      state.detail.alert = initialState.detail.alert;
    });
    builder.addCase(addProductDetail.fulfilled, (state) => {
      state.detail.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully added product details",
      };
      state.detail.alert = alert;
    });
    builder.addCase(addProductDetail.rejected, (state) => {
      state.detail.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
      state.detail.alert = alert;
    });
    // UDPATE
    builder.addCase(editProductDetail.pending, (state) => {
      state.detail.status = "loading";
      state.detail.alert = initialState.detail.alert;
    });
    builder.addCase(editProductDetail.fulfilled, (state) => {
      state.detail.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully update the product details",
      };
      state.detail.alert = alert;
    });
    builder.addCase(editProductDetail.rejected, (state) => {
      state.detail.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
      state.detail.alert = alert;
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectDetail = (state: RootState) => state.detail.detail;

export default detailSlice.reducer;
