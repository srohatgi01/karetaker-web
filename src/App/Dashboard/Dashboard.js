import React, { useState, useEffect } from "react";

import "./Dashboard_css/AppBar.css";
import Check_res from "../Authentication/Check_res";
import Login from "../Authentication/Login";
import { Img } from "react-image";
import Logo from "../Logo.png";
import home from "../icons/home.png";
import blogs from "../icons/blogs.png";
import heart from "../icons/heart.png";
import checkup from "../icons/checkup.png";
import profile from "../icons/profile.png";
import down_arrow from "../icons/down_arrow.png";
import Home from "./Home/Home";
import Services from "./search appointments/Services";
import Modal from "react-modal";

import Appointments from "./search appointments/Appointments";
import ShowAppointments from "./show appointments/ShowAppointments";
import Graphs from "./graphs/Graphs";
import Blogs from "./Blogs/Blogs";
import LeftNavBar from "./LeftNavBar";
import BookAppointment from "./search appointments/BookAppointment";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";

function Dashboard(props) {
  let match = useRouteMatch();

  const signOut = () => {
    localStorage.removeItem("user");

    window.location = "/";
  };

  return (
    <>
      <header className="appBar">
        <img src={Logo} className="appLogo" />
        <h1 className="appName">Karetaker</h1>
        
        <div className="dropdown">
          <img
            src={down_arrow}
            className="downArrow"
          />
          <div className="dropdown-content">
          <button
                      className="downArrow"
                      onClick={() => {
                        signOut();
                      }}>Logout</button>
          </div>
        </div>
        <h1 className="userName">{props.firstName + " " + props.lastName}</h1>
        <img src={props.photoUrl} className="userProfilePhoto" />
      </header>

      <Router>
        <div className="sideNavBar">
          <nav className="sideNavBar">
            <ul>
              <li>
                <Link to={match.url}><img src={home} />Home</Link>
              </li>
              <li>
                <Link to={`${match.url}/blogs`}><img src={blogs} />Blogs</Link>
              </li>
              <li>
                <Link to={`${match.url}/book_appointment`}>
                <img src={heart} />BookAppointment
                </Link>
              </li>
              <li>
                <Link to={`${match.url}/appointments`}><img src={checkup} />Appointments</Link>
              </li>
              <li>
                <Link to={`${match.url}/graphs`}>Graphs</Link>
              </li>
              <li>
                <Link to={`${match.url}/blogs`}>Reports</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <div className="heartAppointment">
            <Route exact path={match.path}>
              <Home
                emailAddress={props.emailAddress}
                firstName={props.firstName}
              />
            </Route>
            <Route exact path={`${match.path}/blogs`}>
              <Blogs />
            </Route>
            <Route exact path={`${match.path}/book_appointment`}>
              <Appointments />
            </Route>
            <Route exact path={`${match.path}/appointments`}>
              <ShowAppointments emailAddress={props.emailAddress} />
            </Route>
            <Route exact path={`${match.path}/graphs`}>
              <Graphs emailAddress={props.emailAddress} />
            </Route>
            {/* <Route exact path={`${match.path}/reports`} >
            <Reports />
          </Route> */}
          </div>
        </Switch>
      </Router>
    </>
  );
  // const [toggle, setToggle] = useState(2);

  // const signOut = () => {
  //   localStorage.removeItem("user");

  //   window.location = "/";
  // };
  // const showHome = (prop) => {
  //   setToggle(prop);
  // };

  // function buttonStyle(propthree) {
  //   document.getElementById(`homeButton`).className = "inactive";
  //   document.getElementById(`blogsButton`).className = "inactive";
  //   document.getElementById(`servicesButton`).className = "inactive";
  //   document.getElementById(`appointmentsButton`).className = "inactive";
  //   document.getElementById(`graphsButton`).className = "inactive";
  //   document.getElementById(`reportsButton`).className = "inactive";
  //   document.getElementById(propthree).className = "active";
  // }
  // function toggler(proptwo) {
  //   if (proptwo === 1) {
  //     return (
  //       <div className="heartAppointment"><Home firstName={props.firstName} emailAddress={props.emailAddress} /></div>
  //     );
  //   }
  //   if (proptwo === 2) {
  //     return  <div className="heartAppointment"><Blogs emailAddress={props.emailAddress} /></div>
  //   }
  //   if (proptwo === 3) {
  //     return (
  //       <div className="heartAppointment"><Appointments /></div>
  //     );
  //   }
  //   if (proptwo === 4) {
  //     return <div className="heartAppointment"><ShowAppointments emailAddress={props.emailAddress} /></div>;
  //   }
  //   if (proptwo === 5) {
  //     return <div className="heartAppointment"><Graphs emailAddress={props.emailAddress} /></div>;
  //   }
  //   if (proptwo === 6) {
  //     return <h1>Reports</h1>;
  //   }
  // }

  // return (
  //   <>
  //     {console.log(props.photoUrl)}

  // <header className="appBar">
  //   <img src={Logo} className="appLogo" />
  //   <h1 className="appName">Karetaker</h1>
  //   <img
  //     src={down_arrow}
  //     className="downArrow"
  //     onClick={() => {
  //       signOut();
  //     }}
  //   />
  //   <h1 className="userName">{props.firstName + " " + props.lastName}</h1>
  //   <img src={props.photoUrl} className="userProfilePhoto" />
  // </header>
  //     <div className="sideNavBar">
  //       <button
  //         className="active"
  //         id="homeButton"
  //         onClick={() => {
  //           showHome(1);
  //           buttonStyle("homeButton");
  //         }}
  //       >
  //         <div>
  //           <img src={home} />
  //           <span>Home</span>
  //         </div>
  //       </button>

  //       <button
  //         id="blogsButton"
  //         onClick={() => {
  //           showHome(2);
  //           buttonStyle("blogsButton");
  //         }}
  //       >
  //         <div>
  //           <img src={blogs} />
  //           <span>Blogs</span>
  //         </div>
  //       </button>

  //       <div className="heartButton">
  //       <div className="dropdown">
  //         <button id="servicesButton" >
  //           <img src={heart} />

  //         </button>
  //           <div className="dropdown-content">
  //           <button onClick={() => {
  //           showHome(3);
  //           buttonStyle("servicesButton");
  //         }}>

  //           Appointments
  //           </button>
  //           <li>Add reports</li>
  //           <li>Add readings</li>
  //           </div>
  //       </div>
  //       </div>

  //       <button
  //         id="appointmentsButton"
  //         onClick={() => {
  //           showHome(4);
  //           buttonStyle("appointmentsButton");
  //         }}
  //       >
  //         <div>
  //           <img src={checkup} />
  //           <span>Appointments</span>
  //         </div>
  //       </button>
  //       <button
  //         id="graphsButton"
  //         onClick={() => {
  //           showHome(5);
  //           buttonStyle("graphsButton");
  //         }}
  //       >
  //         <div>
  //           <img src={profile} />
  //           <span>Graphs</span>
  //         </div>
  //       </button>
  //       <button
  //         id="reportsButton"
  //         onClick={() => {
  //           showHome(6);
  //           buttonStyle("reportsButton");
  //         }}
  //       >
  //         <div>
  //           <img src={profile} />
  //           <span>Reports</span>
  //         </div>
  //       </button>
  //     </div>
  //     <div>{toggler(toggle)}</div>

  //   </>
  // );
}

export default Dashboard;
