import { Box } from "@mui/material";
import BasicSelect from "./BasicSelect";
import MultipleSelectCheckmarks from "./MultipleSelectCheckmarks";
import {
  setCompanyName,
  setJobRole,
  setMinExp,
  setMinPay,
  setTechStack,
} from "../../../redux/job-listing/job-filter";
import { JobSearch } from "./JobSearch";
let filterOptions = {
  minExp: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  companyName: "",
  location: ["mumbai", "delhi ncr", "chennai", "bangalore", "remote"],
  minPay: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  jobRole: ["frontend", "backend", "android", "tech lead", "ios"],
  techStack: ["react", "node", "angular", "python", "java", "ruby", "php"],
  mode: ["hybrid", "remote", "in-office"],
};
export const JobFilter = () => {
  return (
    <Box display="flex" flexWrap="wrap" p={1} mt={3}>
      {/* filter for Roles */}
      <MultipleSelectCheckmarks
        label="Roles"
        optionList={filterOptions.jobRole}
        dispatcher={setJobRole}
      />

      {/* filter for Experience */}
      <BasicSelect
        label="Experience"
        optionList={filterOptions.minExp}
        dispatcher={setMinExp}
      />
      {/* filter for Pat */}
      <BasicSelect
        label="Min Base Pay"
        optionList={filterOptions.minPay}
        type="pay"
        dispatcher={setMinPay}
      />
      {/* filter for TechStack */}
      <MultipleSelectCheckmarks
        label="TechStack"
        optionList={filterOptions.techStack}
        dispatcher={setTechStack}
      />
      {/* search for company */}
      <JobSearch label="Company Name" dispatcher={setCompanyName} />
    </Box>
  );
};
