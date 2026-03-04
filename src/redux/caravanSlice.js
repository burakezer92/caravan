import { createSlice } from "@reduxjs/toolkit";
import { fetchCaravan } from "./operations";

const caravansSlice = createSlice({
  name: "caravans",
  initialState: {
    campers: [],
    loading: false,
    error: null,
    filters: {
      location: "",
      equipment: [],
      type: null,
    },
  },
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaravan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCaravan.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = action.payload;
      })
      .addCase(fetchCaravan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters } = caravansSlice.actions;
export default caravansSlice.reducer;
