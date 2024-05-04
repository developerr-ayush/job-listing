export const fetchJobs = async (offset) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    limit: 10,
    offset: offset || 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };
  let data = await fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  );
  let JSONData = await data.json();
  return JSONData;
};
export const filteredJobs = (jobs, filters) => {
  return jobs.filter((job) => {
    console.log(filters, job);
    if (filters.minExp && job.minExp && job.minExp < filters.minExp) {
      return false;
    }
    if (!!filters.jobRole.length && !!job.jobRole.length) {
      if (filters.jobRole.includes(job.jobRole)) {
        console.log(filters.jobRole);
        return true;
      }
      return false;
    }
    return true;
  });
};
