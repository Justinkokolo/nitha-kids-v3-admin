// Libs
import { createSlice } from "@reduxjs/toolkit";
import { Type } from "../../../constants/alert";
import type { RootState } from "../../store";

// Utils
import { IOrder } from "../../../../types";
import { loadOrders, createOrder } from './calls';

// Define a type for the brand state
interface OrderState {
  orders: {
    data: IOrder[];
    status: string;
    alert: {
      type?: Type;
      message: string;
    };
  };
  order: IOrder | null;
}

// Define the initial state using that type
const initialState: OrderState = {
  orders: {
    data: [],
    status: "",
    alert: {
      message: "",
    },
  },
  order: null,
};

export const orderSlice = createSlice({
  name: "order",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder.addCase(loadOrders.pending, (state) => {
      state.orders.status = "loading";
    });
    builder.addCase(loadOrders.fulfilled, (state, action) => {
      state.orders.data = action.payload["orders"];
      state.orders.status = "success";
    });
    builder.addCase(loadOrders.rejected, (state) => {
      state.orders.status = "failed";
    });
    // STORE
    builder.addCase(createOrder.pending, (state) => {
      state.orders.status = "loading";
      state.orders.alert = initialState.orders.alert;
    });
    builder.addCase(createOrder.fulfilled, (state) => {
      state.orders.status = "success";
      const alert = {
        type: Type.Success,
        message: "Votre commande a été placée avec succès, vous recevrez un sms indiquant les informations sur la livraison",
      };
      state.orders.alert = alert;
    });
    builder.addCase(createOrder.rejected, (state) => {
      state.orders.status = "failed";
      const alert = {
        type: Type.Error,
        message: "une erreur est survenue, veillez réessayer",
      };
      state.orders.alert = alert;
    });
    // // DELETE
    // builder.addCase(deleteAddress.pending, (state) => {
    //   state.addresses.status = "loading";
    //   state.addresses.alert = initialState.addresses.alert;
    // });
    // builder.addCase(deleteAddress.fulfilled, (state) => {
    //   state.addresses.status = "success";
    // });
    // builder.addCase(deleteAddress.rejected, (state) => {
    //   state.addresses.status = "failed";
    // });
    // // UPDATE
    // builder.addCase(updateAddress.pending, (state) => {
    //   state.addresses.status = "loading";
    //   state.addresses.alert = initialState.addresses.alert;
    // });
    // builder.addCase(updateAddress.fulfilled, (state) => {
    //   state.addresses.status = "success";
    // });
    // builder.addCase(updateAddress.rejected, (state) => {
    //   state.addresses.status = "failed";
    // });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectOrder = (state: RootState) => state.order.orders;

export default orderSlice.reducer;
