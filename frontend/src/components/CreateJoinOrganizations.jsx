import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
  TextField
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setEditId } from "../ducks/actions/Actions";
import {
  postOrganization,
  putOrganization,
  postJoinOrganization
} from "../ducks/actions/Api";

const useStyles = makeStyles(theme => ({
  mainHomeContainer: {
    marginTop: theme.spacing(6)
  },
  button: {
    color: "#fff"
  },
  editJoinButton: {
    color: "#fff",
    margin: theme.spacing(1)
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
  let organizationId = useSelector(state => state.editOrganizationId);

  const [open, setOpen] = React.useState(false);

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
  const {
    value: editOrganizationName,
    bind: bindEditOrganizationName,
    reset: resetEditOrganizationName
  } = useInput("");
  const {
    value: editHourlyRate,
    bind: bindEditHourlyRate,
    reset: resetEditHourlyRate
  } = useInput("");

  const handleEdit = orgId => {
    dispatch(setEditId(orgId));
    setOpen(true);
  };

  const handleClose = () => {
    resetEditOrganizationName();
    resetEditHourlyRate();
    setOpen(false);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    resetOrganizationName();
    resetHourlyRate();
  };

  const handleEditSubmit = evt => {
    evt.preventDefault();
    resetEditOrganizationName();
    resetEditHourlyRate();
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
            {organizations.length === 0 ? (
              <Typography variant="body1" gutterBottom>
                No Organizations available. Create a new one!
              </Typography>
            ) : (
              <List>
                {organizations.map(item => (
                  <ListItem key={item.id}>
                    <ListItemText primary={item.name} />
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.editJoinButton}
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.editJoinButton}
                      onClick={() => dispatch(postJoinOrganization(item.id))}
                    >
                      Join
                    </Button>
                  </ListItem>
                ))}
              </List>
            )}
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
                id="rate"
                {...bindHourlyRate}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.button}
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Organization</DialogTitle>
        <form className={classes.form} noValidate onSubmit={handleEditSubmit}>
          <DialogContent>
            <TextField
              margin="dense"
              id="editOrganizationName"
              label="New Organization Name"
              fullWidth
              {...bindEditOrganizationName}
            />
            <TextField
              margin="dense"
              id="editHourlyRate"
              label="New Hourly Rate"
              fullWidth
              {...bindEditHourlyRate}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={() =>
                dispatch(
                  putOrganization(
                    editOrganizationName,
                    editHourlyRate,
                    organizationId
                  )
                ).then(handleClose)
              }
              color="primary"
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
