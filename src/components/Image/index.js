import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  rounded: {
    borderRadius: "50%"
  },
  xs: {
    width: 45
  },
  sm: {
    width: 50
  },
  md: {
    width: 55
  },
  lg: {
    width: 65
  },
  xl: {
    width: 75
  }
});

const Image = ({ size, rounded, width, height, className, ...props }) => {
  const classes = useStyles();
  const presetClasses = {
    [classes.xs]: size === "xs" && (!width && !height),
    [classes.sm]: size === "sm" && (!width && !height),
    [classes.md]: size === "md" && (!width && !height),
    [classes.lg]: size === "lg" && (!width && !height),
    [classes.xl]: size === "xl" && (!width && !height)
  };
  const roundedClass = {
    [classes.rounded]: rounded
  };
  return (
    <img
      {...props}
      style={{ width, height }}
      className={clsx(className, presetClasses, roundedClass)}
    />
  );
};

export default Image;
