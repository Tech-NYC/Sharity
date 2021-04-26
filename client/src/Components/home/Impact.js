import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Cards from "./Assets/Cards";
import "../style/homepage.css";
import "../map/map.css";
import organization from "../style/imgs/orgbreakdown.png";
import Map from "./../map/Map";
require("dotenv").config();

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
  },
  overrides: {
    MuiTypography: {
      h3: {
        fontSize: "100px",
      },
    },
  },
});

function Impact() {
  const classes = useStyles();

  return (
    <>
      <span id="partners"></span>
      <div className="mission-section" style={{ backgroundColor: "white" }} id="mission">
        <Container>
          {/* <img src={donation} className="donation" alt="donation" /> */}

          <div className="mission">
            <ThemeProvider theme={theme}>
              <Typography variant="h5" style={{ textAlign: "center", color: "#1E152A", fontSize: "2.5rem", fontWeight: "1500" }} className="mission-words">
                <h3 style={{ padding: "0", marginBottom: "0" }}>Our Partners</h3>
              </Typography>
              <Typography>
                <p style={{ textAlign: "center", color: "#5AA4CE", fontSize: "1.5rem", fontWeight: "800", marginBottom: "10px" }}>
                  Live map of every organization on our platform.
                  <Map></Map>
                  {/* Sharity makes it easy to donate non-perishable foods, gently used furniture and clothing. We actively support our partner organizations to make sure they have the resources needed to */}
                  {/* serve their community. Our donors make it possible to bring nourishment and hope to those who are struggling. */}
                </p>
              </Typography>
            </ThemeProvider>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Impact;
