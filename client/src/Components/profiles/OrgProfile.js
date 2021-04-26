import React, { useContext } from "react";
import Footer from "../home/Footer";
import { UserContext } from "../../contexts/UserContext.js";
import { Table, TableBody, TableRow, TableCell, Button, Box, CardHeader, Card, Divider } from "@material-ui/core";
import EditProfile from "./EditProfile";
import { formatTime, formatDate } from "./parseDateTime";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const btntheme = createMuiTheme({
  palette: {
    primary: {
      main: "#55a0cc",
    },
  },
});

function OrgProfile() {
  const PROD = true;

  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://localhost:3000";

  let sessionUser = useContext(UserContext);

  let orgId = sessionUser ? sessionUser.user.name : "";
  const [pending, setPending] = React.useState([]);
  const [accepted, setAccepted] = React.useState([]);
  const [completed, setCompleted] = React.useState([]);

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
    window.location.reload(false);
  }
  return (
    <>
      <EditProfile />
      <Divider />
      {/* This is the Your Pickups table */}
      {/* #ECE8EF */}
      <Box style={{ backgroundColor: "white" }} display="flex" alignItems="center" justifyContent="center" paddingTop="1em" paddingBottom="1em">
        <Card>
          <Table>
            <TableBody>
              <TableRow>
                {/* #dbe3f0 */}

                <TableCell style={{ backgroundColor: "#CFE4F1" }}>
                  <CardHeader title="Pending Requests" />
                </TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pickup #</TableCell>
                <TableCell>Donor Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Item Description</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableBody>

            <TableBody>
              {/* This is the donor request tables */}
              {pending.map((data) => (
                <TableRow>
                  <TableCell>
                    #{data.request_id} {formatDate(data.date)} {formatTime(data.time)}
                  </TableCell>
                  <TableCell>
                    {data.first_name} {data.last_name}
                  </TableCell>
                  <TableCell>{data.location}</TableCell>
                  {/* <TableCell>{data.date} {data.time}</TableCell> */}
                  <TableCell>{data.phone_number}</TableCell>
                  <TableCell>{data.items}</TableCell>
                  <TableCell align="center">
                    <ThemeProvider theme={btntheme}>
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
                    </ThemeProvider>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>
                  <CardHeader title="Your Pickups" />
                </TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
              </TableRow>
              {accepted.map((data) => (
                <TableRow>
                  <TableCell>
                    #{data.request_id} {formatDate(data.date)} {formatTime(data.time)}
                  </TableCell>
                  <TableCell>
                    {data.first_name} {data.last_name}
                  </TableCell>
                  <TableCell>{data.location}</TableCell>
                  {/* <TableCell>{data.date} {data.time}</TableCell> */}
                  <TableCell>{data.phone_number}</TableCell>
                  <TableCell>{data.items}</TableCell>
                  <TableCell align="center">
                    <ThemeProvider theme={btntheme}>
                      <Button
                        color="primary"
                        // component={RouterLink}
                        size="small"
                        onClick={(e) => updateStatus(data.request_id, 4)}
                        variant="outlined"
                      >
                        Picked Up
                      </Button>
                    </ThemeProvider>
                  </TableCell>
                </TableRow>
              ))}

              {/* This is the completed pickups table */}
              <TableRow>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>
                  <CardHeader title="Completed Requests" />
                </TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
                <TableCell style={{ backgroundColor: "#CFE4F1" }}>{""}</TableCell>
              </TableRow>

              {completed.map((data) => (
                <TableRow>
                  <TableCell>
                    #{data.request_id} {formatDate(data.date)} {formatTime(data.time)}
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
