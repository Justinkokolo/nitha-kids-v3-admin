// Libs
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { Type } from '../../../constants/alert';
import type { RootState } from '../../store'

// Utils
import { loadSizes, addSize, deleteSize, updateSize } from './calls';

// Define a type for the size state
interface SizeState {
  sizes: {
    data: {
      name: string,
      id: number
    }[],
    status: string,
    alert: {
      type?: Type,
      message: string
    }
  },
  size: {
    name: string,
    id: number
  } | null;
}

// Define the initial state using that type
const initialState: SizeState = {
  sizes: {
    data: [],
    status: '',
    alert: {
      message: ''
    }
  },
  size: null
}

export const sizeSlice = createSlice({
  name: 'size',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSize: (state, action: PayloadAction<{
      name: string,
      id: number
    } | null>) => {
      state.size = action.payload
    },
    setSizes: (
      state,
      action: PayloadAction<{
        name: string;
        symbol: string;
        id: number;
      }[]>
    ) => {
      state.sizes = {
        ...state.sizes,
        data: action.payload
      };
    },
  },
  extraReducers: 
  (builder) => {
    // GET
    builder.addCase(loadSizes.pending, (state, action) => {
      state.sizes.status = 'loading'
      state.sizes.alert = initialState.sizes.alert
    });
    builder.addCase(loadSizes.fulfilled, (state, action) => {
      state.sizes.data = action.payload['sizes']
      state.sizes.status = 'success'
    });
    builder.addCase(loadSizes.rejected, (state, action) => {
      state.sizes.status = 'failed'
    });
    // STORE
    builder.addCase(addSize.pending, (state, action) => {
      state.sizes.status = 'loading'
      state.sizes.alert = initialState.sizes.alert
    });
    builder.addCase(addSize.fulfilled, (state, action) => {
      state.sizes.status = 'success'
      const alert = {
        type: Type.Success,
        message: 'You have successfully added a size'
      }
      state.sizes.alert = alert
    });
    builder.addCase(addSize.rejected, (state, action) => {
      state.sizes.status = 'failed'
      const alert = {
        type: Type.Error,
        message: 'An error has occurred'
      }
    });
    // DELETE
    builder.addCase(deleteSize.pending, (state, action) => {
      state.sizes.status = 'loading'
      state.sizes.alert = initialState.sizes.alert
    });
    builder.addCase(deleteSize.fulfilled, (state, action) => {
      state.sizes.status = 'success'
      const alert = {
        type: Type.Success,
        message: 'You have successfully delete the size'
      }
      state.sizes.alert = alert
    });
    builder.addCase(deleteSize.rejected, (state, action) => {
      state.sizes.status = 'failed'
      const alert = {
        type: Type.Error,
        message: 'An error has occurred'
      }
    });
    // UPDATE
    builder.addCase(updateSize.pending, (state, action) => {
      state.sizes.status = 'loading'
      state.sizes.alert = initialState.sizes.alert
    });
    builder.addCase(updateSize.fulfilled, (state, action) => {
      state.sizes.status = 'success'
      const alert = {
        type: Type.Success,
        message: 'You have successfully updated the size'
      }
      state.sizes.alert = alert
    });
    builder.addCase(updateSize.rejected, (state, action) => {
      state.sizes.status = 'failed'
      const alert = {
        type: Type.Error,
        message: 'An error has occurred'
      }
    });
  },
})

export const { setSize, setSizes } = sizeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSize = (state: RootState) => state.size.sizes

export default sizeSlice.reducer