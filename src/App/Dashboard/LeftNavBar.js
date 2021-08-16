import React from 'react';
import {BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";


function LeftNavBar() {
  let match = useRouteMatch();
    
    return (
        <div>
            <nav>
            <Router>
                <ul>
                <li>
                <Link to={match.url}>
                    Home
                </Link>
                </li>
                <li>
                <Link to={`${match.url}/blogs`}>
                    Blogs
                </Link>
                </li>
                <li>
                <Link to={`${match.url}/blogs`}>
                    BookAppointment
                </Link>
                </li>
                <li>
                <Link to={`${match.url}/blogs`}>
                    Appointments
                </Link>
                </li>
                <li>
                <Link to={`${match.url}/blogs`}>
                    Graphs
                </Link>
                </li>
                <li>
                <Link to={`${match.url}/blogs`}>
                    Reports
                </Link>
                </li>
                </ul>
            </Router>
            </nav>
        </div>
    )
}

export default LeftNavBar
