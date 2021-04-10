import React, {useState, useContext, useEffect} from 'react';
import Navigation, {NavDefault} from "../home/Navigation"
import {AppBar, Paper, Tabs, Tab, Grid, Button, Checkbox} from "@material-ui/core"
import TextField from "@material-ui/core/TextField";
import {ThemeProvider, createMuiTheme, makeStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { spacing } from '@material-ui/system';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles({
    root: {
        flexGrow: 1
    },
    linkStyle: {
        color: "#757575",
        textDecoration:"none"
    },
})

const logotheme = createMuiTheme({
    typography: {
        fontFamily: [
        'Economica',
        'sans-serif',
        ].join(','),
        color: "#55a0cc"
    },
});

const btntheme = createMuiTheme({
    palette:{
        primary:{
            main:"#55a0cc"
        }
    }
})

const nav = [
    {
        id: 1,
        link: "#mission",
        label: "Mission"
    },
    {
        id: 2,
        link: "#impact",
        label: "Impact"
    },
    {
        id: 3, 
        link: "/organizations",
        label: "Donate"
    }
]

function TabContainer(props) {
    return (
        <Grid container  direction="column" alignItems="center" justify="center" style={{ minHeight: '300%' }} autoFocus>
                <Typography component="div" style={{ padding: 8 * 3 }} >
                    {props.children}
                </Typography>
        </Grid> 
      
    );
}
  
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

//make onsubmit and post request to forms when user or org clicks to let backend know which is which
  

function Signup(){
    const [state, setState] = React.useState(0)

    const handleChange = (event, value) => {
      setState({ value });
    };
  
    const classes = useStyle();
    const { value } = state;
  


    return(
        <>
            <NavDefault nav = {nav}/>
            <div className={classes.root}>
                <ThemeProvider theme={btntheme}>
                    <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                        <Tab label="User Signup" autoFocus value={0}/>
                        <Tab label="Organization Signup" value = {1}/>
                    </Tabs>
                </ThemeProvider>
                {value === 0 && <TabContainer>
                                    <ThemeProvider theme={btntheme}>
                                        <form className={classes.form} noValidate style={{display:"inline-block"}}>
                                            <Grid container spacing={0} alignItems="center" justify="center" > 
                                                <Grid item xs={12} sm={6} style={{padding:"10px"}}>
                                                    <TextField autoComplete="fname" name="firstName" variant="outlined" required fullWidth id="firstName" label="First Name" InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}} autoFocus/>
                                                </Grid>
                                                <Grid item xs={12} sm={6} style={{padding:"10px"}}>
                                                    <TextField variant="outlined" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lname" InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={6} style={{padding:"10px"}}>
                                                    <TextField variant="outlined" required fullWidth id="username" label="Username" name="username" autoComplete="username" InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}}/>
                                                </Grid>                                                
                                                <Grid item xs={12} sm= {6} style={{padding:"10px"}}>
                                                    <TextField variant="outlined" required fullWidth id="phonenum" label="Phone Number" name="phonenumber" autoComplete="phonenumber" InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}}/>
                                                </Grid>
                                                <Grid item xs={12} style={{padding:"10px"}}>
                                                    <TextField variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}}/>
                                                </Grid>
                                                <Grid item xs={12} style={{padding:"10px"}}>
                                                    <TextField variant="outlined" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}}/>
                                                </Grid>
                                                <Checkbox color="default" inputProps={{ 'aria-label': 'checkbox with default color' }}/>
                                                <Typography className={classes.linkStyle}> Terms And Conditions</Typography>
                                                
                                                <Button variant="contained" color="primary" style={{color:"white"}} >
                                                    Signup
                                                </Button>
                                            </Grid>
                                        </form>
                                    </ThemeProvider>
                                </TabContainer>
                }
                {value === 1 && <TabContainer style={{justifyConten:"center"}}>                                
                                    <ThemeProvider theme={btntheme}>
                                        <form className={classes.form} noValidate style={{display:"inline-block"}} >
                                            <Grid container spacing={0} alignItems="center" justify="center" > 
                                                <Grid item xs={12} sm={6} style={{padding:"10px"}}>
                                                    <TextField autoComplete="orgname" name="orgName" variant="outlined" required fullWidth id="orgName" label="Organization Name" InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}} autoFocus/>
                                                </Grid>
                                                <Grid item xs={12} sm= {6} style={{padding:"10px"}}>
                                                    <TextField variant="outlined" required fullWidth id="phonenum" label="Phone Number" name="phonenumber" autoComplete="phonenumber" InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={6} style={{padding:"10px"}}>
                                                    <TextField autoComplete="fname" name="firstName" variant="outlined" required fullWidth id="firstName" label="First Name" InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}} autoFocus/>
                                                </Grid>
                                                <Grid item xs={12} sm={6} style={{padding:"10px"}}>
                                                    <TextField variant="outlined" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lname" InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}}/>
                                                </Grid>
                                                <Grid item xs={12} style={{padding:"10px"}}>
                                                    <TextField variant="outlined" required fullWidth id="address" label="Address" name="address" autoComplete="address" InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}}/>
                                                </Grid>
                                                <Grid item xs={12} style={{padding:"10px"}}>
                                                    <TextField variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}}/>
                                                </Grid>
                                                <Grid item xs={12} style={{padding:"10px"}}>
                                                    <TextField variant="outlined" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}}/>
                                                </Grid>
                                                <Button variant="contained" color="primary" style={{color:"white"}} >
                                                    Signup
                                                </Button>
                                            </Grid>
                                        </form>
                                    </ThemeProvider>
                                </TabContainer>
                }
            </div>
        </>
    )
}

export default Signup;