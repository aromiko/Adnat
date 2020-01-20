import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Typography,
  makeStyles
} from "@material-ui/core";
import { putOrganization, postLeaveOrganization } from "../ducks/actions/Api";

const useStyles = makeStyles(theme => ({
  editLeaveButton: {
    color: "#fff",
    margin: theme.spacing(1)
  }
}));

export default function MainOrganization() {
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
  const classes = useStyles();
  const dispatch = useDispatch();
  const dataLoaded = useSelector(state => state.isDataLoaded);
  const organizationId = useSelector(state => state.userInfo.organisationId);
  const organizationIndex = useSelector(state => state.organization).findIndex(
    org => org.id === organizationId
  );
  const organizationName = useSelector(
    state => state.organization[organizationIndex].name
  );
  const [open, setOpen] = React.useState(false);

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

  const handleEdit = () => {
    setOpen(true);
  };

  const handleClose = () => {
    resetEditOrganizationName();
    resetEditHourlyRate();
    setOpen(false);
  };

  const handleEditSubmit = evt => {
    evt.preventDefault();
    resetEditOrganizationName();
    resetEditHourlyRate();
  };

  return (
    <div>
      Your organization:
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="h4">
            {dataLoaded ? organizationName : ""}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.editLeaveButton}
            onClick={() => handleEdit()}
          >
            Edit
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.editLeaveButton}
            onClick={() => dispatch(postLeaveOrganization())}
          >
            Leave
          </Button>
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
