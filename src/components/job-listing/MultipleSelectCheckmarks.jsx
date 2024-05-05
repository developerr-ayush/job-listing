import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectCheckmarks({
  label,
  optionList,
  dispatcher,
}) {
  const [option, setOption] = React.useState([]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOption(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  React.useEffect(() => {
    let id = setTimeout(() => {
      dispatch(dispatcher(option));
    }, 2000);
    return () => {
      clearTimeout(id);
    };
  }, [option]);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={option}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {optionList.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={option.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
MultipleSelectCheckmarks.propTypes = {
  optionList: PropTypes.array,
  label: PropTypes.string,
  dispatcher: PropTypes.func,
};
