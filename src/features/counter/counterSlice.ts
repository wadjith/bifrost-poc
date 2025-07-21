import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  value: number;
}
// Define the initial state using that type
const initialState = {
  value: 0,
} as CounterState;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
