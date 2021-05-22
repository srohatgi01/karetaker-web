import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop(){
    useEffect(() => {
        fetchItems();
    },[]);
    const [ users, setUsers] = useState([]);
    const fetchItems = async ()=> {
        const data = await fetch('https://cat-fact.herokuapp.com/facts');
        const users = await data.json();
        console.log(users);
        setUsers(users);
    };

    return(
        <div>
            {users.map(user =>(
                <h1 key={user._id}>
                    <Link to={`/shop/${user._id}`}>{user._id}</Link>
                </h1>
            ))}
        </div>
    );
}
export default Shop;


