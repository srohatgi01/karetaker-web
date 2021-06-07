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
import { MoreVertOutlined } from "@material-ui/icons";
import Login from "./Login";
import axios from "axios";

function Google_login() {
  const [user, setUser] = useState("");
  const classes = useStyles();
  const userState = () => {
    const userdata = localStorage.getItem("user");
    const userObject = userdata !== null ? JSON.parse(userdata) : null;
    setUser(userObject);
  };



  const [info, setInfo] = useState({
    phone_number: "",
    gender: ""
})

  
function handle(e) {
    const newinfo = {...info}
    newinfo[e.target.id]= e.target.value
    setInfo(newinfo)
    console.log(newinfo)
}
  
  const singOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  

var submit = async (e) => {
    e.preventDefault();

  if (user !== null) {
    await axios
      .get(`http://localhost:4000/api/v1/users/getuser/${user.email}`)
      .catch(async () => {
        console.log("Creating new user...");
        await axios
          .post("http://localhost:4000/api/v1/users", {
            email_address: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            uuid: user.uuid,
            phone_number: info.phone_number,
            gender: info.gender
        })
          })
          .then((res) => {
            console.log("User created");
          })
          .catch((e) => console.log("User not created"))
          .then((res) => {
            console.log(res.data);
          
          });
      }};
 

  useEffect(() => {
    userState();
  }, []);

  useEffect(() => {
    
  }, [])

  return (
    <div>
      {user !== null ? (
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Logged in with Google
              </Typography>
              <Button color="inherit" onClick={() => singOut()}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>

          <form onSubmit={(e)=> submit(e)}>
            <select id="gender" onChange={(e) => handle(e)}>
              <option value="MALE" >MALE</option>
              <option value="FEMALE" >FEMALE</option>
              <option value="OTHER" >OTHER</option>
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
                    <MoreVertOutlined />
                  </IconButton>
                }
                title={user.username}
                subheader={user.email}
              />
              <CardMedia
                className={classes.media}
                image={user.image}
                title={user.username}
              />

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user.username} {user.email}
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

export default Google_login;
