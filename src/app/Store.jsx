import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../features/theme/ThemeSlice";
export const store = configureStore({
  reducer: {
    theme: ThemeSlice,
  },
});
