import React from "react"
import Navigation, {NavDefault} from './home/Navigation';
import Footer from './home/Footer'
import {Grid} from "@material-ui/core"
import TextField from "@material-ui/core/TextField";
import {ThemeProvider, createMuiTheme, makeStyles} from "@material-ui/core/styles";
import MuiPhoneNumber from "material-ui-phone-number";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom"
import { spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import ScheduleModal from './scheduler/ScheduleModal'

const nav = [
    {
        id: 1,
        link: "/#mission",
        label: "Mission"
    },
    {
        id: 2,
        link: "/#impact",
        label: "Impact"
    },
    {
        id: 3, 
        link: "/organizations",
        label: "Donate"
    }

]

function UserViewOrg(props){
    let orgName = props.match.params.value;
    const [org, setOrg] = React.useState("")
    const [userId, setUserId] = React.useState()
    const [thing, setThing] = React.useState(0)
    React.useEffect(() => {
      let isCurrent = true;
      fetch('http://localhost:3000/api/organizations/list').then((res) => {
          return res.json();
      }).then((data) => {
          if(isCurrent){
            let allOrgs = []
            data.map((name) => {
                console.log(name)
                if(name.name === orgName){
                    // setUserId(name.id)
                    allOrgs.push(name)
                }
              
            })
            setOrg(allOrgs)
          }
      })
      .catch ((err) => {
          console.error(err);
      })
      //need to make another fetch request to get the avatar of the org which is in users info
      return() => {
          isCurrent = false;
      }
  
    }, [thing]);
    // console.log(org)
    let daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return(
        <>
        <NavDefault nav = {nav}/>
        {org && org.map((orgs) => (
            <>
            <Grid container spacing={3} style={{ paddingTop: '5%' }}>
                <Grid container item xs={2} direction="column">
                    <img alt="logo"  style={{paddingLeft: "10%", width:"75%", height:"75%"}} src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"/>
                </Grid>
                <Grid container item xs={3} direction="column">
                    <Typography variant="h4">{orgs.name}</Typography>
                    <Typography variant="h6">Address</Typography>
                    <Typography variant="subtitle1">{orgs.address}</Typography>
                    <Typography variant="h6">Pickup Times</Typography>
                    {/* {console.log(orgs.pickup_times.split(","))} */}
                    <Typography variant="subtitle2">{orgs.pickup_times.split(",").map((time, i)=>(
                        <>
                        <ul>
                            <li key = {daysArr[i]}>{daysArr[i]}: {time}</li>
                            {/* <li key = {i}>Tuesday: {time}</li>
                            <li key = {i}>Wednesday: {time}</li>
                            <li key = {i}>Thursday: {time}</li>
                            <li key = {i}>Friday: {time}</li>
                            <li key = {i}>Saturday: {time}</li>
                            <li key = {i}>Sunday: {time}</li> */}
                        </ul>
                        </>
                    ))}</Typography>
                </Grid>
                <Grid container item xs={3} direction="column">
                    <ScheduleModal></ScheduleModal>
                </Grid>
            </Grid>
            <hr/>
            <Grid container spacing={3} justify="center" style={{paddingTop:"5%",paddingBottom:"10%"}}>
                <Grid  item xs={3} >
                    <Typography variant="h6">Items Needed List</Typography>
                    <ul>
                        <li>Sweater</li>
                    </ul>
                </Grid>
                <Grid  item xs={3} >
                    <Typography variant="h6">Item Approved Condition List </Typography>
                    <ul>
                        <li>Gently Used</li>
                    </ul>
                </Grid>
                <Grid  item  xs={3} >
                    <Typography variant="h6">Item Not Approved Condition List </Typography>
                    <ul>
                        <li>Stuff with holes</li>
                    </ul>
                </Grid>
            </Grid>  
            </>
        ))}
        
        <Footer/>
        </>
    )
    
}

export default UserViewOrg;