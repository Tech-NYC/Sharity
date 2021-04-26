import React, { useContext } from "react";
import { Box, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../../contexts/UserContext";
import EditModal from "./EditModal";
import { formatDate, formatTime } from "./parseDateTime";

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
  let daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box display="flex" style={{ paddingTop: "5%", paddingBottom: "5%" }}>
          {mergedArray &&
            mergedArray.map((data) => (
              <>
                <Box flexDirection="column" paddingLeft="5%" xs={2}>
                  <img alt="logo" style={{ width: "100%" }} src={data.logo} />
                </Box>
                <Box flexDirection="column" xs={4} direction="column" flexWrap="nowrap">
                  <Typography variant="h3" style={{ margin: "1%", marginTop: "0", paddingTop: "0" }}>
                    {data.name}
                  </Typography>
                  <Typography variant="h6" style={{ margin: "1%" }}>
                    Address
                  </Typography>
                  <Typography variant="subtitle1" style={{ margin: "1%" }}>
                    {" "}
                    {data.address}
                  </Typography>
                  <Typography variant="h6" style={{ margin: "1%" }}>
                    Description
                  </Typography>
                  <Typography variant="subtitle1" style={{ margin: "1%" }}>
                    {data.description}
                  </Typography>
                  <Typography variant="h6" style={{ margin: "1%" }}>
                    Pickup Times{" "}
                  </Typography>
                  <Typography variant="subtitle1" style={{ margin: "1%" }}>
                    {!data.pickup ? (
                      <Typography>No Times Yet</Typography>
                    ) : (
                      data.pickup.split(",").map((time, i) => (
                        <>
                          <li style={{ listStyleType: "none" }} key={i}>
                            <b> {daysArr[i]} </b> {formatTime(time.split("-")[0]) + " - " + formatTime(time.split("-")[1])}{" "}
                          </li>
                        </>
                      ))
                    )}
                  </Typography>
                </Box>
                <Box flexDirection="column" xs={4} direction="column" style={{ paddingRight: "5%" }}>
                  <EditModal org_id={orgId}></EditModal>
                </Box>
              </>
            ))}
        </Box>
      </div>
      <Divider />

      {orgNeeds.length === 0 ? (
        <Box spacing={3} justify="center">
          <Box xs={3}>
            <Typography variant="h6">Items Needed List </Typography>
            <Typography>No Items Needed Currently</Typography>
          </Box>
          <Box xs={3}>
            <Typography variant="h6">Item Approved Condition List </Typography>
            <Typography>No Items Needed Currently </Typography>
          </Box>
          <Box xs={3}>
            <Typography variant="h6">Item Not Approved Condition List </Typography>
            <Typography>No Items Needed Currently</Typography>
          </Box>
        </Box>
      ) : (
        orgNeeds.map((data) => (
          <div style={{ backgroundColor: "#5AA4CE" }}>
            <Box display="flex" justify="center" align="center" style={{ backgroundColor: "#5AA4CE", width: "1200px", overflow: "hidden", margin: "auto", padding: "25px" }}>
              <Box style={{ width: "400px", float: "center" }}>
                <Box fontWeight="fontWeightBold">
                  <Typography variant="h6" style={{ fontWeight: "900", color: "#1E152A" }}>
                    Items Needed List:{" "}
                  </Typography>
                </Box>

                {!data.items_needed ? (
                  <Typography variant="h6">No Items Needed Currently:</Typography>
                ) : (
                  data.items_needed.split(",").map((item, i) => (
                    <Typography style={{ color: "white" }} variant="subtitle1" key={i}>
                      {item}
                    </Typography>
                  ))
                )}
              </Box>
              <Box style={{ width: "400px", float: "center" }}>
                <Typography variant="h6" style={{ fontWeight: "900", color: "#1E152A" }}>
                  Item Approved Condition List:{" "}
                </Typography>
                {!data.conditions_accepted ? (
                  <Typography variant="h6">No Items Currently Needed</Typography>
                ) : (
                  data.conditions_accepted.split(",").map((item, i) => (
                    <Typography style={{ color: "white" }} variant="subtitle1" key={i}>
                      {item}
                    </Typography>
                  ))
                )}
              </Box>
              <Box style={{ width: "400px", float: "right" }}>
                <Typography variant="h6" style={{ fontWeight: "900", color: "#1E152A" }}>
                  Item Not Approved Condition List:{" "}
                </Typography>
                {!data.conditions_not_accepted ? (
                  <Typography>No Items Currently Needed</Typography>
                ) : (
                  data.conditions_not_accepted.split(",").map((item, i) => (
                    <Typography style={{ color: "white" }} variant="subtitle1" key={i}>
                      {item}
                    </Typography>
                  ))
                )}
              </Box>
            </Box>
          </div>
        ))
      )}
    </>
  );
}

export default EditProfile;
