import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { UserContext } from "../../contexts/UserContext";

const btntheme = createMuiTheme({
  palette: {
    primary: {
      main: "#55a0cc",
    },
  },
});

export default function ScheduleModal(props) {
  const PROD = true;
  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://localhost:3000";

  const user = useContext(UserContext);
  console.log(user);
  const [user_id, setLoggedInId] = React.useState(user ? 2 : user.user.id);
  const [items, setItems] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState("");

  // uses user_id 125 as default until we can have login functionality

  const organization_id = props.org_id;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRedirect = () => {
    setOpen(false);
  };

  const handleDonation = (e) => {
    e.preventDefault();

    const data = {
      organization_id,
      user_id,
      location,
      items,
      time,
      date,
      status: "1",
    };

    fetch(`${URL}/api/donationRequest/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => handleClose);
  };

  return (
    <div>
      <ThemeProvider theme={btntheme}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Schedule Now
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <form onSubmit={handleDonation} noValidate>
            <DialogTitle id="form-dialog-title">Schedule Now</DialogTitle>
            <DialogContent>
              <DialogContentText>Please fill out the following in order to schedule a donation pickup.</DialogContentText>
              <TextField autoFocus margin="dense" id="fname" label="First Name" type="text" fullWidth />
              <TextField margin="dense" id="lname" label="Last Name" type="text" fullWidth />
              <TextField margin="dense" id="address" label="Address" type="text" fullWidth onChange={(e) => setLocation(e.target.value)} />
              <TextField margin="dense" id="items" label="Items" type="text" fullWidth onChange={(e) => setItems(e.target.value)} />
              <TextField margin="dense" id="date" type="date" fullWidth onChange={(e) => setDate(e.target.value)} />
              <TextField margin="dense" id="time" type="time" fullWidth onChange={(e) => setTime(e.target.value)} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" onClick={handleClose} component="button" color="primary">
                Schedule
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
