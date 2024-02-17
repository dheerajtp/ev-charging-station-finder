import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    location: null,
    evOptions: [],
  },
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.value.location = action.payload;
    },
    addEVOptions: (state, action) => {
      console.log(" === add EV Options === ");
      console.log(action);
      state.value.evOptions = action.payload?.places ?? [];
    },
  },
});

export const { addLocation, addEVOptions } = locationSlice.actions;
export default locationSlice.reducer;
