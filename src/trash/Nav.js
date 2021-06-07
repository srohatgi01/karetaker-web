import React from 'react';
import './Style/App.css';
import {Link} from 'react-router-dom';

function Nav(){
    const navstyle = {
        color: 'white'
    };
    return (
        <nav>
            <ul className="nav-links">
                <Link style ={navstyle} to ="/about">
                    <li>About</li>
                </Link>
                <Link style ={navstyle} to ="/shop">
                    <li>Shop</li>
                </Link>
                <Link style ={navstyle} to ="/jokes">
                    <li>Jokes</li>
                </Link>
                <Link style ={navstyle} to ="/Postform">
                    <li>Post User</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;
