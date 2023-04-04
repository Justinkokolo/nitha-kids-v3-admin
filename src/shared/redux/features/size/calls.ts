// Libs
import { createAsyncThunk } from '@reduxjs/toolkit'

// Utils
import { baseUrl, baseHeaders } from '../../../helpers/api/config';

// Calls
export const loadSizes = createAsyncThunk(
  'LOAD_SIZES',
  async () => {
    return await fetch(`${baseUrl}sizes`, { headers: baseHeaders() } ).then((res) => res.json())
  }
);

export const addSize = createAsyncThunk(
  'ADD_SIZE',
  // @ts-ignore
  async ({ name }, { dispatch }) => {
    const body = {
      name: name
    }
    return await 
      fetch(`${baseUrl}sizes`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: baseHeaders()
      })
      .then((res) => res.json())
      .then(() => dispatch(loadSizes()))
  }
)

export const deleteSize = createAsyncThunk(
  'DELETE_SIZE',
  // @ts-ignore
  async ({ id }, { dispatch }) => {
    return await
      fetch(`${baseUrl}sizes/${id}`, {
        method: 'DELETE',
        headers: baseHeaders()
      })
      .then((res) => res.json())
      .then(() => dispatch(loadSizes()))
  }
)

export const updateSize = createAsyncThunk(
  'UPDATE_SIZE',
  // @ts-ignore
  async ({ id, name }, { dispatch }) => {
    const body = {
      name: name
    }
    return await
      fetch(`${baseUrl}sizes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: baseHeaders()
      })
      .then((res) => res.json())
      .then(() => dispatch(loadSizes()))
  }
)