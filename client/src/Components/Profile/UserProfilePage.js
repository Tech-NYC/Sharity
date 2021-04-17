import React from 'react'
import { NavDefault } from '../home/Navigation'
import { nav } from './navlinks'
import { Grid, Typography } from '@material-ui/core'

const UserProfilePage = (props) => {

  // fetch data based on userid


  return (
    <div>
      <NavDefault nav={nav} ></NavDefault>
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
