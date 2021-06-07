import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

function Return_checker(props){
    const comparer = props.checker;
    
    
    return(
        <>
        {}
        {console.log("in return comparer is: "+ comparer)}
        (comparer==true)?<Redirect to="/dashboard"/>:<Redirect to="/new_user_post"/>
        </>
    )
}
export default Return_checker;