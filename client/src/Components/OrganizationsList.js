import React from "react";
import Footer from "./home/Footer";
import SearchBar from "material-ui-search-bar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Grid, Typography, Box, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Fira Sans", "sans-serif"].join(","),
  },
});

const useStyles = makeStyles({
  root: {
    flexGrow: 0.75,
    border: "2px solid",
    borderColor: "#ffffff",
    borderRadius: 16,
    transition: "0.4s",
    "&:hover": {
      borderColor: "#55a0cc",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  },
  media: {
    height: 0,
    width: 0,
    padding: "5%", // 16:9,
  },
});

function OrganizationsList(props) {
  const PROD = true;

  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://127.0.0.1:3000";

  const [orgs, setOrgs] = React.useState([]);
  const [thing, setThing] = React.useState(0);
  const [rows, setRows] = React.useState(orgs);
  const [searched, setSearched] = React.useState("");
  const [user, setUser] = React.useState([]);
  // const [userId, setUserId] = React.useState("")
//   const [orgId, setOrgId] = React.useState("")
  const [orgNeeds, setOrgNeeds] = React.useState([]);
  const classes = useStyles();

  //making the fetch to get the information for the org list name, des, list of items needed
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
              //   console.log(name)
              // setUserId(name.user_id)
              // setOrgId(name.id)
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

    //need to make another fetch request to get the avatar of the org which is in users info
    async function gettingUsers() {
      await fetch(`${URL}/api/user/getAll`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let userInfo = [];
          // console.log(data)
          data.map((info) => {
            //   console.log(info)
            userInfo.push(info);
          });
          setUser(userInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    gettingUsers();

    //need to fetch from organizations list in order to get the information for the needs
    async function gettingNeeds() {
      await fetch(`${URL}/api/organization/getAll`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let orgNeeds = [];
          // console.log(data)
          data.map((info) => {
            //   console.log(info)
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

  let mergedArray = []
  // merges the orgneeds, user and org arrays of objects to create a new array of object
  const mergeArrays = () => {
    orgs.forEach((orgInfo) => {
      if(orgNeeds.length !== 0){
          orgNeeds.forEach((needs)=> {
              if(needs.organization_id === orgInfo.id){
                mergedArray.push({
                  id: orgInfo.id,
                  user: orgInfo.user_id,
                  name: orgInfo.name,
                  address: orgInfo.address,
                  description: orgInfo.description,
                  pickup: orgInfo.pickup_times,
                  needed: needs.items_needed
                })     
              }
          })
      }
      if(orgNeeds.length === 0){
        orgs.forEach((orgInfo) => {
          mergedArray.push({
            id: orgInfo.id,
            user: orgInfo.user_id,
            name: orgInfo.name,
            address: orgInfo.address,
            description: orgInfo.description,
            pickup: orgInfo.pickup_times,
          })     
        })
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
  const style = {
    searchbar: {
      paddingTop: "100px"
    }
  }
  return (
    <>
      <Box bgcolor="#dbe3f0" height="525vh" display="flex" flexDirection="column">        
      <div className="searchbar" style={{paddingTop:"50px"}}>
          <SearchBar
            placeholder="Search for organizations, items needed"
            value={searched}
            onClick={(style)}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
            style={{ margin: "auto", maxWidth: 800 }}
          />
        </div>

      {mergeArrays() &&
        rows &&
        rows.map((row, i) => (
          <Box style={{ padding:"30px"}} alignItems="center" justify="center" wrap="nowrap" key={i}>
            
            <Card
              className={classes.root}
              onClick={() => {   
                history.push(`/${row.name.split(" ").join("")}`);
              }}
            >
              <CardContent>
                <Box container spacing={1} justify="center">
                  <Box item xs={1} direction="column">
                    <CardMedia className={classes.media} image={row.logo} title={row.name} />
                  </Box>
                  <Box container item xs={1} direction="column">
                    <Typography variant="h5" component="h2">
                      <br /> {row.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {" "}
                      {row.description}
                    </Typography>
                  </Box>
                  <Box container item xs={1} direction="column">
                    <Typography variant="body2" component="p">
                      Items Needed: {row.needed}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}

      </Box>
   
      <Footer zIndex = "5"/>
    
    </>
  );
}

export default OrganizationsList;
