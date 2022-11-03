import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prizes: [],
};
const prizesSlice = createSlice({
  name: "prizes",
  initialState: initialState,
  reducers: {
    addPrizes: (state, action) => {
      state.prizes = action.payload;
    },
  },
});

export default prizesSlice.reducer;
export const { addPrizes } = prizesSlice.actions;
