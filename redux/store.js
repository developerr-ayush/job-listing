import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./job-listing/job-slice";


export const store = configureStore({
  reducer: {
    jobs : jobSlice,
  },
});
