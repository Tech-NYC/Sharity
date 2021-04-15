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
    const [userId, setUserId] = React.useState("")
    const [user, setUser] = React.useState([])
    const [thing, setThing] = React.useState(0)
    React.useEffect(() => {
      let isCurrent = true;
      async function gettingOrgs(){
        await fetch('http://localhost:3000/api/organizations/list').then((res) => {
          return res.json();
        }).then((data) => {
          if(isCurrent){
            let allOrgs = []
            let allUsers = []
            data.map((name) => {
                // console.log(name)
                if(name.name === orgName){
                    setUserId(name.user_id)
                    // allUsers.push(name.user_id)
                    allOrgs.push(name)
                }
            //   console.log(allUsers)
            })
            // setUserId(allUsers)
            // console.log(userId)
            setOrg(allOrgs)
          }
      })
      .catch ((err) => {
          console.error(err);
      })
      }

      gettingOrgs();
      //need to make another fetch request to get the avatar of the org which is in users info
      console.log(userId)
      fetch("http://localhost:3000/api/user/getAll").then((res) => {
        return res.json()
      }).then((data)=> {
            let userInfo = []
            // console.log(data)
            data.map((info) => {
                // console.log(info.id , userId)
                if(info.id === userId){
                    userInfo.push(info)
                }
            }) 
            setUser(userInfo)
            
      }).catch((err)=> {console.log(err)})

      return() => {
          isCurrent = false;
      }
  
    }, [orgName, thing, userId]);

    // console.log(user)

    let daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return(
        <>
        <NavDefault nav = {nav}/>
        {user && user.map((info)=> (
            <Grid container xs={1} >
                    <img alt="logo"  style={{paddingLeft: "10%", width:"75%", height:"75%"}} src={info.avatar}/>
                    <Typography variant="h4">{info.first_name}</Typography>
            </Grid>
        ))}
                
        {org && org.map((orgs) => (
            <>
            <Grid container spacing={3} style={{ paddingTop: '5%' }}>
                <Grid container item xs={8} direction="column">
                    <Typography variant="h4">{orgs.name}</Typography>
                    <Typography variant="h6">Address</Typography>
                    <Typography variant="subtitle1">{orgs.address}</Typography>
                    <Typography variant="h6">Pickup Times</Typography>
                    {/* {console.log(orgs.pickup_times.split(","))} */}
                    <Typography variant="subtitle2">
                        {!orgs.pickup_times ? <Typography>No Times Yet</Typography>: orgs.pickup_times.split(",").map((time, i)=>(
                        <>
                        {daysArr[i]}: {time}, 
                        </>
                    ))}</Typography>
                </Grid>
                <Grid container item xs={3} direction="column">
                    <ScheduleModal></ScheduleModal>
                </Grid>
            </Grid>
             
            </>
        ))}
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
        
        <Footer/>
        </>
    )
    
}

export default UserViewOrg;