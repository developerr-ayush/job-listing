import { Container, Grid } from "@mui/material";
import { JobCard } from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchJobs } from "../../../redux/action";
import { useState } from "react";
import { setMoreJobs } from "../../../redux/job-listing/job-slice";
import { JobLoader } from "./JobLoader";

export const JobListing = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const totalJob = useSelector((state) => state.jobs.totalJobs);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const fetchMoreData = async () => {
    const jobs = await fetchJobs(page * 10);
    console.log(jobs);
    dispatch(setMoreJobs(jobs.jdList));
    setPage(page + 1);
  };
  if (!jobs) return <h1>Loading...</h1>;
  return (
    <Container>
      <InfiniteScroll
        dataLength={jobs.length}
        next={fetchMoreData}
        hasMore={jobs.length !== totalJob}
        loader={<JobLoader />}
      >
        <Grid container spacing={3} className="job-listing" padding={2}>
          {jobs.map((job) => (
            <Grid item xs={12} sm={6} lg={4} key={job.id}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
};
