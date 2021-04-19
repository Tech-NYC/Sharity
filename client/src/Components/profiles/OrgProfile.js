import React, { useContext } from "react";
import Footer from "../home/Footer";
import { UserContext } from "../../contexts/UserContext";
import { Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell, Button, Box, CardContent,CardHeader, Card, Divider} from "@material-ui/core"
import EditProfile from "./EditProfile"
import {makeStyles} from "@material-ui/core/styles";

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
    maxWidth: "100%"
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  }
});

function OrgProfile(props) {
  const PROD = true;

  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://localhost:3000";

  const sessionUser = useContext(UserContext);
  console.log(sessionUser.user.organization_id, "state user");
  ///////change it to "" before pushing
  let orgID = sessionUser ? sessionUser.user.organization_id : "test";
  const [user, setUser] = React.useState([]);

  // app.post("/api/organization/fetch_requests_completed", organization.fetch_requests_completed);
  // app.post("/api/organization/fetch_requests_pending", organization.fetch_requests_pending);
  // app.post("/api/organization/fetch_requests_accepted", organization.fetch_requests_accepted);
  // React.useEffect(()=> {
    

  // },[sessionUser.user.user_id])

  const classes = useStyles()
  return (
    <>
      <EditProfile/>
      <hr></hr>
      {/* <OrgProfileTables users = {user}/> */}
      {/* This is the Your Pickups table */}
      <Box display="flex" alignItems="center" justifyContent="center" paddingTop="1em" paddingBottom="1em">
        <Card className={classes.root}>
          <CardHeader title="Your Pickups"/>
          <Divider/>
          <Table>
            <TableHead>
              <TableCell>Donor Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Pickup #</TableCell>
              <TableCell>Item Description</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>John Smith</TableCell>
                <TableCell>123 Sand Ave</TableCell>
                <TableCell>347-893-4321</TableCell>
                <TableCell>#2345133</TableCell>
                <TableCell>Socks, Sweaters, Pants</TableCell>
                <TableCell align="center">
                  <Button
                    color="primary"
                    // component={RouterLink}
                    size="small"
                    onClick={e => console.log("clicked")}
                    variant="outlined"
                  >
                    Picked Up
                  </Button>
                </TableCell>
              </TableRow>
    {/* This is the donor request tables */}
          <CardHeader title="Donor Requests"/>
          <Divider />
            <TableRow>
              <TableCell>John Smith</TableCell>
              <TableCell>123 Sand Ave</TableCell>
              <TableCell>347-893-4321</TableCell>
              <TableCell>#2345133</TableCell>
              <TableCell>Socks, Sweaters, Pants</TableCell>
              <TableCell align="center">
                <Button
                  color="primary"
                  // component={RouterLink}
                  size="small"
                  onClick={e => console.log("clicked")}
                  variant="outlined"
                >
                  Accept
                </Button>
                <Button
                  color="primary"
                  // component={RouterLink}
                  size="small"
                  onClick={e => console.log("clicked")}
                  variant="outlined"
                >
                  Reject
                </Button>
              </TableCell>
            </TableRow>
    {/* This is the completed pickups table */}
          <CardHeader title="Completed Pickups"/>
          <Divider/>
            <TableRow>
              <TableCell>John Smith</TableCell>
              <TableCell>123 Sand Ave</TableCell>
              <TableCell>347-893-4321</TableCell>
              <TableCell>#2345133</TableCell>
              <TableCell>Socks, Sweaters, Pants</TableCell>
              <TableCell align="center"> 
                <Button
                  color="primary"
                  // component={RouterLink}
                  size="small"
                  onClick={e => console.log("clicked")}
                  variant="disabled"
                >
                  Completed 
                </Button>
              </TableCell>
            </TableRow>
           
            </TableBody>
        </Table>
      </Card>
    </Box>
    <Footer />
    </>
  );
}

export default OrgProfile;
