import React from "react"
import Navigation, {NavDefault} from './home/Navigation';
import SearchBar from "material-ui-search-bar";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Paper, Grid, Typography, Button } from "@material-ui/core"
import {ThemeProvider, createMuiTheme, makeStyles} from "@material-ui/core/styles";
import {Link, useHistory} from "react-router-dom"


const useStyles = makeStyles({
    root: {
        flexGrow: .75,
        border: "2px solid",
        borderColor: "#ffffff",
        borderRadius: 16,
        transition: "0.4s",
        "&:hover": {
          borderColor: "#55a0cc"
        }

      },
    media: {
        height: 0,
        width: 0,
        padding: '25%', // 16:9,
    },

  });

  
function OrganizationsList(props){
    const nav = [
        {
            id: 1,
            link: "#mission",
            label: "Mission"
        },
        {
            id: 2,
            link: "#impact",
            label: "Impact"
        },
        {
            id: 3, 
            link: "/organizations",
            label: "Donate"
        }

    ]

    const [orgs, setOrgs] = React.useState([])
    const [thing, setThing] = React.useState(0)
    const [rows, setRows] = React.useState(orgs)
    const [searched, setSearched] = React.useState("")

    const classes = useStyles();
    React.useEffect(() => {
        let isCurrent = true;
        fetch('https://hp-api.herokuapp.com/api/characters').then((res) => {
            return res.json();
        }).then((data) => {
            const allOrgs = []
            const orgs = data.map((name) => {
                allOrgs.push(name)
            })
            setOrgs(allOrgs)
            setRows(allOrgs)
            return orgs
        }).catch ((err) => {
            console.error(err);
        })
        return() => {
            isCurrent = false;
        }
    }, [thing]);
    
    //console.log(orgs)

    const requestSearch = (searchVal) => { 
        let search = searchVal.toLowerCase();
        const filteredSearch = orgs.filter((org) => {
            //can make it org.name || org.list of items needed
            //need to add a thing that says not found if it isnt found
            return org.name.toLowerCase().includes(search) || org.house.toLowerCase().includes(search)
        })
        setRows(filteredSearch)
    }

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    }

    const history = useHistory()

    return(
        <>
        <NavDefault nav = {nav}/>
        <div className="searchbar" style={{paddingTop:"25px"}}> 
            <SearchBar placeholder= "Search for organizations, items needed" value={searched} onChange={(searchVal) => requestSearch(searchVal)} onCancelSearch={() => cancelSearch()} style={{ margin: '0 auto', maxWidth: 800 }}/>
        </div>
            {rows.map((row) => (
                <Grid container  style={{paddingTop:"10px", paddingBottom:"10px"}}  alignItems="center" justify="center" wrap="nowrap">   
                                                                                      {/* make it for the organizations user id */}
                    <Card className={classes.root} onClick={()=> console.log('clicked')} onClick={() => {history.push(`/${row.name}`) }}>
                        <CardContent>
                            <Grid container spacing={1} justify="center">
                                <Grid item xs={3} direction="column" >
                                    <CardMedia className={classes.media} image={row.image} title={row.name}/> 
                                </Grid>
                                <Grid item xs={2} direction="column" >
                                    <Typography variant="h5" component="h2"><br /> {row.name}</Typography>
                                    <Typography variant="body2" component="p"> {row.house}</Typography>  
                                </Grid>
                                <Grid item xs={1} direction="column" >
                                    <p> //here add the list of items needed </p>
                                </Grid>
                            </Grid>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small" > Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid> 
            ))}
 
        </>
    )
}

export default OrganizationsList;