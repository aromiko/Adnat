import React from "react";
import { AppBar, Button, makeStyles, Toolbar, Grid } from "@material-ui/core";
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
          <Grid container>
            <Grid>
              <div>
                <img
                  src={adnat}
                  className="adnat-logo"
                  width="100px"
                  alt="logo"
                />
              </div>
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid>
              <Button
                className={classes.logoutButton}
                onClick={() => dispatch(logout())}
              >
                logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
