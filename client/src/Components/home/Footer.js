import React from "react"
import {AppBar, Typography, Toolbar, Container, Button} from "@material-ui/core"
import {createMuiTheme} from "@material-ui/core/styles"
import '../style/Footer.css'

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
               <a href="/contact" className="contact"> Contact </a>
                | <a href="/terms" className="terms"> Terms Of Service </a>
                | <a href="/privacy" className="privacy">Privacy Policy </a> 
                | © Sharity, 2021
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        
    )
}

export default Footer;