import React, { useContext, useEffect } from "react";
import { Typography, Box } from "@material-ui/core";
import { UserContext } from "../../contexts/UserContext";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: 50,
  },
  textField: {
    marginLeft: "10%",
    marginRight: "10%",
    width: 300,
    color: "black",
    fontSize: 30,
    opacity: 1,
    borderBottom: 0,
    "&:before": {
      borderBottom: 0,
    },
  },
  disabled: {
    color: "black",
    borderBottom: 0,
    "&:before": {
      borderBottom: 0,
    },
  },
  btnIcons: {
    marginLeft: 10,
  },
  table: {
    minWidth: 650,
  },
});

const UserProfile = () => {
  const [userDonations, setDonations] = React.useState([])

  const PROD = true;

  const URL = PROD
    ? "https://sharity-technyc.herokuapp.com"
    : "http://localhost:3000";

  const classes = styles();

  const sessionUser = useContext(UserContext);
  console.log(sessionUser.user, "user");
  if (!sessionUser.user.avatar) {
    sessionUser.user.avatar =
      "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";
  }

  // grab donation requests made by user
  useEffect(() => {
    // fetch user donation requests

    fetch(`${URL}/api/user/fetch_requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id: sessionUser.user.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setDonations(data);
      });

  }, []);

  // data parsing
  function createData(request_number, name, date, time, items, status) {
    /**
     * Status mapping
     *  1 = pending
     *  2 = accepted
     *  3 = rejected
     *  4 = completed
     *
     * */

    if (status === 1) {
      status = "Pending";
    } else if (status === 2) {
      status = "Accepted";
    } else if (status === 3) {
      status = "Rejected";
    } else if (status === 4) {
      status = "Completed";
    }
    return { request_number, name, date, time, items, status };
  }

  const rows = userDonations.map(donation => {
    return createData(donation.id, donation.name, donation.date, donation.time, donation.items, donation.status)
  })

  return (
    <div>
      <Box container display="flex" style={{ paddingTop: "5%" }}>
        <Box flexDirection="row" flexWrap="wrap" xs={2}>
          <img
            alt="avatar"
            style={{ paddingLeft: "10%", width: "75%", height: "75%" }}
            src={sessionUser.user.avatar}
            referrerPolicy="no-referrer"
          />
        </Box>
        <Box flexDirection="row" item xs={4} direction="column">
          <Typography variant="h6"> Username </Typography>
          <Typography className={classes.textField} variant="h4">
            {sessionUser.user.username}
          </Typography>
          <Typography variant="h6"> Email </Typography>
          <Typography className={classes.textField} variant="h4">
            {sessionUser.user.email}{" "}
          </Typography>
          <Typography variant="h6">Phone Number</Typography>
          <Typography className={classes.textField} variant="h4">
            {sessionUser.user.phone_number}{" "}
          </Typography>
        </Box>
        <Box
          flexDirection="row"
          flexWrap="wrap"
          item
          xs={3}
          direction="column"
        ></Box>
      </Box>
      <hr />
      <Box container display="flex" style={{ paddingTop: "2%", padding: "5%" }}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Donation Request Number</TableCell>
                <TableCell alight="left">Donating To</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Time</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="right">Request Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.request_number}>
                  <TableCell component="th" scope="row">
                    {row.request_number}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.time}</TableCell>
                  <TableCell align="right">{row.items}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default UserProfile;
