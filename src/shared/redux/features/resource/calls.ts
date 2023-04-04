// Libs
import { createAsyncThunk } from "@reduxjs/toolkit";

// Utils
import { baseUrl, baseHeaders } from "../../../helpers/api/config";

// Calls
export const loadResources = createAsyncThunk("LOAD_RESOURCES", async () => {
  return await fetch(`${baseUrl}resources`, { headers: baseHeaders() }).then(
    (res) => res.json()
  );
});
