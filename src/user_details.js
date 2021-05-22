import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop({match}){
    useEffect(() => {
        fetchItems();
    },[]);
    const [ users, setUsers] = useState([]);
    const fetchItems = async ()=> {
        const data = await fetch(`https://cat-fact.herokuapp.com/facts/${match.params._id}`);
        const users = await data.json();
        console.log(users);
        setUsers(users);
    };

    return(
        <div>
                <h1>
                    {users.text}
                </h1>
        </div>
    );
}
export default Shop;