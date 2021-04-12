import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

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
        
        <div className={classes.root}>
            
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Container>
                                <div id="mission">
                                    <h3>Mission</h3>
                                    <p>
                                    Sharity makes it simple and easy to donate non-perishable foods, gently used furniture and clothing that will benefit those in need. 
                                    We actively support our partner organizations to make sure they have the resources needed to serve the community. 
                                    Our donors make it possible to bring nourishment and hope to those who are struggling. 
                                    </p>
                                </div>
                            </Container>
                        </Paper>
                    </Grid>
                </Grid>
          
        </div>
       
      )


}

export default Mission;    
