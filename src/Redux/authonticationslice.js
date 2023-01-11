import { createSlice } from "@reduxjs/toolkit";

// initial value
const initialState = {
    valid: false,
};

// creat reducer
export const authinticationslice= createSlice({
  name: "valid",
  initialState,
  reducers: {
    validate: (state, action) => {
      state.valid = action.payload;
    }
  },
});
export const {validate} = authinticationslice.actions;