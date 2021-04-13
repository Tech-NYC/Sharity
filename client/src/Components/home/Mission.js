import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import '../style/homepage.css';
import donation from '../style/imgs/donation.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Mission(){
    const classes = useStyles();
    return (
        
        // <div className={classes.root}>
          <div className="mission-section" id="mission">
          
            <Container>
            
              <img src={donation} className="donation" alt="donation" />
              
              <div className="mission">
                <ThemeProvider theme={theme} >
                    <Typography variant="h5" className="mission-words"> 
                      <h3>Mission</h3>
                      <p>
                      Sharity makes it simple and easy to donate non-perishable foods, gently used furniture and clothing that will benefit those in need. 
                      We actively support our partner organizations to make sure they have the resources needed to serve the community. 
                      Our donors make it possible to bring nourishment and hope to those who are struggling. 
                      </p>
                    </Typography>
                </ThemeProvider>
              </div>
            </Container>
          </div>
          
        //</div>
       
      )


}

export default Mission;    
