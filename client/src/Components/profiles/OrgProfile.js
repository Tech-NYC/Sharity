import React, { useContext } from "react";
import Navigation, { NavDefault } from "../home/Navigation";
import Footer from "../home/Footer";
import { Box } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../../contexts/UserContext";

const styles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: 50,
  },
  textField: {
    marginLeft: "10%",
    marginRight: "10%",
    width: 300,
    color: "black",
    fontSize: 30,
    opacity: 1,
    borderBottom: 0,
    "&:before": {
      borderBottom: 0,
    },
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
});

function OrgProfile(props) {
  const PROD = true;

  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://localhost:3000";

  const sessionUser = useContext(UserContext);
  console.log(sessionUser, "state user");
  let orgName = sessionUser ? sessionUser.name : "";

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

  const [state, setState] = React.useState({ name: " ", editMode: false, mouseEnter: false });

  const handleChange = (event) => {
    setState({ [event.target.name]: event.target.value });
  };

  const handleMouseEnter = (event) => {
    if (!state.mouseEnter) {
      setState({ mouseEnter: true });
    }
  };

  const handleMouseLeave = (event) => {
    if (state.mouseEnter) {
      setState({ mouseEnter: false });
    }
  };

  const handleClick = () => {
    setState({
      editMode: true,
      mouseEnter: false,
    });
  };
  const classes = styles();
  return (
    <>
      {mergedArray &&
        mergedArray.map((data) => (
          <>
            <Box container diplay="flex" style={{ paddingTop: "5%" }}>
              <Box flexDirection="row" flexWrap="wrap" xs={2}>
                <img alt="logo" style={{ paddingLeft: "10%", width: "5%", height: "5%" }} src={data.logo} />
              </Box>
              <Box flexDirection="row" item xs={4} direction="column">
                <Typography variant="h6">Organization Name</Typography>
                <TextField
                  name="name"
                  defaultValue={data.name}
                  margin="normal"
                  error={state.name === ""}
                  onChange={handleChange}
                  disabled={!state.editMode}
                  className={classes.textField}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  InputProps={{
                    classes: { disabled: classes.disabled },
                    endAdornment: state.mouseEnter ? (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClick}>
                          <Edit />
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      ""
                    ),
                  }}
                />
                <Typography variant="h6">Address</Typography>
                <TextField
                  name="address"
                  defaultValue={data.address}
                  margin="normal"
                  error={state.name === ""}
                  onChange={handleChange}
                  disabled={!state.editMode}
                  className={classes.textField}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  InputProps={{
                    classes: { disabled: classes.disabled },
                    endAdornment: state.mouseEnter ? (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClick}>
                          <Edit />
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      ""
                    ),
                  }}
                />
                <Typography variant="h6">Description</Typography>
                <TextField
                  name="description"
                  defaultValue={data.description}
                  margin="normal"
                  error={state.name === ""}
                  onChange={handleChange}
                  disabled={!state.editMode}
                  className={classes.textField}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  InputProps={{
                    classes: { disabled: classes.disabled },
                    endAdornment: state.mouseEnter ? (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClick}>
                          <Edit />
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      ""
                    ),
                  }}
                />
              </Box>
              <Box flexDirection="row" flexWrap="wrap" item xs={3} direction="column">
                <Typography variant="h6">Pickup Times</Typography>
                {!data.pickup ? (
                  <Typography>No Times Yet</Typography>
                ) : (
                  data.pickup.split(",").map((time, i) => (
                    <>
                      <Typography variant="subtitle2"> {daysArr[i]}:</Typography>
                      <TextField
                        name="time"
                        defaultValue={time}
                        margin="normal"
                        error={state.name === ""}
                        onChange={handleChange}
                        disabled={!state.editMode}
                        className={classes.textField}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        InputProps={{
                          classes: { disabled: classes.disabled },
                          endAdornment: state.mouseEnter ? (
                            <InputAdornment position="end">
                              <IconButton onClick={handleClick}>
                                <Edit />
                              </IconButton>
                            </InputAdornment>
                          ) : (
                            ""
                          ),
                        }}
                      />
                    </>
                  ))
                )}
              </Box>
            </Box>
          </>
        ))}
      <hr />

      {orgNeeds.length === 0 ? (
        <Box container spacing={3} justify="center" style={{ paddingTop: "5%", paddingBottom: "10%" }}>
          <Box item xs={3}>
            <Typography variant="h6">Items Needed List</Typography>
            <TextField
              name="needed"
              defaultValue="No Items Needed Currently"
              margin="normal"
              error={state.name === ""}
              onChange={handleChange}
              disabled={!state.editMode}
              className={classes.textField}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              InputProps={{
                classes: { disabled: classes.disabled },
                endAdornment: state.mouseEnter ? (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClick}>
                      <Edit />
                    </IconButton>
                  </InputAdornment>
                ) : (
                  ""
                ),
              }}
            />
          </Box>
          <Box item xs={3}>
            <Typography variant="h6">Item Approved Condition List </Typography>
            <TextField
              name="accepted"
              defaultValue="No Items Needed Currently"
              margin="normal"
              error={state.name === ""}
              onChange={handleChange}
              disabled={!state.editMode}
              className={classes.textField}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              InputProps={{
                classes: { disabled: classes.disabled },
                endAdornment: state.mouseEnter ? (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClick}>
                      <Edit />
                    </IconButton>
                  </InputAdornment>
                ) : (
                  ""
                ),
              }}
            />
          </Box>
          <Box item xs={3}>
            <Typography variant="h6">Item Not Approved Condition List </Typography>
            <TextField
              name="not-accepted"
              defaultValue="No Items Needed Currently"
              margin="normal"
              error={state.name === ""}
              onChange={handleChange}
              disabled={!state.editMode}
              className={classes.textField}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              InputProps={{
                classes: { disabled: classes.disabled },
                endAdornment: state.mouseEnter ? (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClick}>
                      <Edit />
                    </IconButton>
                  </InputAdornment>
                ) : (
                  ""
                ),
              }}
            />
          </Box>
        </Box>
      ) : (
        orgNeeds.map((data) => (
          <Box container spacing={3} justify="center" style={{ paddingTop: "5%", paddingBottom: "10%" }}>
            <Box item xs={3}>
              <Typography variant="h6">Items Needed List</Typography>
              {!data.items_needed ? (
                <TextField
                  name="needed"
                  defaultValue="No Items Needed Currently"
                  margin="normal"
                  error={state.name === ""}
                  onChange={handleChange}
                  disabled={!state.editMode}
                  className={classes.textField}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  InputProps={{
                    classes: { disabled: classes.disabled },
                    endAdornment: state.mouseEnter ? (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClick}>
                          <Edit />
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      ""
                    ),
                  }}
                />
              ) : (
                data.items_needed.split(",").map((item, i) => (
                  <TextField
                    name="needed"
                    defaultValue={item}
                    margin="normal"
                    error={state.name === ""}
                    onChange={handleChange}
                    disabled={!state.editMode}
                    className={classes.textField}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    InputProps={{
                      classes: { disabled: classes.disabled },
                      endAdornment: state.mouseEnter ? (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClick}>
                            <Edit />
                          </IconButton>
                        </InputAdornment>
                      ) : (
                        ""
                      ),
                    }}
                  />
                ))
              )}
            </Box>
            <Box item xs={3}>
              <Typography variant="h6">Item Approved Condition List </Typography>
              {!data.conditions_accepted ? (
                <TextField
                  name="approved"
                  defaultValue="No Items Currently Needed"
                  margin="normal"
                  error={state.name === ""}
                  onChange={handleChange}
                  disabled={!state.editMode}
                  className={classes.textField}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  InputProps={{
                    classes: { disabled: classes.disabled },
                    endAdornment: state.mouseEnter ? (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClick}>
                          <Edit />
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      ""
                    ),
                  }}
                />
              ) : (
                data.conditions_accepted.split(",").map((item, i) => (
                  <TextField
                    name="approved"
                    defaultValue={item}
                    margin="normal"
                    error={state.name === ""}
                    onChange={handleChange}
                    disabled={!state.editMode}
                    className={classes.textField}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    InputProps={{
                      classes: { disabled: classes.disabled },
                      endAdornment: state.mouseEnter ? (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClick}>
                            <Edit />
                          </IconButton>
                        </InputAdornment>
                      ) : (
                        ""
                      ),
                    }}
                  />
                ))
              )}
            </Box>
            <Box item xs={3}>
              <Typography variant="h6">Item Not Approved Condition List </Typography>
              {!data.conditions_not_accepted ? (
                <TextField
                  name="not-approved"
                  defaultValue="No Items Currently Needed"
                  margin="normal"
                  error={state.name === ""}
                  onChange={handleChange}
                  disabled={!state.editMode}
                  className={classes.textField}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  InputProps={{
                    classes: { disabled: classes.disabled },
                    endAdornment: state.mouseEnter ? (
                      <InputAdornment position="end">
                        {" "}
                        <IconButton onClick={handleClick}>
                          {" "}
                          <Edit />{" "}
                        </IconButton>{" "}
                      </InputAdornment>
                    ) : (
                      ""
                    ),
                  }}
                />
              ) : (
                data.conditions_not_accepted.split(",").map((item, i) => (
                  <TextField
                    name="not-approved"
                    defaultValue={item}
                    margin="normal"
                    error={state.name === ""}
                    onChange={handleChange}
                    disabled={!state.editMode}
                    className={classes.textField}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    InputProps={{
                      classes: { disabled: classes.disabled },
                      endAdornment: state.mouseEnter ? (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClick}>
                            <Edit />
                          </IconButton>
                        </InputAdornment>
                      ) : (
                        ""
                      ),
                    }}
                  />
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

export default OrgProfile;
