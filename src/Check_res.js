import React, { useState, useEffect } from "react";
import Login from "./Login";
import Check_api from "./check_api";

function Check_res() {

  const [user, setUser] = useState(null);
  
  const userState = () => {
    const userdata = localStorage.getItem("user");
    const userObject = userdata !== null ? JSON.parse(userdata) : null;
    setUser(userObject); 
  };

  useEffect(() => {
    userState();
  }, [])

  
 
  console.log(user);

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null)
  };
 


  return (
    <div>
      
      {console.log(" inside return : "+ user)}
      {(user == null) ?<Login signIn={(user) => setUser(user)} /> : (<Check_api email={user.email}/>)}
    </div>
  )
}

export default Check_res;
