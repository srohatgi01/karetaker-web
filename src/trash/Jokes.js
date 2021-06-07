
import React,{useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Style/App.css';
import {Link} from 'react-router-dom';
import Button from './button'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from 'axios';

function Jokes({value}){
    useEffect(() => {
        fetchItems();
        // console.log(match);
    },[]);
    let [ test, setUsers] = useState([]);
    const fetchItems = async ()=> {
        // const data = await fetch(`http://api.icndb.com/jokes/random`);
        await axios.get('http://api.icndb.com/jokes/random').then((response) => {test = response.data.value.joke})
        // const user = await data.json();
        // var test = "Cant load!";
        // console.log("------------------");   
        // if (user.type === "success"){
        //     test = user.value.joke;
        // }else{
        //     console.log("bekaaaarrrr");
        // } 
        // console.log("Result"+test);
        setUsers(test);

    };
    function refreshPage() {
        window.location.reload(false);
      };

    return(
        <div>
                <h1>
                   "Testing"
                </h1>
                <h2>{test}</h2>
                <button onClick={refreshPage}>Click to reload!</button>
                <button onClick={Jokes}>Next</button>
        </div>
    );
}
export default Jokes;