import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import { Typography, Grid }from "@material-ui/core"
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container"
import Cards from "./Assets/Cards"
import '../style/homepage.css';
import organization  from '../style/images/orgbreakdown.png';
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

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Fira Sans',
        'sans-serif',
      ].join(','),
    },});

function Impact(){
    const classes = useStyles();
    return (
        
        <div className={classes.root}>
                    <div className="impact-section" id = "impact">
                        <Container >
                            <div >
                                <ThemeProvider theme={theme}>
                                <Typography variant="h5" className="impact-words">
                                <h3>Impact </h3>
                                
                                Your generous donations of clothing, non-perishable foods, and other household goods make a big difference in the lives of individuals and families. 
                                Through partnerships with regional organizations, we’re providing direct access to donors to get resources that are needed the most to benefit as many NYC residents as possible. 
                                </Typography>
                                {/* <Typography className="fact" variant="h6">
                                Charitable organizations depend on donations from individuals.
                                 In fact, donations received by nonprofit organizations are largely made by individuals. 
                                 In 2019, individual giving made up 69% of all giving!
                                </Typography> */}
                                </ThemeProvider>
                                
                            </div>
                            <Grid container alignItems="center" justify="center" style={{padding:"5%"}} >
                            <img src={organization} className="org-breakdown" alt="organization breakdown" />
                            </Grid>
                        </Container>
                        </div>
               
                        <div className="join-section">
                        <Container>
                            <div id="join">
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h5" className="join-words">
                                <h3>Join Now</h3>
                                <p>
                                We rely on the generosity and passion of our partner organizations and donors, there’s a role for everyone as we work to solve this challenge, including you. 
                                We hope you’ll join us.
                                </p> 
                                </Typography>
                                </ThemeProvider> 
                                <Cards/>  
                            </div>
                        </Container>
                        </div>
            
        </div>
        
      )


}


export default Impact;