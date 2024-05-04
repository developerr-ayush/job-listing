import { useCallback, useEffect } from "react";
import { JobListing } from "./components/job-listing/JobListing";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../redux/action";
import { setJobs, setTotalJobs } from "../redux/job-listing/job-slice";
import { Container } from "@mui/material";
import { JobFilter } from "./components/job-listing/JobFilter";

function App() {
  const dispatch = useDispatch();
  const fetchedJob = useCallback(async () => {
    const jobs = await fetchJobs();
    dispatch(setJobs(jobs.jdList));
    dispatch(setTotalJobs(jobs.totalCount));
  }, []);
  useEffect(() => {
    fetchedJob();
  }, [fetchedJob]);

  return (
    <div className="wrapper">
      <Container>
        <JobFilter />
        <JobListing />
      </Container>
    </div>
  );
}

export default App;
