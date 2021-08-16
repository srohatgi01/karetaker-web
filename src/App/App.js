import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Check_res from "./Authentication/Check_res.js";
import New_user_post from "./Authentication/new_user_post.js";
import Check_api from "./Authentication/check_api.js";
import UserData from "./Dashboard/userdata";
import Home from "./Dashboard/Home/Home.js";
import Modal from 'react-modal';
import Appointments from "./Dashboard/search appointments/Appointments"
import BookAppointment from "./Dashboard/search appointments/BookAppointment"
import Blogs from "./Dashboard/Blogs/Blogs.js"
import LeftNavBar from "./Dashboard/LeftNavBar"

Modal.setAppElement('#root')

function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component ={Check_res} />
      <Route path="/new_user_post" exact component={New_user_post} />
      <Route path="/check_api" exact component={Check_api} />
      <Route path="/dashboard" exact component={UserData} />
      {/* <Route exact path="/dashboard/blogs" component={Blogs} /> */}

      {/* <Route path="/dashboard/home" exact component={Home} /> */}
      {/* <Route path="/dashboard/book_appointment/:id" exact component={BookAppointment} />
      <Route path="/dashboard/blogs" exact component={Blogs} /> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;