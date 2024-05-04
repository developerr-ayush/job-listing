import PropTypes from "prop-types";

import {
  Box,
  Button,
  Card,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
// box shadow style for job posted
const JobPosted = styled(Box)({
  backgroundColor: "#f0f0f0",
  padding: "5px 10px",
  borderRadius: "50vmax",
  color: "#666",
  display: "inline-block",
});
const JobInfo = styled(Box)({
  fontSize: 16,
  fontWeight: "bold",
  color: "#333",
  marginBlock: 20,
  display: "flex",
  gap: 15,
});
// img style
const Img = styled("img")({
  width: 50,
  height: 50,
  flexShrink: 0,
  borderRadius: "50%",
  backgroundColor: "#f0f0f0",
});
const JobDescription = styled(Box)({
  fontSize: 14,
  marginBlock: 20,
  height: 250,
  overflow: "hidden",
  position: "relative",
});
const OverlayButton = styled(Box)({
  position: "absolute",
  bottom: 0,
  right: 0,
  left: 0,
  backgroundImage: "linear-gradient(transparent , white 75%)",
  padding: "5px 10px",
  textAlign: "center",
  height: 90,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
});
const ShowMore = styled("a")({
  textDecoration: "none",
  color: "#4943da",
  padding: "5px 10px",
  borderRadius: "50vmax",
  display: "inline-block",
  fontSize: 14,
  fontFamily: "inherit",
});
const ButtonStyle = styled(Button)({
  width: "100%",
  padding: "10px 20px",
  backgroundColor: "rgb(85, 239, 196)",
  textDecoration: "none",
  display: "block",
  textAlign: "center",
  color: "#333",
  "&:hover": {
    backgroundColor: "rgb(0, 255, 184)",
    borderColor: "#rgb(0, 255, 184)",
    boxShadow: "none",
  },
});

export const JobCard = ({ job }) => {
  const salary = () => {
    if (job.minJdSalary && job.maxJdSalary) {
      return `${job.minJdSalary.toLocaleString("en-US", {
        style: "currency",
        currency: job.salaryCurrencyCode,
        maximumFractionDigits: 0,
      })} - ${job.maxJdSalary.toLocaleString("en-US", {
        style: "currency",
        currency: job.salaryCurrencyCode,
        maximumFractionDigits: 0,
      })} LPA ⚠️`;
    }
    if (job.minJdSalary) {
      return `${job.minJdSalary.toLocaleString("en-US", {
        style: "currency",
        currency: job.salaryCurrencyCode,
        maximumFractionDigits: 0,
      })} LPA ⚠️`;
    }
    if (job.maxJdSalary) {
      return `${job.maxJdSalary.toLocaleString("en-US", {
        style: "currency",
        currency: job.salaryCurrencyCode,
        maximumFractionDigits: 0,
      })} LPA ⚠️`;
    }
    return "Not Specified";
  };
  return (
    <Card style={{ borderRadius: 20 }}>
      <CardContent>
        <JobPosted>
          <Typography fontSize={10}>⏳ Posted 3 days ago</Typography>
        </JobPosted>
        <JobInfo>
          <Img src={job.logoUrl} />
          <div>
            <Typography fontSize={13} fontWeight={800}>
              {job.companyName}
            </Typography>
            <Typography fontSize={14}>{job.jobRole}</Typography>
            <Typography fontSize={12}>{job.location}</Typography>
          </div>
        </JobInfo>
        <Typography fontSize={14} className="estimated">
          Estimated Salary:
          {salary()}
        </Typography>
        <JobDescription>
          <Typography fontSize={14} fontWeight={800}>
            About Company:
          </Typography>

          <Typography fontSize={14}>{job.jobDetailsFromCompany}</Typography>
          <OverlayButton>
            <ShowMore href="">Show More</ShowMore>
          </OverlayButton>
        </JobDescription>
        <Box marginBottom={2}>
          <Typography fontSize={14} fontWeight={800}>
            Experience:
          </Typography>
          <Typography fontSize={14}>
            {job.minExp} - {job.maxExp} years
          </Typography>
        </Box>
        <ButtonStyle
          as="a"
          href={job.jdLink}
          variant="contained"
          color="success"
        >
          ⚡ Easy Apply
        </ButtonStyle>
      </CardContent>
    </Card>
  );
};
JobCard.propTypes = {
  job: PropTypes.object,
};
