// Libs
import { createAsyncThunk } from "@reduxjs/toolkit";

// Utils
import { baseUrl, unAuthedBaseHeaders, baseHeaders } from "../../../helpers/api/config";

// Calls
export const loadProducts = createAsyncThunk("LOAD_PRODUCTS", async () => {
  return await fetch(`${baseUrl}products`, { headers: unAuthedBaseHeaders() }).then(
    (res) => res.json()
  );
});

export const loadProduct = createAsyncThunk(
  "LOAD_PRODUCT",
  // @ts-ignore
  async ({ reference }) => {
    return await fetch(`${baseUrl}products/show/${reference}`, { headers: unAuthedBaseHeaders() }).then(
      (res) => res.json()
    );
  }
);

export const loadProductsByCategory = createAsyncThunk(
  "LOAD_PRODUCTS_BY_CATEGORY",
  // @ts-ignore
  async ({ id }) => {
    return await fetch(`${baseUrl}products/category/${id}`, { headers: unAuthedBaseHeaders() }).then(
      (res) => res.json()
    );
  }
);

export const addProduct = createAsyncThunk(
  "ADD_PRODUCT",
  // @ts-ignore
  async (payload, { dispatch }) => {
    return await fetch(`${baseUrl}products/store`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then(() => dispatch(loadProducts()));
  }
);

export const addPicture = createAsyncThunk(
  "ADD_PICTURE",
  // @ts-ignore
  async (payload, { dispatch }) => {
    return await fetch(`${baseUrl}products/store/picture`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then(() => dispatch(loadProducts()));
  }
);

export const editPicture = createAsyncThunk(
  "EDIT_PICTURE",
  // @ts-ignore
  async (payload, { dispatch }) => {
    return await fetch(`${baseUrl}products/edit/picture`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then(() => dispatch(loadProducts()));
  }
);

export const deleteProduct = createAsyncThunk(
  "DELETE_PRODUCT",
  // @ts-ignore
  async ({ id }, { dispatch }) => {
    return await fetch(`${baseUrl}products/delete/${id}`, { headers: baseHeaders() }).then(
      (res) => res.json()
    ).then(() => dispatch(loadProducts()));;
  }
);

export const updateProduct = createAsyncThunk(
  "UPDATE_PRODUCT",
  // @ts-ignore
  async (payload, { dispatch }) => {
    // @ts-ignore
    const { id } = payload;
    return await fetch(`${baseUrl}products/update/${id}`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then(() => dispatch(loadProducts()));
  }
);

export const searchProducts = createAsyncThunk(
  "SEARCH_PRODUCTS",
  // @ts-ignore
  async (payload) => {
    return await fetch(`${baseUrl}products/search`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: baseHeaders(),
    })
      .then((res) => res.json());
  }
);
