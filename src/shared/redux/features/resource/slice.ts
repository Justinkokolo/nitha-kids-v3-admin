// Libs
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Utils
import { loadResources } from "./calls";

// Define a type for the resource state
interface ResourceState {
  resources: {
    data: string[];
    status: string;
  };
}

// Define the initial state using that type
const initialState: ResourceState = {
  resources: {
    data: [],
    status: "",
  },
};

export const resourceSlice = createSlice({
  name: "resource",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder.addCase(loadResources.pending, (state, action) => {
      state.resources.status = "loading";
    });
    builder.addCase(loadResources.fulfilled, (state, action) => {
      state.resources.data = action.payload;
      state.resources.status = "success";
    });
    builder.addCase(loadResources.rejected, (state, action) => {
      state.resources.status = "failed";
    });
  },
});

export const {} = resourceSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectResource = (state: RootState) => state.resource.resources;

export default resourceSlice.reducer;
