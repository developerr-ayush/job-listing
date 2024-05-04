import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

export default function BasicSelect({ label, optionList, type, dispatcher }) {
  const [option, setOption] = React.useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setOption(event.target.value);
    dispatch(dispatcher(event.target.value));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label={label}
          onChange={handleChange}
        >
          {optionList.map((name, index) => (
            <MenuItem key={index} value={name}>
              {name}
              {type === "pay" ? "L" : ""}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
BasicSelect.propTypes = {
  label: PropTypes.string,
  optionList: PropTypes.array,
  type: PropTypes.string,
  dispatcher: PropTypes.func,
};
