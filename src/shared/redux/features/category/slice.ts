// Libs
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { Type } from '../../../constants/alert';
import type { RootState } from '../../store'

// Utils
import { loadCategories, addCategory, deleteCategory, updateCategory } from './calls';

// Define a type for the category state
interface CategoryState {
  categories: {
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
  category: {
    name: string,
    id: number
  } | null;
}

// Define the initial state using that type
const initialState: CategoryState = {
  categories: {
    data: [],
    status: '',
    alert: {
      message: ''
    }
  },
  category: null
}

export const categorySlice = createSlice({
  name: 'category',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCategory: (state, action: PayloadAction<{
      name: string,
      id: number
    } | null>) => {
      state.category = action.payload
    },
    setCategories: (
      state,
      action: PayloadAction<{
        name: string;
        id: number;
      }[]>
    ) => {
      state.categories = {
        ...state.categories,
        data: action.payload
      };
    },
  },
  extraReducers: 
  (builder) => {
    // GET
    builder.addCase(loadCategories.pending, (state, action) => {
      state.categories.status = 'loading'
      state.categories.alert = initialState.categories.alert
    });
    builder.addCase(loadCategories.fulfilled, (state, action) => {
      state.categories.data = action.payload['categories']
      state.categories.status = 'success'
    });
    builder.addCase(loadCategories.rejected, (state, action) => {
      state.categories.status = 'failed'
    });
    // STORE
    builder.addCase(addCategory.pending, (state, action) => {
      state.categories.status = 'loading'
      state.categories.alert = initialState.categories.alert
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.categories.status = 'success'
      const alert = {
        type: Type.Success,
        message: 'You have successfully added a category'
      }
      state.categories.alert = alert
    });
    builder.addCase(addCategory.rejected, (state, action) => {
      state.categories.status = 'failed'
      const alert = {
        type: Type.Error,
        message: 'An error has occurred'
      }
    });
    // DELETE
    builder.addCase(deleteCategory.pending, (state, action) => {
      state.categories.status = 'loading'
      state.categories.alert = initialState.categories.alert
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.categories.status = 'success'
      const alert = {
        type: Type.Success,
        message: 'You have successfully delete the category'
      }
      state.categories.alert = alert
    });
    builder.addCase(deleteCategory.rejected, (state, action) => {
      state.categories.status = 'failed'
      const alert = {
        type: Type.Error,
        message: 'An error has occurred'
      }
    });
    // UPDATE
    builder.addCase(updateCategory.pending, (state, action) => {
      state.categories.status = 'loading'
      state.categories.alert = initialState.categories.alert
    });
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      state.categories.status = 'success'
      const alert = {
        type: Type.Success,
        message: 'You have successfully updated the category'
      }
      state.categories.alert = alert
    });
    builder.addCase(updateCategory.rejected, (state, action) => {
      state.categories.status = 'failed'
      const alert = {
        type: Type.Error,
        message: 'An error has occurred'
      }
    });
  },
})

export const { setCategory, setCategories } = categorySlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCategory = (state: RootState) => state.category.categories

export default categorySlice.reducer