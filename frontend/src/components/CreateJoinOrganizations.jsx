import React, { useState } from "react";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  makeStyles,
  TextField
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { postOrganization } from "../ducks/actions/Api";

const useStyles = makeStyles(theme => ({
  mainHomeContainer: {
    marginTop: theme.spacing(6)
  },
  createButton: {
    color: "#fff"
  },
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

export default function CreateJoinOrganizations() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const organizations = useSelector(state => state.organization);

  const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
      value,
      setValue,
      reset: () => setValue(""),
      bind: {
        value,
        onChange: event => {
          setValue(event.target.value);
        }
      }
    };
  };

  const {
    value: organizationName,
    bind: bindOrganizationName,
    reset: resetOrganizationName
  } = useInput("");
  const {
    value: hourlyRate,
    bind: bindHourlyRate,
    reset: resetHourlyRate
  } = useInput("");

  const handleSubmit = evt => {
    evt.preventDefault();
    resetOrganizationName();
    resetHourlyRate();
  };

  return (
    <div>
      <Typography variant="body1" gutterBottom>
        You aren't a member of any organizations. Join an existing one or create
        a new one.
      </Typography>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Organizations</Typography>
          <div className={classes.demo}>
            <List>
              {organizations.map(item => (
                <ListItem key={item.id}>
                  <ListItemText primary={item.name} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Create Organization
          </Typography>
          <div className={classes.paper}>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="organizationName"
                label="Name"
                name="organizationName"
                {...bindOrganizationName}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="rate"
                label="Hourly Rate"
                type="rate"
                id="rate"
                {...bindHourlyRate}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.createButton}
                onClick={() =>
                  dispatch(postOrganization(organizationName, hourlyRate))
                }
              >
                Create and join
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
