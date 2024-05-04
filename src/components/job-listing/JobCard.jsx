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
    color: "#333",
    "&:hover": {
      backgroundColor: "rgb(0, 255, 184)",
      borderColor: "#rgb(0, 255, 184)",
      boxShadow: "none",
    },
  });

export const JobCard = () => {
  return (
    <Card style={{ borderRadius: 20 }}>
    <CardContent>
      <JobPosted>
        <Typography fontSize={10}>⏳ Posted 3 days ago</Typography>
      </JobPosted>
      <JobInfo>
        <Img src="" />
        <div>
          <Typography fontSize={13} fontWeight={800}>
            Google
          </Typography>
          <Typography fontSize={14}>Senior Front End Developer</Typography>
          <Typography fontSize={12}>Mumbai, India</Typography>
        </div>
      </JobInfo>
      <Typography fontSize={14} className="estimated">
        Estimated Salary: ₹10 - 14 LPA ⚠️
      </Typography>
      <JobDescription>
        <Typography fontSize={14} fontWeight={800}>
          About Company:
        </Typography>

        <Typography fontSize={14}>
          Zuma makes an automated sales agent that converses with 100% of
          inbound leads, ultimately improving the way consumers interact
          with businesses and organizations. We’ve built this from the
          ground up using AI, ML, and human support which helps increase
          sales conversion and support capacity for businesses of all kinds.
          Zuma is one of the fastest-growing startups in San Francisco, and
          is well-funded and backed by world-class investors such as
          Y-Combinator, Joe Montana’s fund (Liquid 2 Ventures), Day One
          Ventures, Soma Capital, and other notable angel investors
          including Austen Allred (from Lambda School), YC’s ex-COO Qasar
          Younis, among others.
        </Typography>
        <OverlayButton>
          <ShowMore href="">Show More</ShowMore>
        </OverlayButton>
      </JobDescription>
      <Box marginBottom={2}>
        <Typography fontSize={14} fontWeight={800}>
          Minimum Experience:
        </Typography>
        <Typography fontSize={14}>2 years</Typography>
      </Box>
      <ButtonStyle variant="contained" color="success">
        ⚡ Easy Apply
      </ButtonStyle>
    </CardContent>
  </Card>
  )
}
