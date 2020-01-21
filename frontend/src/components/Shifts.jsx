import React from "react";
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
import { makeStyles } from "@material-ui/core/styles";

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

// function createData(name, date, start, end, breaktime, worked, cost) {
//   return { name, date, start, end, breaktime, worked, cost };
// }

export default function Shifts() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userName = useSelector(state => state.userInfo.name);
  const orgUsers = useSelector(state => state.organizationUsers);
  const shifts = useSelector(state => state.shifts);

  return (
    <div>
      <Typography variant="h5">Shifts</Typography>
      {shifts.length === 0 ? (
        <div className={classes.noShiftContainer}>
          No shifts available for this organization yet. You may add a shifts.
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
                    {row.userId}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>{row.start}</TableCell>
                  <TableCell>{row.finish}</TableCell>
                  <TableCell>{row.breakLength}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow key="newShiftRow">
              <TableCell component="th" scope="row">
                {userName}
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  id="date"
                  label="Date"
                  name="date"
                />
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  id="start"
                  label="Start Time"
                  name="start"
                />
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  id="end"
                  label="End Time"
                  name="end"
                />
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  id="breakTime"
                  label="Break Time"
                  name="breakTime"
                />
              </TableCell>
              <TableCell>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.addShiftButton}
                  onClick={() => dispatch()}
                >
                  Add Shift
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
