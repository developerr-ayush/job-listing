import PropTypes from "prop-types";

import { FormControl, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
export const JobSearch = ({ label, dispatcher }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    let id = setTimeout(() => {
      dispatch(dispatcher(search));
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [search]);
  return (
    <FormControl style={{ margin: 8 }}>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        value={search}
        onChange={handleChange}
      />
    </FormControl>
  );
};
JobSearch.propTypes = {
  label: PropTypes.string,
  dispatcher: PropTypes.func,
};
