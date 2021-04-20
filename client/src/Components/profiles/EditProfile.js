import React, { useContext } from "react";
import Navigation, { NavDefault } from "../home/Navigation";
import Footer from "../home/Footer";
import { Box, Grid } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../../contexts/UserContext";
import EditModal from "./EditModal"


function EditProfile() {
  const PROD = true;

  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://localhost:3000";

  const sessionUser = useContext(UserContext);
  // console.log(sessionUser.user.name, "state user");
  let orgName = sessionUser ? sessionUser.user.name : "";

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
              // console.log(name.name, orgName)
              if (name.name === orgName) {
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
    fetch(`${URL}/api/user/getAll`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let userInfo = [];
        // console.log(data)
        data.map((info) => {
          // console.log(info.id , userId)
          if (info.id === userId) {
            userInfo.push(info);
          }
        });
        setUser(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });

    //need to fetch from organizations list in order to get the information for the needs
    fetch(`${URL}/api/organization/getAll`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let orgNeeds = [];
        // console.log(data)
        data.map((info) => {
          // console.log(info)
          if (info.organization_id === orgId) {
            orgNeeds.push(info);
          }
        });
        setOrgNeeds(orgNeeds);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      isCurrent = false;
    };
  }, [URL, orgId, orgName, thing, userId]);


  // array of all info
  let mergedArray = [];
  // merges the orgneeds, user and org arrays of objects to create a new array of object
  const mergeArrays = () => {
    //map over org
    org.forEach((orgInfo) => {
      //iterate through user
      user.forEach((userInfo) => {
        mergedArray.push({
          id: orgInfo.id,
          name: orgInfo.name,
          address: orgInfo.address,
          description: orgInfo.description,
          pickup: orgInfo.pickup_times,
          logo: userInfo.avatar,
          isEditMode: false,
        });
      });
    });
    return mergedArray;
  };

  mergeArrays();


  return (
    <>
      {mergedArray &&
        mergedArray.map((data) => (
            <Box container display="flex" justify="center" style={{ paddingTop: "5%"}}>
              <Box flexDirection="row" flexWrap="wrap" xs={2} style={{width: "300px", float: "left", paddingTop:"30px" , paddingBottom:"30px"}}>
                <img alt="logo" style={{  paddingLeft: "10%", width: "75%", height: "75%" }} src={data.logo} />
              </Box>
              <Box flexDirection="row" item xs={4} direction="column" style={{width: "300px",float: "center",paddingTop:"30px" , paddingBottom:"30px"}}>
                <Typography variant="h5">Organization Name</Typography>
                <Typography variant="subtitle1" style={{marginLeft: "10%", marginRight: "10%"}}>{data.name}</Typography>
                <Typography variant="h5">Address</Typography>
                <Typography variant="subtitle1" style={{marginLeft: "10%", marginRight: "10%"}}> {data.address}</Typography>
                <Typography variant="h5">Description</Typography>
                <Typography variant="subtitle1" style={{marginLeft: "10%", marginRight: "10%"}}>{data.description}</Typography>
              </Box>
              <Box flexDirection="row" item xs={4} direction="column" style={{float: "right",paddingTop:"30px" , paddingBottom:"30px"}}>
                <EditModal org_id = {orgId}></EditModal>
              </Box>
            </Box>
        ))}

      <hr />

      {orgNeeds.length === 0 ? (
        <Box container spacing={3} justify="center">
          <Box item xs={3}>
            <Typography variant="h6">Items Needed List</Typography>
            <Typography>No Items Needed Currently</Typography>
          </Box>
          <Box item xs={3} >
            <Typography variant="h6">Item Approved Condition List </Typography>
            <Typography>No Items Needed Currently</Typography>
          </Box>
          <Box item xs={3}>
            <Typography variant="h6">Item Not Approved Condition List </Typography>
            <Typography>No Items Needed Currently</Typography>
          </Box>
        </Box>
      ) : (
        orgNeeds.map((data) => (
          <Box container display="flex" justify="center" align="center" style={{  width: "1200px", overflow: "hidden", margin: "auto",padding:"25px" }}>
            <Box style={{ width: "400px", float:"center"}}>
              <Typography variant="h5">Items Needed List</Typography>
              {!data.items_needed ? (
                <Typography >No Items Needed Currently</Typography>
              ) : (
                data.items_needed.split(",").map((item, i) => (
                  <Typography variant="subtitle1">{item}</Typography>
                ))
              )}
            </Box>
            <Box style={{width: "400px",float: "center"}}>
              <Typography variant="h5">Item Approved Condition List </Typography>
              {!data.conditions_accepted ? (
                <Typography>No Items Currently Needed</Typography>
              ) : (
                data.conditions_accepted.split(",").map((item, i) => (
                  <Typography variant="subtitle1">{item}</Typography>
                ))
              )}
            </Box>
            <Box  style={{width: "400px",float: "right"}}>
              <Typography variant="h5">Item Not Approved Condition List </Typography>
              {!data.conditions_not_accepted ? (
                <Typography>No Items Currently Needed</Typography>
              ) : (
                data.conditions_not_accepted.split(",").map((item, i) => (
                  <Typography variant="subtitle1">{item}</Typography>
                ))
              )}
            </Box>
          </Box>
        ))
      )} 
    </>
  );
}

export default EditProfile;
