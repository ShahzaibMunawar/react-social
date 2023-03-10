import { configureStore } from "@reduxjs/toolkit";
import ToggleThemeSlice from "./Form/ToggleThemeSlice";

export default configureStore({
  reducer: {
    // when store is loaded it create taggleTheme variable and call ToggleThemeSlice
    taggleTheme: ToggleThemeSlice,
  },
});
