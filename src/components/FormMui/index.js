import { useState } from "react";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";

import "./styles.css";

export const FormMui = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={value} onChange={handleChange} />
      <Button variant="contained">Send</Button>
    </form>
  );
};
