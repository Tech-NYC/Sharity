import React, { useContext } from "react";
import { Typography, Box } from "@material-ui/core";
import { UserContext } from "../../contexts/UserContext";
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'

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
  table: {
    minWidth: 650,
  }
});

const UserProfile = () => {
  
  const classes = styles()


  const sessionUser = useContext(UserContext);
  console.log(sessionUser.user, "user");
  if(!sessionUser.user.avatar) {
    sessionUser.user.avatar = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
  }

  // Temp data creation
  function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
  }

  const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


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
      <Box>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
    </div>
  );
};

export default UserProfile;
