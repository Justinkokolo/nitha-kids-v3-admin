// Libs
import { createAsyncThunk } from "@reduxjs/toolkit";

// Utils
import { baseUrl, baseHeaders } from "../../../helpers/api/config";

export const addProductDetail = createAsyncThunk(
  "ADD_PRODUCT_DETAILS",
  // @ts-ignore
  async (payload) => {
    return await fetch(`${baseUrl}product-details`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: baseHeaders(),
    })
      .then((res) => res.json());
  }
);

export const editProductDetail = createAsyncThunk(
  'UPDATE_PRODUCT_DETAILS',
  // @ts-ignore
  async (body) => {
    return await
    // @ts-ignore
      fetch(`${baseUrl}product-details/${body.id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: baseHeaders()
      })
      .then((res) => res.json());
  }
);
