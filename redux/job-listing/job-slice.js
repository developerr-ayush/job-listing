import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  jobs: [],
  totalJobs: 0,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setTotalJobs: (state, action) => {
      state.totalJobs = action.payload;
    },
    setMoreJobs: (state, action) => {
      state.jobs = [...state.jobs, ...action.payload];
    },
  },
});
export const { setJobs, setTotalJobs,setMoreJobs } = jobSlice.actions;

export default jobSlice.reducer;
