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
    if (filters.minExp && job.minExp && job.minExp < filters.minExp) {
      return false;
    }
    if (filters.minPay && job.minJdSalary && job.minJdSalary < filters.minPay) {
      return false;
    }
    if (
      !!filters.jobRole.length &&
      !!job.jobRole.length &&
      !filters.jobRole.includes(job.jobRole)
    ) {
      return false;
    }
    if (
      filters.companyName &&
      !job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())
    ) {
      return false;
    }
    return true;
  });
};
