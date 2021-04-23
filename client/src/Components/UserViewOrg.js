import React from "react";
import Footer from "./home/Footer";
import { Grid, Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ScheduleModal from "./scheduler/ScheduleModal";
import { UserContext } from "../contexts/UserContext";
import { Link, Redirect} from "react-router-dom";
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
    //map over org
    org.forEach((orgInfo) => {
      //iterate through user
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
          // setRows(mergedArray)
        }

        // setRows(mergedArray)
      });
    });
  };

  mergeArrays();

  let daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return (
    <>
      {mergedArray &&
        mergedArray.map((data) => (
          <>
            <Grid key={data.id} container spacing={3} style={{ paddingTop: "5%" }}>
              <Grid container xs={2}>
                <img alt="logo" style={{ paddingLeft: "10%", width: "75%", height: "75%" }} src={data.logo} referrerPolicy="no-referrer" />
              </Grid>
              <Grid container item xs={7} direction="column">
                <Typography variant="h4">{data.name}</Typography>
                <Typography variant="h6">Address </Typography>
                <Typography variant="subtitle2">{data.address}</Typography>
                <Typography variant="h6">Description</Typography>
                <Typography variant="subtitle2">{data.description}</Typography>
                <Typography variant="h6">Pickup Times</Typography>
                <Typography variant="subtitle2">
                  {!data.pickup ? (
                    <Typography>No Times Yet</Typography>
                  ) : (
                    data.pickup.split(",").map((time, i) => (
                      <>
                        {daysArr[i]}: {formatTime(time.split('-')[0]) + " - " + formatTime(time.split('-')[1]) }
                      </>
                    ))
                  )}
                </Typography>
              </Grid>
              <Grid container item xs={3} direction="column">
                {userLoggedIn ? 
                  <ScheduleModal org_id={orgId}></ScheduleModal> : <Button component={ Link } to="/login" variant="outlined" style={{margin:"auto"}}>Request Pickup</Button>
                }
                
              </Grid>
            </Grid>
          </>
        ))}
      <hr></hr>
      {orgNeeds.length === 0 ? (
        <Grid container spacing={3} justify="center" style={{ paddingTop: "5%", paddingBottom: "10%" }}>
          <Grid item xs={3}>
            <Typography variant="h6">Items Needed List</Typography>
            <Typography>No Items Needed Currently</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Item Approved Condition List </Typography>
            <Typography>No Items Needed Currently</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Item Not Approved Condition List </Typography>
            <Typography>No Items Needed Currently</Typography>
          </Grid>
        </Grid>
      ) : (
        orgNeeds.map((data) => (
          <Grid container spacing={3} justify="center" style={{ paddingTop: "5%", paddingBottom: "10%" }}>
            <Grid item xs={3}>
              <Typography variant="h6">Items Needed List</Typography>
              {!data.items_needed ? (
                <Typography>No Items Needed Currently</Typography>
              ) : (
                data.items_needed.split(",").map((item) => (
                  <>
                    <ul>
                      <li> {item}</li>
                    </ul>
                  </>
                ))
              )}
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6">Item Approved Condition List </Typography>
              {!data.conditions_accepted ? (
                <Typography>No Items Needed Currently</Typography>
              ) : (
                data.conditions_accepted.split(",").map((item) => (
                  <>
                    <ul>
                      <li> {item}</li>
                    </ul>
                  </>
                ))
              )}
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6">Item Not Approved Condition List </Typography>
              {!data.conditions_not_accepted ? (
                <Typography>No Items Needed Currently</Typography>
              ) : (
                data.conditions_not_accepted.split(",").map((item) => (
                  <>
                    <ul>
                      <li> {item}</li>
                    </ul>
                  </>
                ))
              )}
            </Grid>
          </Grid>
        ))
      )}

      <Footer />
    </>
  );
}

export default UserViewOrg;
