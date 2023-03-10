import { createSlice } from "@reduxjs/toolkit";

export const ToggleThemeSlice = createSlice({
  // requires a string name to identify the slice
  name: "taggleTheme",
  initialState: {
    value: false,
  },
  // reducer functions to define how the state can be updated
  reducers: {
    changeMode: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMode } = ToggleThemeSlice.actions;

export default ToggleThemeSlice.reducer;
