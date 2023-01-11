import { createSlice } from "@reduxjs/toolkit";

// initial value
const initialState = {
  count: 0,
};

// creat reducer
export const Counterslice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      state.count += action.payload;
    },
    decrementCount: (state, action) => {
      if (state.count) {
        state.count -= action.payload;
      } else {
        return;
      }
    },
    reset: (state, action) => {
        state.count =0;
      },
  },
});

export const { incrementCount } = Counterslice.actions;
export const { decrementCount } = Counterslice.actions;
export const { reset } = Counterslice.actions;
// console.log(Counterslice)
