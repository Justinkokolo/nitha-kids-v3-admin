// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';

// Utils
import { baseUrl, unAuthedBaseHeaders, baseHeaders } from '../../../helpers/api/config';

export const loadUsers = createAsyncThunk(
  "LOAD_USERS",
  // @ts-ignore
  async () => {
    return await fetch(`${baseUrl}users`, { headers: baseHeaders() }).then(
      (res) => res.json()
    );
  }
);

export const loadRoles = createAsyncThunk(
  "LOAD_ROLES",
  // @ts-ignore
  async () => {
    return await fetch(`${baseUrl}users/roles`, { headers: baseHeaders() }).then(
      (res) => res.json()
    );
  }
);

export const login = createAsyncThunk(
  'LOGIN',
  // @ts-ignore
  async ({ telephone, password }) => {
    const body = { telephone, password };
    return await 
      fetch(`${baseUrl}users/login`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: unAuthedBaseHeaders()
      })
      .then((res) => res.json());
  }
);

export const addUser = createAsyncThunk(
  'ADD_USER',
  // @ts-ignore
  async ({ telephone, role , firstname, lastname }, { dispatch }) => {
    const body = { telephone, firstname, lastname, role };
    return await 
      fetch(`${baseUrl}users/add`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: unAuthedBaseHeaders()
      })
      .then((res) => res.json())
      .then(() => dispatch(loadUsers()));
  }
);

export const editUser = createAsyncThunk(
  'EDIT_USER',
  // @ts-ignore
  async ({ telephone, role , firstname, lastname }, { dispatch }) => {
    const body = { telephone, firstname, lastname, role };
    return await 
      fetch(`${baseUrl}users/edit`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: unAuthedBaseHeaders()
      })
      .then((res) => res.json())
      .then(() => dispatch(loadUsers()));
  }
);

export const createUser = createAsyncThunk(
  'CREATE_USER',
  // @ts-ignore
  async ({ telephone, password, firstname, lastname }) => {
    const body = { telephone, password, firstname, lastname };
    return await 
      fetch(`${baseUrl}users/create`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: unAuthedBaseHeaders()
      })
      .then((res) => res.json());
  }
);

