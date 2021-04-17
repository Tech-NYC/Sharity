import React from 'react'
import { NavDefault } from '../home/Navigation'
import nav from './navlinks'
import { Grid, Typography } from '@material-ui/core'

const UserProfilePage = () => {
  // temporary data store
  const data = {
    first_name: "John",
    last_name: "Doe",
    email: "email@example.com",
    phone_number: "(917) 533-8452",
    username: "JoDoe",
    avatar: "https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png"
  }
  return (
    <div>
      <NavDefault nav={nav} ></NavDefault>
      <Grid container spacing={3} style={{ paddingTop: "5%" }}>
        <Grid container xs={2}>
          <img
            alt="logo"
            style={{ paddingLeft: "10%", width: "75%", height: "75%" }}
            src={}
          />
        </Grid>
        <Grid container item xs={7} direction="column">
          <Typography variant="h4">{data.first_name} {data.last_name}</Typography>
          <Typography variant="h6">email </Typography>
          <Typography variant="subtitle2">{data.email} </Typography>
          <Typography variant="h6">username</Typography>
          <Typography variant="subtitle2">{data.username} </Typography>
        </Grid>
      </Grid>
      <hr />
      {/* Add donation tables */}
    </div>
  )
}

export default UserProfilePage
