import React, { useContext, useEffect } from "react";
import { Typography, Box, Table, TableBody, TableCell, Button, Card, CardHeader, TableRow, Divider, CardMedia } from "@material-ui/core";
import { UserContext } from "../../contexts/UserContext.js";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../home/Footer"
import {formatTime, formatDate} from "../profiles/parseDateTime"

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
  media: {
    height: 250,
    width: 250, 
  }
});

const UserProfile = () => {
  const [userDonations, setDonations] = React.useState([])

  const PROD = true;

  const URL = PROD
    ? "https://sharity-technyc.herokuapp.com"
    : "http://localhost:3000";

  const classes = styles();

  const sessionUser = useContext(UserContext);

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

  const rows = userDonations.map(donation => {
    return createData(donation.request_id, donation.name, donation.date, donation.time, donation.items, donation.status, donation.location)
  })
  
  return (
    <>
    <Box  display="flex" justify="center" align="center"style={{ paddingTop: "5%", paddingBottom: "5%", paddingLeft:"10%"}}>
          <CardMedia className={classes.media} image={sessionUser.user.avatar}  title={sessionUser.user.username} />
        <Box flexDirection="row"  xs={4} sm={6}flexWrap="nowrap" style={{ paddingLeft: "5%"}}  >
          <Typography variant="h6" align="left" >Username</Typography>
          <Typography variant="subtitle1" align="left">
            {sessionUser.user.username}
          </Typography>
          <Typography variant="h6" align="left" >Email</Typography>
          <Typography variant="subtitle1" align="left">
            {sessionUser.user.email}{" "}
          </Typography>
          <Typography variant="h6" align="left">Phone Number</Typography>
          <Typography variant="subtitle1" align="left">
            {sessionUser.user.phone_number}{" "}
          </Typography>
        </Box>
      </Box>
      <Divider/>
      <Box display="flex" alignItems="center"  justifyContent="center" paddingTop="1em" paddingBottom="1em">
        <Card>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
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
            </TableBody>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.request_number}>
                  <TableCell component="th" scope="row" align="left"> 
                    #{row.request_number} {formatDate(row.date)} {formatTime(row.time)}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
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
