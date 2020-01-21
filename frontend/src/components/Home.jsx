import React from "react";
import Header from "./Header";
import Organizations from "./Organizations";
import { Container, Typography, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  mainHomeContainer: {
    marginTop: theme.spacing(6)
  }
}));

export default function Home() {
  const classes = useStyles();
  const userName = useSelector(state => state.userInfo.name);
  const dataLoaded = useSelector(state => state.isDataLoaded);
  return (
    <div>
      <Header></Header>
      {dataLoaded ? (
        <Container maxWidth="lg" className={classes.mainHomeContainer}>
          <Typography variant="h2" gutterBottom>
            Welcome {userName}!
          </Typography>
          <Organizations />
        </Container>
      ) : (
        ""
      )}
    </div>
  );
}
