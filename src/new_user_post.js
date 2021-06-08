import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";
// import { Dashboard, MoreVertOutlined } from "@material-ui/icons";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Check_res from "./Check_res";
import axios from "axios";

function New_user_post() {


  const classes = useStyles();

  const [user, setUser] = useState("");

  const userState = () => {
    const userdata = localStorage.getItem("user");
    const userObject = userdata !== null ? JSON.parse(userdata) : null;
    setUser(userObject);

    
  };
  useEffect(() => {
    userState();
  }, [])

  const [info, setInfo] = useState({
    phone_number: "",
    gender: ""
})
  const data ={
    first_name: user.first_name,
    last_name: user.last_name,
    email:user.email,
    image: user.photoURL,
    uuid:user.uid,
    phone_number:info.phone_number,
    gender:info.gender,
    photo_url: user.image
  }
  
function handle(e) {
    const newinfo = {...info}
    newinfo[e.target.id]= e.target.value
    setInfo(newinfo)
    console.log(newinfo)
}
  
  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null)
    window.location = "/"
  };

  
  var checker= "false";

  let history = useHistory();
            const handleRoute = () =>{ 
              history.push("/about");
            }

var submit = async (e) => {
    e.preventDefault();
   
        
        await axios
          .post("http://localhost:4000/api/v1/users", {
            email_address: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            uuid: user.uuid,
            phone_number: info.phone_number,
            gender: info.gender,
            photo_url: user.image
        })
  
          .then((res) => {
            console.log("User created");
            localStorage.setItem('created_user',JSON.stringify(data));
            window.location = "/"
          }
          )
          
          .catch((e) => console.log("User not created with excepion"+e))
          .then((res) => {
            console.log(res);
          
          });

};
 





  return (
    <div>
      {/* <h6>{user.first_name}</h6> */}
      {/* {console.log(user.email)} */}
      {user !== null ? (
        <div>
          
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Logged in with Google
              </Typography>
              <Button color="inherit" onClick={() => {signOut()}}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>

          <form onSubmit={(e)=> (submit(e))}>
            <select id="gender" onChange={(e) => handle(e)}>
              <option value="MALE" >MALE</option>
              <option value="FEMALE" selected defaultValue >FEMALE</option>
              <option value="OTHERS" >OTHERS</option>
            </select>
            <input
              onChange={(e) => handle(e)}
              id="phone_number"
              value={info.phone_number}
              placeholder="Phone Number"
              type="text"
            ></input>
            <button>submit</button>
          </form>

          <Container
            component="main"
            maxWidth="xs"
            className={classes.container}
          >
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    M
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    {/* <MoreVertOutlined /> */}
                  </IconButton>
                }
                title={user.first_name}
                subheader={user.email}
              />
              <CardMedia
                className={classes.media}
                image={user.image}
                title={user.first_name}
              />

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user.first_name} {user.email}
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </div>
      ) : (
        <Login signIn={(user) => setUser(user)} />
      )}
      
    </div>
  );

      }
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  title: {
    flexGrow: 1,
    marginRight: "78%",
  },
  button: {
    margin: theme.spacing(1),
  },
  container: {
    marginTop: "15%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    backgroundColor: "red",
  },
}));

export default New_user_post;