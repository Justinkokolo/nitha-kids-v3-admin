// Libs
import { createAsyncThunk } from '@reduxjs/toolkit'

// Utils
import { baseUrl, baseHeaders } from '../../../helpers/api/config';

// Calls
export const loadCategories = createAsyncThunk(
  'LOAD_CATEGORIES',
  async () => {
    return await fetch(`${baseUrl}categories`, { headers: baseHeaders() } ).then((res) => res.json())
  }
)

export const addCategory = createAsyncThunk(
  'ADD_CATEGORY',
  // @ts-ignore
  async ({ name }, { dispatch }) => {
    const body = {
      name: name
    }
    return await 
      fetch(`${baseUrl}categories`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: baseHeaders()
      })
      .then((res) => res.json())
      .then(() => dispatch(loadCategories()))
  }
)

export const deleteCategory = createAsyncThunk(
  'DELETE_CATEGORY',
  // @ts-ignore
  async ({ id }, { dispatch }) => {
    return await
      fetch(`${baseUrl}categories/${id}`, {
        method: 'DELETE',
        headers: baseHeaders()
      })
      .then((res) => res.json())
      .then(() => dispatch(loadCategories()))
  }
)

export const updateCategory = createAsyncThunk(
  'UPDATE_CATEGORY',
  // @ts-ignore
  async ({ id, name }, { dispatch }) => {
    const body = {
      name: name
    }
    return await
      fetch(`${baseUrl}categories/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: baseHeaders()
      })
      .then((res) => res.json())
      .then(() => dispatch(loadCategories()))
  }
)