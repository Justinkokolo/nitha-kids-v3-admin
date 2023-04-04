// Libs
import { createAsyncThunk } from "@reduxjs/toolkit";

// Utils
import { baseUrl, baseHeaders } from "../../../helpers/api/config";

// Calls
export const loadCurrencies = createAsyncThunk("LOAD_CURRENCIES", async () => {
  return await fetch(`${baseUrl}currencies`, { headers: baseHeaders() }).then(
    (res) => res.json()
  );
});

export const addCurrency = createAsyncThunk(
  "ADD_CURRENCY",
  // @ts-ignore
  async ({ name, symbol }, { dispatch }) => {
    const body = {
      name,
      symbol,
    };
    return await fetch(`${baseUrl}currencies`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then(() => dispatch(loadCurrencies()));
  }
);

export const deleteCurrency = createAsyncThunk(
  "DELETE_CURENCY",
  // @ts-ignore
  async ({ id }, { dispatch }) => {
    return await fetch(`${baseUrl}currencies/${id}`, {
      method: "DELETE",
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then(() => dispatch(loadCurrencies()));
  }
);

export const updateCurrency = createAsyncThunk(
  "UPDATE_CURRENCY",
  // @ts-ignore
  async ({ id, name, symbol }, { dispatch }) => {
    const body = {
      name,
      symbol,
    };
    console.log(body);
    return await fetch(`${baseUrl}currencies/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
    //.then(() => dispatch(loadCurrencies()));
  }
);
