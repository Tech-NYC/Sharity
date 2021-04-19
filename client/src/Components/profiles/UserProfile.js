import React, { useContext } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { UserContext } from '../../contexts/UserContext';

const UserProfilePage = (props) => {

  // fetch from usecontext
  const sessionUser = useContext(UserContext)
  console.log(sessionUser.user, 'user')

  return (
    <div>
      <Grid container spacing={3} style={{ paddingTop: "5%" }}>
        <Grid container xs={2}>
          <img
            alt="logo"
            style={{ paddingLeft: "10%", width: "75%", height: "75%" }}
            src={props.avatar}
          />
        </Grid>
        <Grid container item xs={7} direction="column">
          <Typography variant="h4">{props.first_name} {props.last_name}</Typography>
          <Typography variant="h6">email </Typography>
          <Typography variant="subtitle2">{props.email} </Typography>
          <Typography variant="h6">username</Typography>
          <Typography variant="subtitle2">{props.username} </Typography>
        </Grid>
      </Grid>
      <hr />
      {/* Add donation tables */}
    </div>
  )
}

export default UserProfilePage
