import React, { useContext } from "react";
import Footer from "../home/Footer";
import { UserContext } from "../../contexts/UserContext.js";
import { Table, TableHead, TableBody, TableRow, TableCell, Button, Box, CardContent, CardHeader, Card, Divider, Tab } from "@material-ui/core";
import EditProfile from "./EditProfile";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // display: "flex",
    // justifyContent:"center",
    top: "50%",
    left: "50%",
    // transform: "translate(-50%, -50%)",
    // outline: "none",
    // boxShadow: theme.shadows[20],
    width: "75em",
    maxHeight: "100%",
    overflowY: "auto",
    maxWidth: "100%",
  },
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 700,
  },
});

function OrgProfile(props) {
  const PROD = true;

  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://localhost:3000";

  let sessionUser = useContext(UserContext);

  console.log(sessionUser);
  // console.log(sessionUser, "state user");
  ///////change it to "" before pushing
  let orgId = sessionUser ? sessionUser.user.name : "test";
  const [pending, setPending] = React.useState([]);
  const [accepted, setAccepted] = React.useState([]);
  const [completed, setCompleted] = React.useState([]);
  /**
   * Status mapping
   *  1 = pending
   *  2 = accepted
   *  3 = rejected
   *  4 = completed
   *
   * */
  //  app.post("/api/organization/fetch_requests_completed", organization.fetch_requests_completed);
  //  app.post("/api/organization/fetch_requests_pending", organization.fetch_requests_pending);
  //  app.post("/api/organization/fetch_requests_accepted", organization.fetch_requests_accepted);

  React.useEffect(() => {
    fetch(`${URL}/api/organization/fetch_requests_pending`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        organization_id: sessionUser.user.organization_id,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPending(data);
      });

    fetch(`${URL}/api/organization/fetch_requests_accepted`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        organization_id: sessionUser.user.organization_id,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAccepted(data);
      });

    fetch(`${URL}/api/organization/fetch_requests_completed`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        organization_id: sessionUser.user.organization_id,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCompleted(data);
      });
  }, [URL, sessionUser.user.organization_id]);

  // Updates status of the clicked request in the backend
  function updateStatus(request_id, statusCode) {
    fetch(`${URL}/api/donationRequest/setStatus`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        donation_request_id: request_id,
        status: statusCode,
      }),
    }).then((res) => {
      return res.json();
    });
    // OrgProfile.forceUpdate();
    window.location.reload(false);
    //return <Redirect to="/dashboard" />;
  }
  console.log(pending, "pending");
  console.log(accepted, "accepted");
  console.log(completed, "completed");
  const classes = useStyles();
  return (
    <>
      <EditProfile />
      <Divider />
      {/* This is the Your Pickups table */}
      <Box display="flex" alignItems="center" justifyContent="center" paddingTop="1em" paddingBottom="1em">
        <Card>
          <Table>
            <TableRow>
              <TableCell style={{ backgroundColor: "#dbe3f0" }}>
                <CardHeader title="Pending Requests" />
              </TableCell>
              <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
              <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
              <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
              <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
              <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pickup #</TableCell>
              <TableCell>Donor Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Item Description</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
            <TableBody>
              {/* This is the donor request tables */}
              {pending.map((data) => (
                <TableRow>
                  <TableCell>
                    #{data.request_id} {data.date} {data.time}
                  </TableCell>
                  <TableCell>
                    {data.first_name} {data.last_name}
                  </TableCell>
                  <TableCell>{data.location}</TableCell>
                  {/* <TableCell>{data.date} {data.time}</TableCell> */}
                  <TableCell>{data.phone_number}</TableCell>
                  <TableCell>{data.items}</TableCell>
                  <TableCell align="center">
                    <Button
                      color="primary"
                      // component={RouterLink}
                      size="small"
                      onClick={(e) => updateStatus(data.request_id, 2)}
                      variant="outlined"
                    >
                      Accept
                    </Button>
                    <Button
                      color="primary"
                      // component={RouterLink}
                      size="small"
                      onClick={(e) => updateStatus(data.request_id, 3)}
                      variant="outlined"
                    >
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell style={{ backgroundColor: "#dbe3f0" }}>
                  <CardHeader title="Your Pickups" />
                </TableCell>
                <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
              </TableRow>
              {accepted.map((data) => (
                <TableRow>
                  <TableCell>
                    #{data.request_id} {data.date} {data.time}
                  </TableCell>
                  <TableCell>
                    {data.first_name} {data.last_name}
                  </TableCell>
                  <TableCell>{data.location}</TableCell>
                  {/* <TableCell>{data.date} {data.time}</TableCell> */}
                  <TableCell>{data.phone_number}</TableCell>
                  <TableCell>{data.items}</TableCell>
                  <TableCell align="center">
                    <Button
                      color="primary"
                      // component={RouterLink}
                      size="small"
                      onClick={(e) => updateStatus(data.request_id, 4)}
                      variant="outlined"
                    >
                      Picked Up
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

              {/* This is the completed pickups table */}
              <TableRow>
                <TableCell style={{ backgroundColor: "#dbe3f0" }}>
                  <CardHeader title="Completed Requests" />
                </TableCell>
                <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#dbe3f0" }}>{""}</TableCell>
              </TableRow>

              {completed.map((data) => (
                <TableRow>
                  <TableCell>
                    #{data.request_id} {data.date} {data.time}
                  </TableCell>
                  <TableCell>
                    {data.first_name} {data.last_name}
                  </TableCell>
                  <TableCell>{data.location}</TableCell>
                  <TableCell>{data.phone_number}</TableCell>
                  <TableCell>{data.items}</TableCell>
                  <TableCell align="center">
                    <Button
                      color="primary"
                      // component={RouterLink}
                      size="small"
                      onClick={(e) => console.log("clicked")}
                      variant="disabled"
                    >
                      Completed
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Box>
      <Footer />
    </>
  );
}

export default OrgProfile;
