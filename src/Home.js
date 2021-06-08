import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Pills from "./Pills"

function Home (props){
    const [pills,setPills]=useState({});

   async function getPills (){
    await axios.get(`http://localhost:4000/api/v1/users/pills/getpills/${props.emailAddress}`)
    .then(async(response)=>{
            console.log("pills found")
            console.log(response.data);
            setPills(response);
        })
        .catch(async()=>{
            console.log("no pills found");
        })
    console.log(props.emailAddress)
    }

    
    
    return (
        <div>
            {getPills()}
            {/* <h1>{props.emailAddress}</h1>

            
          {/* <h1>Welcome {props.firstName}</h1><br />
            <h2>How are you feeling today?</h2> */}
            {/* <Pills pill={pills[0].pill_name} /> */}
            {/* {console.log(pills)} */}
        </div>
    )
}

export default Home;
