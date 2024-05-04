import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  minExp: 0,
  companyName: "",
  location: [],
  minPay: 0,
  jobRole: [],
  techStack: [],
};
const jobFilter = createSlice({
  name: "jobsFilter",
  initialState,
  reducers: {
    setMinExp: (state, action) => {
      state.minExp = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setLocation: (state, action) => {
      const { name, value } = action.payload;
      if (value) {
        state.location.push(name);
      } else {
        const index = state.location.indexOf(name);
        if (index > -1) {
          state.location.splice(index, 1);
        }
      }
    },
    setRemote: (state, action) => {
      state.remote = action.payload;
    },
    setMinPay: (state, action) => {
      state.minPay = action.payload;
    },
    setJobRole: (state, action) => {
      state.jobRole = action.payload;
    },
    setTechStack: (state, action) => {
      state.techStack = action.payload;
    },
  },
});

export const {
  setMinExp,
  setCompanyName,
  setJobRole,
  setLocation,
  setMinPay,
  setRemote,
  setTechStack,
} = jobFilter.actions;
export default jobFilter.reducer;
