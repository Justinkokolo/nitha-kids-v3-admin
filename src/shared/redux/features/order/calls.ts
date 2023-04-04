// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';

// Utils
import { baseUrl, baseHeaders } from '../../../helpers/api/config';

// Calls
export const loadOrders = createAsyncThunk(
  'LOAD_ORDERS',
  async () => {
    return await fetch(`${baseUrl}orders`, { headers: baseHeaders() } ).then((res) => res.json());
  }
);

export const createOrder = createAsyncThunk(
  'CREATE_ORDER',
  // @ts-ignore
  async (body) => {
    return await 
      fetch(`${baseUrl}orders/store`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: baseHeaders()
      })
      .then((res) => res.json());
  }
);