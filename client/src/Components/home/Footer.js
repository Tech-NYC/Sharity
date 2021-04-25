import React from "react"
import {AppBar, Typography, Toolbar, Container} from "@material-ui/core"

  
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