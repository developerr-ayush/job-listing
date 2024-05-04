import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./job-listing/job-slice";
import jobFilter from "./job-listing/job-filter";


export const store = configureStore({
  reducer: {
    jobs : jobSlice,
    jobsFilter : jobFilter,
  },
});
