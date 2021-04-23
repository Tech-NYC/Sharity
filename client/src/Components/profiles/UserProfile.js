import React, { useContext, useEffect } from "react";
import { Typography, Box, Table, TableBody, TableCell, Button, Card, CardHeader, TableRow, Divider } from "@material-ui/core";
import { UserContext } from "../../contexts/UserContext.js";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../home/Footer"

const styles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: 50,
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
  function createData(request_number, name, date, time, items, status, location) {
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
    return { request_number, name, date, time, items, status, location };
  }
console.log(userDonations)
  const rows = userDonations.map(donation => {
    return createData(donation.request_id, donation.name, donation.date, donation.time, donation.items, donation.status, donation.location)
  })
  return (
    <>
    <Box container display="flex"  style={{ paddingTop: "5%", paddingBottom: "5%"}}>
        <Box flexDirection="row" flexWrap="wrap" align="center" xs={2}>
          <img
            alt="avatar"
            style={{ paddingLeft: "5%", width: "25%", }}
            src={sessionUser.user.avatar}
            referrerPolicy="no-referrer"
          />
        </Box>
        <Box flexDirection="row" item xs={4} flexWrap="nowrap" >
          <Typography variant="h5" style={{ margin:"1%"}}>Username</Typography>
          <Typography variant="h6" style={{ margin:"1%"}}>
            <b>{sessionUser.user.username} </b>
          </Typography>
          <Typography variant="h5" style={{ margin:"1%"}}>Email</Typography>
          <Typography variant="h6" style={{ margin:"1%"}}>
            <b>{sessionUser.user.email}{" "} </b>
          </Typography>
          <Typography variant="h5" style={{ margin:"1%"}}>Phone Number</Typography>
          <Typography variant="h6" style={{ margin:"1%"}}>
            <b> {sessionUser.user.phone_number}{" "}</b>
          </Typography>
        </Box>
      </Box>
      <Divider/>
      <Box display="flex" alignItems="center"  justifyContent="center" paddingTop="1em" paddingBottom="1em">
        <Card>
          <Table className={classes.table} aria-label="simple table">
              <TableRow>
                <TableCell style={{backgroundColor:"#dbe3f0"}}><CardHeader title="Pickup Requests" /></TableCell>
                <TableCell style={{backgroundColor:"#dbe3f0"}}>{""}</TableCell>
                <TableCell style={{backgroundColor:"#dbe3f0"}}>{""}</TableCell>
                <TableCell style={{backgroundColor:"#dbe3f0"}}>{""}</TableCell>
                <TableCell style={{backgroundColor:"#dbe3f0"}}>{""}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell >Request #</TableCell>
                <TableCell alight="left">Organization</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="center">Request Status</TableCell>
              </TableRow>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.request_number}>
                  <TableCell component="th" scope="row" align="center"> 
                    #{row.request_number} {row.date} {row.time}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="left">{row.location}</TableCell>
                  <TableCell align="left">{row.items}</TableCell>
                  <TableCell><Button
                              color="primary"
                              size="small"
                              variant="disabled"
                              align="right"
                              >{row.status}</Button> </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Box>
      <Footer/>
    </>
    
  );
};

export default UserProfile;
