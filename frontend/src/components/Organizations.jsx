import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  mainHomeContainer: {
    marginTop: theme.spacing(6)
  }
}));

export default function Organizations() {
  const classes = useStyles();
  const userName = useSelector(state => state.userInfo.name);

  return (
    <Typography variant="h5" gutterBottom>
      Organizations
    </Typography>
  );
}
