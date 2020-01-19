import React from "react";
import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import adnat from "../images/adnat-white.png";
import { logout } from "../ducks/actions/Api";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  logoutButton: {
    color: "#fff"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div>
            <img src={adnat} className="adnat-logo" width="7%" alt="logo" />
          </div>
          <Button
            className={classes.logoutButton}
            onClick={() => dispatch(logout())}
          >
            logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
