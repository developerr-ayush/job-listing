import { Grid } from "@mui/material";
import { JobCard } from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchJobs, filteredJobs } from "../../../redux/action";
import { useState } from "react";
import { setMoreJobs } from "../../../redux/job-listing/job-slice";
import { Spinner } from "../Spinner";

export const JobListing = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const totalJob = useSelector((state) => state.jobs.totalJobs);
  const filters = useSelector((state) => state.jobsFilter);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const fetchMoreData = async () => {
    try {
      const fetchedJobs = await fetchJobs(page * 10);
      dispatch(setMoreJobs(fetchedJobs.jdList));
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching more jobs:", error);
    }
  };

  const filteredJob = filteredJobs(jobs, filters);
  return (
    <InfiniteScroll
      dataLength={jobs.length}
      next={fetchMoreData}
      hasMore={jobs.length < totalJob}
      loader={<Spinner />}
      scrollThreshold={0.5}
    >
      <Grid container spacing={3} className="job-listing" padding={2}>
        {!!filteredJob &&
          filteredJob.map((job, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <JobCard job={job} />
            </Grid>
          ))}
      </Grid>
    </InfiniteScroll>
  );
};
