import React from "react";
import SearchBar from "material-ui-search-bar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Box, CardMedia } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import "../search/style/Search.css"
import Chip from '@material-ui/core/Chip'

const theme = createMuiTheme({
  overrides: {
    MuiChip: {
      colorPrimary: "green"
    }
  }
})
const useStyles = makeStyles({
  root: {
    flexGrow: 0.75,
    border: "2px solid",
    borderColor: "#ffffff",
    borderRadius: 16,
    transition: "0.4s",
    "&:hover": {
      borderColor: "#55a0cc",
    }
  },
  media: {
    height: 100,
    width: 100, 
  },
  chip: {
    marginLeft: "1rem",
    marginRight: "1rem",
    borderRadius: "4px"
  }
});


function OrganizationsList() {
  const PROD = true;

  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://127.0.0.1:3000";

  const [orgs, setOrgs] = React.useState([]);
  const [thing, setThing] = React.useState(0);
  const [rows, setRows] = React.useState(orgs);
  const [searched, setSearched] = React.useState("");
  const [user, setUser] = React.useState([]);
  const [orgNeeds, setOrgNeeds] = React.useState([]);
  
  const classes = useStyles();

  React.useEffect(() => {
    let isCurrent = true;
    async function gettingOrgs() {
      await fetch(`${URL}/api/organizations/list`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (isCurrent) {
            let allOrgs = [];
            data.map((name) => {
              allOrgs.push(name);
            });
            setOrgs(allOrgs);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }

    gettingOrgs();

    async function gettingUsers() {
      await fetch(`${URL}/api/user/getAll`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let userInfo = [];
          data.map((info) => {
            userInfo.push(info);
          });
          setUser(userInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    gettingUsers();

    async function gettingNeeds() {
      await fetch(`${URL}/api/organization/getAll`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let orgNeeds = [];
          data.map((info) => {
            orgNeeds.push(info);
          });
          setOrgNeeds(orgNeeds);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    gettingNeeds();

    return () => {
      isCurrent = false;
    };
  }, [thing]);

  function createChipsFromList(list) {
  let arr = list.split(',')
  return (
    <>
    {arr.map(item => {
      return (
        <Chip label={item}
        color="primary"
        style={{ marginLeft: "2px", backgroundColor:"#5AA4CE", borderRadius: "5px"}}
        size="small"
      />
      )
    })}
    </>
  )
  }

  let mergedArray = []

  const mergeArrays = () => {
    orgs.forEach((orgInfo) => {
      if (orgNeeds.length !== 0) {
        orgNeeds.forEach((needs) => {
          if (needs.organization_id === orgInfo.id) {
            mergedArray.push({
              id: orgInfo.id,
              user: orgInfo.user_id,
              name: orgInfo.name,
              address: orgInfo.address,
              description: orgInfo.description,
              pickup: orgInfo.pickup_times,
              needed: needs.items_needed,
            });
          }
        });
      }
      if (orgNeeds.length === 0) {
        orgs.forEach((orgInfo) => {
          mergedArray.push({
            id: orgInfo.id,
            user: orgInfo.user_id,
            name: orgInfo.name,
            address: orgInfo.address,
            description: orgInfo.description,
            pickup: orgInfo.pickup_times,
          });
        });
      }
    })
        
    user.forEach((info)=>{
      mergedArray.forEach((data)=>{
        if(info.id === data.user){
          data.logo = info.avatar
        }
      })
        
    })
    return mergedArray
  }
    
  const requestSearch = (searchVal = "") => {
    let search = searchVal.toLowerCase();

    const filteredSearch = mergedArray.filter((org) => {
      return org.name.toLowerCase().includes(search) || org.needed.toLowerCase().includes(search);
    });

    setRows(filteredSearch);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const history = useHistory();

  return (
    <>
      <Box className= "searchpage"  height= "85vh" > 
      <div className="searchbar" >
          <SearchBar
            placeholder="Search for organizations, items needed"
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
            style={{ margin: "auto", maxWidth: 800 }}
          />
      </div>

      {mergeArrays() &&
        rows &&
        rows.map((row, i) => (
          // <Box className="cardbox" style={{ padding:"15px", }} alignItems="center" justify="center" wrap="nowrap" key={i}>
            <Card
              className={classes.root}
              onClick={() => {   
                history.push(`/${row.name.split(" ").join("")}`);
              }}
            >
              <CardContent>
                <Box display="flex"  >
                  <Box flexDirection="column" xs={2}>
                    <CardMedia className={classes.media} image={row.logo}  title={row.name} />
                  </Box>
                  <Box flexDirection="column"  xs={4} style={{paddingLeft:"1%"}} direction="column" flexWrap="nowrap" > 
                    <Typography variant="h4" component="h2">{row.name}</Typography>
                    <Typography variant="body2" component="p">{row.description}</Typography>
                  <Typography variant="body2" component="p">Items Needed: {createChipsFromList(row.needed)}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          // </Box>
        ))}
      </Box>
      <div className="footer" >
        <Typography variant="body1" color="inherit" align="center">
          <a href="/contact" style={{textDecoration:"none", color:"#fff"}}> Contact </a> | <a href="/terms" style={{textDecoration:"none", color:"#fff"}}> Terms Of Service </a> | <a href="/privacy" style={{textDecoration:"none", color:"#fff"}}>Privacy Policy </a> | © Sharity, 2021
        </Typography>
      </div>
    </>
  );
}

export default OrganizationsList;