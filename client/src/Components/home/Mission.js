import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../style/homepage.css";
import donation from "../style/imgs/donation.png";
import missionImg from "../style/imgs/mission.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Fira Sans", "sans-serif"].join(","),
    fontWeight: "bold",
  },
});

function Mission() {
  const classes = useStyles();
  return (
    // <div className={classes.root}>
    <div style={{ display: "flex", backgroundColor: "#1E152A" }}>
      <Container>
        <div className="mission-section" style={{ backgroundColor: "#1E152A", marginLeft: "10%" }} id="mission">
          {/* <img src={donation} className="donation" alt="donation" /> */}

          <div className="mission" style={{ marginRight: "0", paddingRight: "0" }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h5" style={{ textAlign: "center", color: "#5AA4CE", fontSize: "2.5rem", fontWeight: "1500" }} className="mission-words">
                <h3 style={{ padding: "0", marginBottom: "0" }}>Mission</h3>
              </Typography>
              <Typography>
                <p style={{ textAlign: "center", color: "white", fontSize: "1.5rem", fontWeight: "800" }}>
                  Bridge the communication gap between charitable organizations and donors.
                  {/* Sharity makes it easy to donate non-perishable foods, gently used furniture and clothing. We actively support our partner organizations to make sure they have the resources needed to */}
                  {/* serve their community. Our donors make it possible to bring nourishment and hope to those who are struggling. */}
                </p>
              </Typography>
            </ThemeProvider>
          </div>

          <img
            src={missionImg}
            style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", marginRight: "8vw", zIndex: "1" }}
            alt="Animated donators holding their contributions in the air together."
          />
        </div>
      </Container>
    </div>
  );
}

export default Mission;
