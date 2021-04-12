import React from "react"
import {AppBar, Typography, Toolbar, Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {Link} from "react-router-dom"

import logo from "../../img/logo.png"

const useStyle = makeStyles({
    root: {
        flexGrow: 1
    },
    linkStyle: {
        color: "#424242",
        textDecoration:"none"
    },
})



function NavLink ({item}){
    const { link, label } = item;
    const classes = useStyle();
    return (
      <>
        {/* <Link className = {classes.linkStyle} style= {{ paddingRight:'10%'}} to= {link}>{label}</Link> */}
        <a href={link} style= {{ paddingRight:'10%', textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)'}}>{label}</a>
      </>
    )
}

export const NavDefault = ({nav}) => {
    const classes = useStyle();
    return(
        <>
        <AppBar position="sticky" color='default'>
            <Toolbar>
                <Typography variant="h6" className= {classes.root} >
                    <Link to="/"><img src={logo} style={{width:"15%", height:"5%"}} alt="logo"/></Link>
                </Typography>   
                <Typography variant="h6" className= {classes.root} style={{marginLeft:"4%"}}>
                    {nav.map(item => <NavLink key={item.id} item={item} />)}
                </Typography>   
                <Link className= {classes.linkStyle} to="/login"> 
                    <Button size ="small" variant = "outlined" >
                        Log In
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
        </>
    )
}