import React from 'react';
import Footer from '../home/Footer';
import Navigation, {NavDefault} from "../home/Navigation";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import contactpic from '../style/imgs/contactpic.jpg'

const Contact = () => {
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

    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Fira Sans',
            'sans-serif',
          ].join(','),
        },});

    const useStyles = makeStyles({
            root: {
              flexGrow: 1,
            },
            paper: {
              textAlign: 'center',
              color: theme.palette.text.secondary,
            },
          })
          const classes = useStyles();
return (
    <div>
<NavDefault nav = {nav}/>
<div className={classes.root} style={{background:"#dbe3f0"}} className="contact">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{background:"#dbe3f0"}}><img src={contactpic} alt="making a phone call" width="1350" height="300"></img> <h1 style={{color:"#55a0cc", position:"absolute", top:"20%", left:"45%"}}>Contact</h1></Paper>
        </Grid>
        <Grid item xs={9} sm={6}>
          <Paper className={classes.paper} style={{background:"#dbe3f0"}}> <h2 style={{color:"#55a0cc"}}> CONTACT US</h2> <p style={{textAlign: "left", paddingLeft:"40px"}}>Tell us if you have any questions or concerns, and we'll get back to you as soon as possible. </p>
          <form style={{textAlign: "left", paddingLeft:"40px"}}>
          <label for="name">Name: </label> <br/>
          <input type="text" id="name" name="name" placeholder="Your Name"/>
          <br/>
          <label for="email">Email: </label> <br/>
          <input type="text" id="email" name="email" placeholder="Your Email"/>
          <br/>
          <label for="phone">Phone: </label> <br/>
          <input type="text" id="phone" name="phone" placeholder="Your Phone Number"/>
          <br/>

          <label for="message">Your Message:</label>
          <br/>
          <textarea id="message" name="message" rows="4" cols="50" placeholder="Your Message"></textarea>
          <br/>
          <button type="button">Send</button>
          </form>
          </Paper>
        </Grid>
        <Grid item xs={9} sm={6}>
          <Paper className={classes.paper} style={{background:"#dbe3f0"}}><h2 style={{color:"#55a0cc"}} >NEED HELP?</h2> <p style={{textAlign: "left"}}> Don't hesitate to ask us if you have any questions. Email us directly at help@sharity.com or call us at 1-800-275-0002</p> <h2 style={{color:"#55a0cc"}}> GIVE US A CALL</h2><p style={{textAlign: "left"}}> Our company is a family and each of us have a common personality trait, passion. We all have a passion for helping others. Our donors and organizations are what make us successful and we love to hear from you. So please don't hesitate to give us a call.</p><h2 style={{color:"#55a0cc"}}>Available at 9am to 6pm EST</h2><h2>800-275-002</h2></Paper>
        </Grid>
      </Grid>
    </div>
    
    
<Footer/>
    </div>
 )

}

export default Contact;