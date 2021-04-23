import React from "react";
import Footer from "./home/Footer";
import { Button, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ScheduleModal from "./scheduler/ScheduleModal";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import {formatTime} from '../Components/profiles/parseDateTime'

function UserViewOrg(props) {
  const PROD = true;

  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://127.0.0.1:3000";
  const loggedIn = React.useContext(UserContext);
  const userLoggedIn = loggedIn.user;

  let orgName = props.match.params.value;
  const [org, setOrg] = React.useState([]);
  const [userId, setUserId] = React.useState("");
  const [user, setUser] = React.useState([]);
  const [orgId, setOrgId] = React.useState("");
  const [orgNeeds, setOrgNeeds] = React.useState([]);
  const [thing, setThing] = React.useState(0);

  React.useEffect(() => {
    let isCurrent = true;
    async function gettingOrgs() {
      await fetch(`${URL}/api/organizations/list`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (isCurrent) {
            let allOrgs = [];
            data.map((name) => {
              let orgn = name.name.split(" ").join("")
              if (orgn === orgName) {
                setUserId(name.user_id);
                setOrgId(name.id);
                allOrgs.push(name);
              }
            });
            setOrg(allOrgs);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }

    gettingOrgs();

    //need to make another fetch request to get the avatar of the org which is in users info
    async function gettingUsers() {
      await fetch(`${URL}/api/user/getAll`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (isCurrent) {
            let userInfo = [];
            // console.log(data)
            data.map((info) => {
              // console.log(info)
              if (info.id === userId) {
                userInfo.push(info);
              }
            });
            setUser(userInfo);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    gettingUsers();
    //need to fetch from organizations list in order to get the information for the needs
    async function gettingNeeds() {
      await fetch(`${URL}/api/organization/getAll`, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (isCurrent) {
            let orgNeeds = [];
            // console.log(data)
            data.map((info) => {
              // console.log(info)
              if (info.organization_id === orgId) {
                orgNeeds.push(info);
              }
            });
            setOrgNeeds(orgNeeds);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    gettingNeeds();

    return () => {
      isCurrent = false;
    };
  }, [thing, orgName, userId, orgId]);
  
  // array of all info
  let mergedArray = [];

  // merges the orgneeds, user and org arrays of objects to create a new array of object
  const mergeArrays = () => {
    org.forEach((orgInfo) => {
      user.forEach((userInfo) => {
        if (orgNeeds.length !== 0) {
          orgNeeds.forEach((needs) => {
            if (needs.organization_id === orgInfo.id) {
              mergedArray.push({
                id: orgInfo.id,
                user: orgInfo.user_id,
                name: orgInfo.name,
                address: orgInfo.address,
                description: orgInfo.description,
                pickup: orgInfo.pickup_times,
                logo: userInfo.avatar,
                needed: needs.items_needed,
              });
            }
          });
        } else if (orgNeeds.length === 0) {
          mergedArray.push({
            id: orgInfo.id,
            user: orgInfo.user_id,
            name: orgInfo.name,
            address: orgInfo.address,
            description: orgInfo.description,
            pickup: orgInfo.pickup_times,
            logo: userInfo.avatar,
          });
        }
      });
    });
  };

  mergeArrays();

  let daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return (
    <>
      <Box container display="flex"  style={{ paddingTop: "5%", paddingBottom: "5%"}}>
      {mergedArray &&
        mergedArray.map((data) => (
          <>
            <Box flexDirection="column" flexWrap="wrap" paddingLeft="5%" xs={2}>
              <img alt="logo"  src={data.logo} style={{ width: "100%" }} referrerPolicy="no-referrer" />
            </Box>
            <Box key={data.id} flexDirection="column" item xs={4} direction="column" >
              <Typography variant="h3" style={{ margin:"1%"}}>{data.name}</Typography>
              <Typography variant="h6" style={{ margin:"1%"}}>Address </Typography>
              <Typography variant="subtitle1" style={{ margin:"1%"}}>{data.address}</Typography>
              <Typography variant="h6" style={{ margin:"1%"}}>Description</Typography>
              <Typography variant="subtitle1" style={{ margin:"1%"}}>{data.description}</Typography>
              <Typography variant="h6" style={{ margin:"1%"}}>Pickup Times</Typography>
              <Typography variant="subtitle1"style={{ margin:"1%"}} >
                {!data.pickup ? (
                  <Typography>No Times Yet</Typography>
                ) : (
                  data.pickup.split(",").map((time, i) => (
                    <>
                      <li style={{ listStyleType: "none" }} key={i}><b> {daysArr[i]} </b> {formatTime(time.split('-')[0]) + " - " + formatTime(time.split('-')[1])} </li>
                    </>
                  ))
                )}
              </Typography>
            </Box>
            <Box  flexDirection="column" item xs={4} direction="column" style={{paddingRight:"5%"}}>
              {userLoggedIn ? 
                <ScheduleModal org_id={orgId}></ScheduleModal> : <Button align="center" component={ Link } to="/login" variant="outlined" style={{margin:"auto"}}>Request Pickup</Button>
              }
            </Box>
          </>
        ))}
        </Box>
      <hr></hr>
      {orgNeeds.length === 0 ? (
        <Box container display="flex" justify="center" align="center" style={{  width: "1200px", overflow: "hidden", margin: "auto",padding:"25px" }}>
          <Box style={{ width: "400px", float:"center"}}>
            <Typography variant="h6">Items Needed List</Typography>
            <Typography>No Items Needed Currently</Typography>
          </Box>
          <Box style={{ width: "400px", float:"center"}}>
            <Typography variant="h6">Item Approved Condition List </Typography>
            <Typography>No Items Needed Currently </Typography>
          </Box>
          <Box style={{ width: "400px", float:"center"}}>
            <Typography variant="h6">Item Not Approved Condition List </Typography>
            <Typography>No Items Needed Currently</Typography>
          </Box>
        </Box>
      ) : (
        orgNeeds.map((data) => (
          <Box container display="flex" justify="center" align="center" style={{  width: "1200px", overflow: "hidden", margin: "auto",padding:"25px" }}>
            <Box style={{ width: "400px", float:"center"}}>
              <Typography variant="h6">Items Needed List</Typography>
              {!data.items_needed ? (
                <Typography> No Items Needed Currently</Typography>
              ) : (
                data.items_needed.split(",").map((item) => (
                  <Typography variant="subtitle1">{item}</Typography>
                ))
              )}
            </Box>
            <Box style={{ width: "400px", float:"center"}}>
              <Typography variant="h6">Item Approved Condition List </Typography>
              {!data.conditions_accepted ? (
                <Typography>No Items Needed Currently</Typography>
              ) : (
                data.conditions_accepted.split(",").map((item) => (
                  <Typography variant="subtitle1">{item}</Typography>
                ))
              )}
            </Box>
            <Box style={{ width: "400px", float:"center"}}>
              <Typography variant="h6">Item Not Approved Condition List </Typography>
              {!data.conditions_not_accepted ? (
                <Typography>No Items Needed Currently</Typography>
              ) : (
                data.conditions_not_accepted.split(",").map((item) => (
                  <Typography variant="subtitle1">{item}</Typography>
                ))
              )}
            </Box>
          </Box>
        ))
      )}

      <Footer />
    </>
  );
}

export default UserViewOrg;
