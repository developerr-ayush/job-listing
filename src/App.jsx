import { useCallback, useEffect, useState } from "react";
import { JobListing } from "./components/job-listing/JobListing";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/action";
import { setJobs, setTotalJobs } from "../redux/job-listing/job-slice";
import { Container } from "@mui/material";
import { JobFilter } from "./components/job-listing/JobFilter";
import { Loader } from "./components/Loader";

function App() {
  const [pending, setPending] = useState(true);
  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();

  const fetchedJob = useCallback(async () => {
    const jobs = await fetchJobs();
    dispatch(setJobs(jobs.jdList));
    dispatch(setTotalJobs(jobs.totalCount));
    setPending(false);
  }, []);
  useEffect(() => {
    fetchedJob();
  }, [fetchedJob]);
  if (pending) {
    return <Loader />;
  }
  if (!jobs) {
    return <div>No Jobs Found</div>;
  }
  return (
    <Container>
      <JobFilter />
      <JobListing />
    </Container>
  );
}

export default App;
