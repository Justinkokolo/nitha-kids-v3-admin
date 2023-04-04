// Libs
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Type } from "../../../constants/alert";
import type { RootState } from "../../store";

// Utils
import { loadGenders, addGender, deleteGender, updateGender } from "./calls";

// Define a type for the brand state
interface GenderState {
  genders: {
    data: {
      name: string;
      id: number;
      updated_at?: string;
    }[];
    status: string;
    alert: {
      type?: Type;
      message: string;
    };
  };
  gender: {
    name: string;
    id: number;
    updated_at?: string;
  } | null;
}

// Define the initial state using that type
const initialState: GenderState = {
  genders: {
    data: [],
    status: "",
    alert: {
      message: "",
    },
  },
  gender: null,
};

export const genderSlice = createSlice({
  name: "gender",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setGender: (
      state,
      action: PayloadAction<{
        name: string;
        id: number;
      } | null>
    ) => {
      state.gender = action.payload;
    },
    setGenders: (
      state,
      action: PayloadAction<
        {
          name: string;
          id: number;
        }[]
      >
    ) => {
      state.genders = {
        ...state.genders,
        data: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    // GET
    builder.addCase(loadGenders.pending, (state, action) => {
      state.genders.status = "loading";
      state.genders.alert = initialState.genders.alert;
    });
    builder.addCase(loadGenders.fulfilled, (state, action) => {
      state.genders.data = action.payload["genders"];
      state.genders.status = "success";
    });
    builder.addCase(loadGenders.rejected, (state, action) => {
      state.genders.status = "failed";
    });
    // STORE
    builder.addCase(addGender.pending, (state, action) => {
      state.genders.status = "loading";
      state.genders.alert = initialState.genders.alert;
    });
    builder.addCase(addGender.fulfilled, (state, action) => {
      state.genders.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully added a brand",
      };
      state.genders.alert = alert;
    });
    builder.addCase(addGender.rejected, (state, action) => {
      state.genders.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
    });
    // DELETE
    builder.addCase(deleteGender.pending, (state, action) => {
      state.genders.status = "loading";
      state.genders.alert = initialState.genders.alert;
    });
    builder.addCase(deleteGender.fulfilled, (state, action) => {
      state.genders.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully delete the brand",
      };
      state.genders.alert = alert;
    });
    builder.addCase(deleteGender.rejected, (state, action) => {
      state.genders.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
    });
    // UPDATE
    builder.addCase(updateGender.pending, (state, action) => {
      state.genders.status = "loading";
      state.genders.alert = initialState.genders.alert;
    });
    builder.addCase(updateGender.fulfilled, (state, action) => {
      state.genders.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully updated the brand",
      };
      state.genders.alert = alert;
    });
    builder.addCase(updateGender.rejected, (state, action) => {
      state.genders.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
    });
  },
});

export const { setGender, setGenders } = genderSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGender = (state: RootState) => state.gender.genders;

export default genderSlice.reducer;
