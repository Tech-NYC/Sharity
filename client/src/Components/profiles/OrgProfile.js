import React, { useContext } from "react";
import Footer from "../home/Footer";
import { UserContext } from "../../contexts/UserContext";
import { Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell, Button, Box, CardContent,CardHeader, Card, Divider, Tab} from "@material-ui/core"
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
     
  React.useEffect(()=> {
    fetch(`${URL}/api/organization/fetch_requests_pending`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        organization_id: sessionUser.user.organization_id,
      }),
    }).then((res)=>{
      return res.json();
    }).then((data)=> {
      setPending(data)
    })

    fetch(`${URL}/api/organization/fetch_requests_accepted`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        organization_id: sessionUser.user.organization_id,
      }),
    }).then((res)=>{
      return res.json();
    }).then((data)=> {
      setAccepted(data)
    })

    fetch(`${URL}/api/organization/fetch_requests_completed`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        organization_id: sessionUser.user.organization_id,
      }),
    }).then((res)=>{
      return res.json();
    }).then((data)=> {
      setCompleted(data)
    })
      
  },[URL, sessionUser.user.organization_id])

  // console.log(completed)
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
            <TableRow>
              <TableCell>Pickup #</TableCell>
              <TableCell>Donor Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Item Description</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
            <TableBody>
            {accepted.map((data) => (
              <TableRow>
                 <TableCell>#{data.request_id}</TableCell>
                <TableCell>{data.first_name} {data.last_name}</TableCell>
                <TableCell>{data.location}</TableCell>
                <TableCell>{data.phone_number}</TableCell>
                <TableCell>{data.items}</TableCell>
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
            
            ))}
            
          {/* This is the donor request tables */}
          <CardHeader title="Pending Requests"/>
          <Divider />
          {pending.map((data)=> (
                <TableRow>
                  <TableCell>#{data.request_id}</TableCell>
                  <TableCell>{data.first_name} {data.last_name}</TableCell>
                  <TableCell>{data.location}</TableCell>
                  <TableCell>{data.phone_number}</TableCell>
                  <TableCell>{data.items}</TableCell>
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
              ))}
    {/* This is the completed pickups table */}
          <CardHeader title="Completed Pickups"/>
          <Divider/>
            {completed.map((data)=>(
              <TableRow>
                <TableCell>#{data.request_id}</TableCell>
                <TableCell>{data.first_name} {data.last_name}</TableCell>
                <TableCell>{data.location}</TableCell>
                <TableCell>{data.phone_number}</TableCell>
                <TableCell>{data.items}</TableCell>
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
