import React,{useState,useEffect} from "react";
import Dashboard from "./Dashboard";

function UserData () {
    const [user, setUser] = useState("");

    const userState = () => {
      const userdata = localStorage.getItem("created_user");
      const userObject = userdata !== null ? JSON.parse(userdata) : null;
      setUser(userObject);
  
      
    };
    useEffect(() => {
      userState();
    }, [])


    return(
    <>
        {console.log(user.first_name)}
        <Dashboard firstName={user.first_name} lastName={user.last_name} photoUrl={user.photo_url} emailAddress={user.email_address}/>
        </>
    )
}
export default UserData;