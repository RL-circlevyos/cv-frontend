import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import data from "../../../../components/Category.json";

function RadioBtn({ value, handleChange }) {
  return (
    <FormControl
      component="fieldset"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className="text-base uppercase font-bold mb-4">Select Category</div>
      <RadioGroup
        aria-label="category"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <div className="w-full flex justify-center items-center">
          <div className="max-w-4xl w-full">
            {data.map((values) => {
              return (
                <FormControlLabel
                  key={values.id}
                  value={values.name}
                  control={<Radio />}
                  label={values.name}
                />
              );
            })}
          </div>
        </div>
      </RadioGroup>
    </FormControl>
  );
}
export default React.memo(RadioBtn);
