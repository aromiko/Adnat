import React from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import CreateJoinOrganizations from "./CreateJoinOrganizations";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    marginTop: theme.spacing(4)
  },
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  subtitle: {
    margin: theme.spacing(4, 0, 2)
  }
}));

export default function Organizations() {
  const inOrganization = useSelector(state => state.inOrganization);

  return (
    <div>
      {!inOrganization ? (
        <div>
          <CreateJoinOrganizations />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
