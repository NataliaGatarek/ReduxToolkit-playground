import { createSlice } from "@reduxjs/toolkit";
// Slice
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  //defining actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
