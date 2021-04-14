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

    
    return(
        <>
        <NavDefault nav = {nav}/>
        <Grid container spacing={3} style={{ paddingTop: '5%' }}>
            <Grid container item xs={2} direction="column">
                <img alt="logo"  style={{paddingLeft: "10%", width:"75%", height:"75%"}} src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"/>
            </Grid>
            <Grid container item xs={3} direction="column">
                <Typography variant="h4">{orgName}</Typography>
                <Typography variant="h6">Address</Typography>
                <Typography variant="h6">Pickup Times</Typography>
            </Grid>
            <Grid container item xs={3} direction="column" alignItems="right">
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
        <Footer/>
        </>
    )
    
}

export default UserViewOrg;