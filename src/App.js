import React, { useState } from "react";
import Nav from './Nav';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Shop from './Shop'
import User_details from './user_details';
import Jokes from './Jokes';
function App() {

  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component ={Home} />
      <Route path="/about" component= {About} />
      <Route path="/shop" exact component= {Shop} />
      <Route path="/shop/:_id" component= {User_details} />
      <Route path="/jokes" exact component={Jokes} />
      </Switch>
    </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
