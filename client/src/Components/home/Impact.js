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

function Impact(){
    const classes = useStyles();
    return (
        
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Container>
                            <div id = "impact">
                                <h3>Impact </h3>
                                <p>
                                Your generous donations of clothing, non-perishable foods, and other household goods make a big difference in the lives of individuals and families. 
                                Through partnerships with regional organizations, we’re providing direct access to donors to get resources that are needed the most to benefit as many NYC residents as possible. 
                                </p> 
                            </div>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Container>
                            <div id="join">
                                <h3>Join Now</h3>
                                <p>
                                We rely on the generosity and passion of our partner organizations and donors, there’s a role for everyone as we work to solve this challenge, including you. 
                                We hope you’ll join us.
                                </p>     
                            </div>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        
      )


}


export default Impact;