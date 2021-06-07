import React, { useState, useEffect } from "react";
import "./Style/App.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [users, setUsers] = useState([]);
  const email = "eedsha@mail.com";
  const fetchItems = async () => {
    const data = await fetch("https://cat-fact.herokuapp.com/facts");
    await axios
      .get(`http://localhost:4000/api/v1/users/getuser/${email}`)
      .then((resposne) => {
        console.log("Welcome Back");
      })
      .catch(() => {
        console.log("thanks for registering");
      });

    const users = await data.json();
    console.log(users);
    setUsers(users);
  };

  return (
    <div>
      {users.map((user) => (
        <h1 key={user._id}>
          <Link to={`/shop/${user._id}`}>{user._id}</Link>
        </h1>
      ))}
    </div>
  );
}
export default Shop;
