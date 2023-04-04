// Libs
import { createAsyncThunk } from "@reduxjs/toolkit";

// Utils
import { baseUrl, baseHeaders } from "../../../helpers/api/config";

// Calls
export const loadGenders = createAsyncThunk("LOAD_GENDERS", async () => {
  return await fetch(`${baseUrl}genders`, { headers: baseHeaders() }).then(
    (res) => res.json()
  );
});

export const addGender = createAsyncThunk(
  "ADD_GENDER",
  // @ts-ignore
  async ({ name }, { dispatch }) => {
    const body = {
      name: name,
    };
    return await fetch(`${baseUrl}genders`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then(() => dispatch(loadGenders()));
  }
);

export const deleteGender = createAsyncThunk(
  "DELETE_GENDER",
  // @ts-ignore
  async ({ id }, { dispatch }) => {
    return await fetch(`${baseUrl}genders/${id}`, {
      method: "DELETE",
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then(() => dispatch(loadGenders()));
  }
);

export const updateGender = createAsyncThunk(
  "UPDATE_GENDER",
  // @ts-ignore
  async ({ id, name }, { dispatch }) => {
    const body = {
      name: name,
    };
    return await fetch(`${baseUrl}genders/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then(() => dispatch(loadGenders()));
  }
);
