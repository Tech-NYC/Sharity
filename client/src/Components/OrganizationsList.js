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

    const [orgs, setOrgs] = React.useState([])
    const [thing, setThing] = React.useState(0)
    const [rows, setRows] = React.useState(orgs)
    const [searched, setSearched] = React.useState("")

    const classes = useStyles();

    //making the fetch to get the information for the org list name, des, list of items needed
    React.useEffect(() => {
        let isCurrent = true;
        fetch('http://localhost:3000/api/organizations/list').then((res) => {
            return res.json();
        }).then((data) => {
            const allOrgs = []
            const orgs = data.map((name) => {
                allOrgs.push(name)
            })
            setOrgs(allOrgs)
            setRows(allOrgs)
            return orgs
        })
        .catch ((err) => {
            console.error(err);
        })


        //need to make another fetch request to get the avatar of the org which is in users info
        return() => {
            isCurrent = false;
        }

    }, [thing]);
    
    //combine the org list, user avatar, org needs into one function like in rested insta and set the rows to be all of that in order to display
    //the correct info in the cards

    const requestSearch = (searchVal) => { 
        let search = searchVal.toLowerCase();
        const filteredSearch = orgs.filter((org) => {
            //can make it org.name || org.list of items needed
            //need to add a thing that says not found if it isnt found
            return org.name.toLowerCase().includes(search) 
            //make this the name
            //|| org.house.toLowerCase().includes(search)
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
                <Grid container  style={{paddingTop:"10px", paddingBottom:"10px"}}  alignItems="center" justify="center" wrap="nowrap" key= {row.name}>   
                                                                                      {/* make it for the organizations user id ${row.name}*/}
                    <Card className={classes.root} onClick={()=> console.log('clicked')} onClick={() => {history.push(`/${row.name}`) }}>
                        <CardContent>
                            <Grid container spacing={1} justify="center">
                                <Grid container item xs={3} direction="column" >
                                    <p> //here add the avatar</p>
                                    {/* <CardMedia className={classes.media} image={row.image} title={row.name}/>  */}
                                </Grid>
                                <Grid container item xs={2} direction="column" >
                                    <Typography variant="h5" component="h2"><br /> {row.name}</Typography>
                                    {/* <Typography variant="body2" component="p"> {row.description}</Typography>   */}
                                </Grid>
                                <Grid container item  xs={1} direction="column" >
                                    <p> //here add the list of items needed </p>
                                    {/* <Typography variant="body2" component="p"> {row.items}</Typography>   */}
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