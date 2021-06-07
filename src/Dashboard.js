import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import "./Dashboard_css/AppBar.css";
import Check_res from "./Check_res";
import Login from "./Login";
import { Img } from "react-image";
import Logo from "./Logo.png";
import home from "./icons/home.png";
import blogs from "./icons/blogs.png";
import heart from "./icons/heart.png";
import checkup from "./icons/checkup.png";
import profile from "./icons/profile.png";
import down_arrow from "./icons/down_arrow.png";
import Home from "./Home";

function Dashboard(props) {
  // const classes = useStyles();
  // let history = useHistory();
  const [toggle, setToggle]=useState(1);

  const signOut = () => {
    localStorage.removeItem("user");

    window.location = "/";
  };
  const showHome=(prop)=>{
    setToggle(prop)
  }
  const[styler,setStyler]=useState(false);
  function showStyler(){
    setStyler(true);
  }
  function buttonStyle(propthree){
    
   document.getElementById(`homeButton`).className = "inactive";
   document.getElementById(`blogsButton`).className = "inactive";
   document.getElementById(`servicesButton`).className = "inactive";
   document.getElementById(`appointmentsButton`).className = "inactive";
   document.getElementById(`graphsButton`).className = "inactive";
   document.getElementById(`reportsButton`).className = "inactive";
   document.getElementById(propthree).className = "active";
  }
  function toggler(proptwo){
    
    if (proptwo === 1){
      return <Home firstName={props.firstName} emailAddress={props.emailAddress}/>
    }
    if (proptwo === 2){
      return <h1>Blogs</h1>
    }
    if (proptwo === 4){
      return <h1>services</h1>
    }
    if (proptwo === 5){
      return <h1>Appointments</h1>
    }
    if (proptwo === 6){
      return <h1>Graphs</h1>
    }
    if (proptwo === 3){
      return <h1>Reports</h1>
    }
 
  }
  
  return (
    <>
      {console.log(props.photoUrl)}
      <header className="appBar">
        <img src={Logo} className="appLogo" />
        <h1 className="appName">Karetaker</h1>
        <img
          src={down_arrow}
          className="downArrow"
          onClick={() => {
            signOut();
          }}
        />
        <h1 className="userName">{props.firstName + " " + props.lastName}</h1>
        <img src={props.photoUrl} className="userProfilePhoto" />
      </header>
      <div className="sideNavBar">
        <button className="active" id="homeButton" onClick={()=>{showHome(1);buttonStyle("homeButton")}}><div><img src={home} /><span>Home</span></div></button>
        <button id="blogsButton" onClick={()=>{showHome(2);buttonStyle("blogsButton")}}><div><img src={blogs} /><span>Blogs</span></div></button>
        <button id="servicesButton" onClick={()=>{showHome(3);buttonStyle("servicesButton")}}><div><img src={heart} /><span>Services</span></div></button>
        <button id="appointmentsButton" onClick={()=>{showHome(4);buttonStyle("appointmentsButton")}}><div><img src={checkup} /><span>Appointments</span></div></button>
        <button id="graphsButton" onClick={()=>{showHome(5);buttonStyle("graphsButton")}}><div><img src={profile} /><span>Graphs</span></div></button>
        <button id="reportsButton" onClick={()=>{showHome(6);buttonStyle("reportsButton")}}><div><img src={profile} /><span>Reports</span></div></button>   
      </div>
          <div>{toggler(toggle)}</div>

    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  title: {
    textDecorationColor: "black",
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
  color: {
    backgroundColor: "white",
  },
  name: {
    textDecorationColor: "black",
    marginLeft: "0px",
  },
  imageOne: {
    marginRight: "10px",
    maxWidth: "50px",
  },
  imageTwo: {
    borderRadius: "100%",
    // paddingTop: "20px",
    marginRight: "0px",
    maxWidth: "50px",
  },
  imageThree: {
    // marginLeft:"50px",
    // marginRight:"50px",
    marginBottom: "175%",
    marginTop: "175%",
    maxWidth: "32px",
  },
  appbar: {
    backgroundColor: "white",
  },
}));

export default Dashboard;

{
  /* <Drawer 
  className={style.sideDrawer}
  variant="permanent"
  anchor="left">
  <Toolbar>
  <List>
  <ListItem>
  <IconButton>
  <img src={home} className={classes.imageThree}/>
  </IconButton>
  </ListItem>
  <ListItem>
  <IconButton>
  <img src={blogs} className={classes.imageThree}/>
  </IconButton>
  </ListItem>
  <ListItem>
  <IconButton>
  <img src={heart} className={classes.imageThree}/>
  </IconButton>
  </ListItem>
  <ListItem>
  <IconButton>
  <img src={checkup} className={classes.imageThree}/>
  <br/>
  </IconButton>
  </ListItem>
  <ListItem>
  <IconButton>
  <img src={profile} className={classes.imageThree} />
  </IconButton>
  </ListItem>
  </List>
  </Toolbar>
</Drawer> */
}

{
  /* <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <img src ={Logo} className={classes.imageOne}/>
          <Typography variant="h6" className={classes.title}>
            Karetaker
          </Typography>
          <IconButton>
              <img src={props.PhotoUrl} className={classes.imageTwo}/>
          </IconButton>
          <Typography variant="h6" className={classes.name}>
          {props.FirstName } {props.LastName}
          </Typography>
        </Toolbar>
      </AppBar> */
}
