import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Check_res from "./Check_res";
import New_user_post from "./new_user_post";
import Check_api from "./check_api";
import UserData from "./userdata";

function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component ={Check_res} />
      <Route path="/dashboard" exact component={UserData} />
      <Route path="/new_user_post" exact component={New_user_post} />
      <Route path="/check_api" exact component={Check_api} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;