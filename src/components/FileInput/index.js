import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 230,
    maxHeight: "100%",
    "@media (max-width: 960px)": {
      height: "100%"
    }
  }
});

const FileInput = ({ onChange }) => {
  const classes = useStyles();
  const handleChange = event => {
    if (event.target.files && event.target.files.length > 0) {
      onChange(event.target.files[0]);
    }
  };
  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="avatar-file-input"
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="avatar-file-input">
        <Button variant="outlined" component="span" color="primary">
          Select an image
        </Button>
      </label>
    </div>
  );
};

export default FileInput;
