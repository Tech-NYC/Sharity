import React, { useContext } from "react";
import { Typography, Box } from "@material-ui/core";
import { UserContext } from "../../contexts/UserContext";
import { makeStyles } from '@material-ui/core/styles'

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

const UserProfile = () => {
  
  const classes = styles()


  const sessionUser = useContext(UserContext);
  console.log(sessionUser.user, "user");
  if(!sessionUser.user.avatar) {
    sessionUser.user.avatar = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
  }
  return (
    <div>
      <Box container display="flex" style={{ paddingTop: "5%" }}>
          <Box flexDirection="row" flexWrap="wrap" xs={2}>
            <img
              alt="avatar"
              style={{ paddingLeft: "10%", width: "75%", height: "75%" }}
              src={sessionUser.user.avatar}
              referrerPolicy="no-referrer" 
            />
          </Box>
          <Box flexDirection="row" item xs={4} direction="column">
            <Typography variant="h6"> Username </Typography>
            <Typography className={classes.textField} variant="h4">
              {sessionUser.user.username}
            </Typography>
            <Typography variant="h6"> Email </Typography>
            <Typography className={classes.textField} variant="h4">{sessionUser.user.email} </Typography>
            <Typography variant="h6">Phone Number</Typography>
            <Typography className={classes.textField} variant="h4">{sessionUser.user.phone_number} </Typography>
          </Box>
          <Box flexDirection="row" flexWrap="wrap" item xs={3} direction="column"></Box>
      </Box>
      <hr />
    </div>
  );
};

export default UserProfile;
