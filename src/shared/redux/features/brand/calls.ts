// Libs
import { createAsyncThunk } from "@reduxjs/toolkit";

// Utils
import { baseUrl, baseHeaders } from "../../../helpers/api/config";

// Calls
export const loadBrands = createAsyncThunk("LOAD_BRANDS", async () => {
  return await fetch(`${baseUrl}brands`, { headers: baseHeaders() }).then(
    (res) => res.json()
  );
});

export const addBrand = createAsyncThunk(
  "ADD_BRAND",
  // @ts-ignore
  async ({ name }, { dispatch }) => {
    const body = {
      name: name,
    };
    return await fetch(`${baseUrl}brands`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then(() => dispatch(loadBrands()));
  }
);

export const deleteBrand = createAsyncThunk(
  "DELETE_BRAND",
  // @ts-ignore
  async ({ id }, { dispatch }) => {
    return await fetch(`${baseUrl}brands/${id}`, {
      method: "DELETE",
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then(() => dispatch(loadBrands()));
  }
);

export const updateBrand = createAsyncThunk(
  "UPDATE_BRAND",
  // @ts-ignore
  async ({ id, name }, { dispatch }) => {
    const body = {
      name: name,
    };
    return await fetch(`${baseUrl}brands/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then(() => dispatch(loadBrands()));
  }
);
