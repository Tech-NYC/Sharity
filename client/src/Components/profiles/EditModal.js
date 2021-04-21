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

export default function EditModal(props) {
  const PROD = true;
  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://localhost:3000";

  const user = useContext(UserContext);
  const [user_id, setLoggedInId] = React.useState(user.user.id);
  const [name, setName] = React.useState("")
  const [location, setLocation] = React.useState("");
  const [description, setDescription] = React.useState("")
  const [needed, setNeeded] = React.useState("");
  const [accepted, setAccepted] = React.useState("");
  const [notaccepted, setNotAccepted] = React.useState("");

  const [open, setOpen] = React.useState(false);
  // const [time, setTime] = React.useState("");
  // const [date, setDate] = React.useState("");

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

  // const handleDonation = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     organization_id,
  //     user_id,
  //     location,
  //     items,
  //     time,
  //     date,
  //     status: "1",
  //   };

  //   fetch(`${URL}/api/donationRequest/create`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => handleClose);
  // };

  const handleOrgTable = (e) => {
    // updates organization name, description, and location
    e.preventDefault();
    const data = {
      id: organization_id,
      name,
      location,
      description
    };

    fetch(`${URL}/api/organization/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    }).then(response => {
      return response.json()
    })

  }

  const handleNeedsTable = (e) => {
    e.preventDefault();
    const data = {
      organization_id,
      needed,
      accepted,
      notaccepted,
    };
    
    console.log(data)
    fetch(`${URL}/api/organization_list/update`, {
         method: "PATCH",
         headers: {
           "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*",
         },
         body: JSON.stringify(data),
       })
         .then((response) => {
           return response.json()
        })

  }

  return (
    <div>
      <ThemeProvider theme={btntheme}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Edit Profile
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          
            <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
            <DialogContent>
              <DialogContentText>Submit to edit profile information</DialogContentText>
              <form onSubmit={handleOrgTable} noValidate>
                <TextField autoFocus margin="dense" id="orgname" label="Organization Name" type="text" fullWidth onChange={(e) => setName(e.target.value)} />
                <TextField margin="dense" id="address" label="Address" type="text" fullWidth onChange={(e) => setLocation(e.target.value)} />
                <TextField margin="dense" id="description" label="Description" type="text" fullWidth onChange={(e) => setDescription(e.target.value)}/>
                <DialogActions>
                  <Button type="submit" component="button" color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </form>
              <form onSubmit={handleNeedsTable} noValidate>
                <TextField margin="dense" id="items-needed" label="Items Needed" type="text" fullWidth onChange={(e) => setNeeded(e.target.value)} />
                <TextField margin="dense" id="accepted" label="Conditions Accepted" type="text" fullWidth onChange={(e) => setAccepted(e.target.value)} />
                <TextField margin="dense" id="not-accepted" label="Conditions Not Accepted" type="text" fullWidth onChange={(e) => setNotAccepted(e.target.value)} />
                <DialogActions>
                  <Button type="submit"  component="button" color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </form>
            </DialogContent>
            <DialogActions>
              <Button type="submit"  onClick={handleClose} component="button" color="primary">
                Finish
              </Button>
            </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
