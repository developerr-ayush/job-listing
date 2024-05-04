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
