import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  Typography
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import * as moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { postShift } from "../ducks/actions/Api";

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650
  },
  addShiftButton: {
    color: "#fff"
  },
  noShiftContainer: {
    marginBottom: theme.spacing(6)
  }
}));

export default function Shifts() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userInfo.id);
  const userName = useSelector(state => state.userInfo.name);
  const orgUsers = useSelector(state => state.orgUsers);
  const shifts = useSelector(state => state.shifts);

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [pickedStartTime, setPickedStartTime] = React.useState(new Date());
  const [pickedEndTime, setPickedEndTime] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleStartTimeChange = time => {
    setPickedStartTime(time);
  };

  const handleEndTimeChange = time => {
    setPickedEndTime(time);
  };

  const formatDateTime = (date, time) => {
    return (
      moment(selectedDate).format("YYYY-MM-DD") +
      " " +
      moment(pickedStartTime).format("HH:mm")
    );
  };

  const formatShiftTableTime = time => {
    return moment(time).format("hh:mm A");
  };

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
    value: breakTime,
    bind: bindBreakTime,
    reset: resetBreakTime
  } = useInput("");

  const handleSubmit = evt => {
    evt.preventDefault();
    resetBreakTime();
  };

  return (
    <div>
      <Typography variant="h5">Shifts</Typography>
      {shifts.length === 0 ? (
        <div className={classes.noShiftContainer}>
          No shifts available for this organization yet. You may add a shift.
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Employee Name</TableCell>
                <TableCell>Shift Date</TableCell>
                <TableCell>Start Time</TableCell>
                <TableCell>Finish Time</TableCell>
                <TableCell>Break Length (minutes)</TableCell>
                <TableCell>Hours Worked</TableCell>
                <TableCell>Shift Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shifts.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {orgUsers.length === 0
                      ? ""
                      : orgUsers[orgUsers.map(e => e.id).indexOf(row.userId)]
                          .name}
                  </TableCell>
                  <TableCell>
                    {moment(row.start).format("YYYY-MM-DD")}
                  </TableCell>
                  <TableCell>{formatShiftTableTime(row.start)}</TableCell>
                  <TableCell>{formatShiftTableTime(row.finish)}</TableCell>
                  <TableCell>
                    {row.breakLength != "" ? row.breakLength : "N/A"}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              <TableRow key="newShiftRow">
                <TableCell component="th" scope="row">
                  {userName}
                </TableCell>
                <TableCell>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="yyyy-MM-dd"
                      margin="normal"
                      id="date"
                      label="Date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </TableCell>
                <TableCell>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                      ampm={false}
                      margin="normal"
                      id="startTime"
                      label="Start Time"
                      value={pickedStartTime}
                      onChange={handleStartTimeChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time"
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </TableCell>
                <TableCell>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                      ampm={false}
                      margin="normal"
                      id="endTime"
                      label="End Time"
                      value={pickedEndTime}
                      onChange={handleEndTimeChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time"
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    id="breakTime"
                    label="Break Time"
                    name="breakTime"
                    {...bindBreakTime}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.addShiftButton}
                    onClick={() =>
                      dispatch(
                        postShift(
                          userId,
                          formatDateTime(selectedDate, pickedStartTime),
                          formatDateTime(selectedDate, pickedEndTime),
                          breakTime
                        )
                      )
                    }
                  >
                    Add Shift
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </div>
  );
}
