import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ThemeProvider, createMuiTheme, makeStyles} from "@material-ui/core/styles";

const btntheme = createMuiTheme({
    palette:{
        primary:{
            main:"#55a0cc"
        }
    }
})

export default function ScheduleModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <ThemeProvider theme={btntheme}>
            <form >
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Schedule Now
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Schedule Now</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the following in order to schedule a donation pickup.
                        </DialogContentText>
                        <TextField autoFocus margin="dense" id="fname" label="First Name" type="text" fullWidth/>
                        <TextField margin="dense" id="lname" label="Last Name" type="text" fullWidth/>
                        <TextField margin="dense" id="address" label="Address" type="text" fullWidth/>
                        <TextField margin="dense" id="date" type="date" fullWidth/>
                        <TextField margin="dense" id="time" type="time" fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Schedule
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        </ThemeProvider>
    </div>
  );
}