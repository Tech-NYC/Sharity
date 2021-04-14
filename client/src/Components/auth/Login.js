import React, {useState, useContext, useEffect} from 'react';
import Navigation, {NavDefault} from "../home/Navigation"
import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar, Link } from "@material-ui/core";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {makeStyles} from "@material-ui/core/styles";
import Footer from '../home/Footer';



const theme = createMuiTheme({
    typography: {
        fontFamily: [
        'Fira Sans',
        'sans-serif',
        ].join(','),
        color: "#000000"
    },
});

const useStyle = makeStyles({
    cssLabel: {
        color : '#55a0cc'
      },
    cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
        borderColor: `${theme.palette.primary.main} !important`,
    }
    },
    
    cssFocused: {},

    notchedOutline: {
    borderWidth: '1px',
    borderColor: ' #55a0cc !important'
    },
})

const btntheme = createMuiTheme({
    palette:{
        primary:{
            main:"#55a0cc"
        }
    }

})

function Login(props){
    // const authContext = useContext(AuthContext);

    // const { login, error, clearErrors, isAuthenticated } = authContext;

    // useEffect(() => {
    //     if(isAuthenticated || isAuthenticatedUser()) {
    //         props.history.push('/home');
    //     }

    //     if(error === 'User already exists') {
    //         clearErrors();
    //     }
    // }, [error, isAuthenticated, props.history]);

    const classes = useStyle()

    const [user, setUser] = useState({
            email : "",
            password : "",
        }
    );

    const { email, password } = user;

    const handleChange = e => setUser({...user, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        // login({
        // email,
        // password
        // });
    };
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
    
    return(
        <>
        <NavDefault nav = {nav}/>
        <div>
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                <Grid item>
                    <Grid container direction="column" spacing={2} className="login-form">
                            <Grid item>
                                <ThemeProvider theme = {theme}>
                                    <Typography component="h1" variant="h3">
                                        Log In
                                    </Typography> 
                                </ThemeProvider>
                            </Grid>
                            <Grid item>
                            <form onSubmit={handleSubmit}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <ThemeProvider theme={btntheme}>
                                            <TextField type="email" placeholder="Email" fullWidth name="username" variant="outlined" value={email} InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}}  onChange={handleChange} required autoFocus />
                                        </ThemeProvider>
                                    </Grid>
                                    <Grid item>
                                        <ThemeProvider theme={btntheme}>
                                        <TextField type="password" placeholder="Password" fullWidth name="password" variant="outlined" value={password} InputLabelProps={{classes: {root: classes.cssLabel,  focused: classes.cssFocused}}} onChange={handleChange} required />
                                        </ThemeProvider>
                                    </Grid>
                                    <Grid item>
                                        <ThemeProvider theme={btntheme}>
                                            <Button variant="contained" color="primary" type="submit" className="button-block" style={{color:"white"}} >
                                                LOGIN
                                            </Button>
                                        </ThemeProvider>
                                    </Grid>
                                </Grid>
                            </form>
                            </Grid>
                            <Grid item>
                                <ThemeProvider theme={theme}>
                                  <p>Don't Have An Account?</p>  
                                </ThemeProvider>
                                <Link href="signup" to="/signup"> <a style={{color:"#55a0cc"}}>Sign Up </a></Link>
                            </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
<Footer/>
        </>
    )
}

export default Login;