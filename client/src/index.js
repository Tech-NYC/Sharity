import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// NOTE: so far this changes theme on uservieworg
const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h6: {
        fontFamily: ["Fira sans"],
      },
      h4: {
        fontFamily: ["Fira sans"],
      },
      subtitle1: {
        fontFamily: ["Fira sans"],
        fontWeight: "600",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
