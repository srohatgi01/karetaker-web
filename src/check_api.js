  import React,{useState,useEffect} from "react";
  import axios from "axios";
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";


  function Check_api(props){

    const [user, setUser] = useState(null);
  
    const userState = () => {
      const userdata = localStorage.getItem("user");
      const userObject = userdata !== null ? JSON.parse(userdata) : null;
      setUser(userObject); 
    };

    useEffect(() => {
      userState();
      return () => {
        setUser({}); // This worked for me
      };
    }, [])

    async function somefunc  (){
        await axios
        .get(`http://localhost:4000/api/v1/users/getuser/${props.email}`)
        .then( async(response) => {
          
          console.log("user found:");
            console.log(response);
            setUser(response);
            localStorage.setItem('created_user',JSON.stringify(response.data));
            window.location = "/dashboard"
            
            
        }
        )
        .catch(async () => {
            // abc=false;
          console.log("No user found in database with these credentials...");
    
          console.log("Creating new user...");
          window.location = "/new_user_post"
          
    
          }
          )

          
      }
      // console.log("at 56 : "+ abc )

      
      return(
        <>
        {somefunc()}
        </>
      )
    

  }

  export default Check_api;
  
