import React from "react"
import {AppBar, Typography, Toolbar, Container, Button} from "@material-ui/core"
import {makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core/styles"
import {Link} from "react-router-dom"

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Fira Sans',
        'sans-serif',
      ].join(','),
    },});
  
function Footer(){
    return(
        <AppBar position="static" style={{background:"#55a0cc"}} >
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit" style={{position:"absolute", left:"30%"}}>
               <a href="/contact" style={{textDecoration:"none", color:"#fff"}}> Contact </a> | <a href="/terms" style={{textDecoration:"none", color:"#fff"}}> Terms Of Service </a> | <a href="/privacy" style={{textDecoration:"none", color:"#fff"}}>Privacy Policy </a> | © Sharity, 2021
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        
    )
}

export default Footer;