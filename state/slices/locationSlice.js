import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    location: null,
  },
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.value.location = action.payload;
    },
  },
});

export const { addLocation } = locationSlice.actions;
export default locationSlice.reducer;
