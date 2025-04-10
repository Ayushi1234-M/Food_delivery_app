import { useState } from "react";
import logo from "../assets/food_delivery_logo.svg";
import { Link } from "react-router";

export default function Header() {

    const[login, setLogin]=useState('Login');

    function handleLoginName()
    {
        if(login === 'Login')
        {
            setLogin('Logout');
            console.log(login);
        }
        else
        {
            setLogin('Login');
        }
    }
  return (
    // <div>
      <div className="header_component">
        <div className="logo">
          <img className="brand_logo" src={logo} alt="logo"></img>
        </div>

        <span className="brand_name">
          BreakBites
        </span>

        <div className="nav_items">
          <ul className="nav_links">
            <li>Home</li>
            <li><Link to={"/about"}>About us</Link></li>
            <li><Link to={"/contact"}>Contact us</Link></li>
            <li>🛒</li>
            <li><button className="login-btn" onClick={handleLoginName}>{login}</button></li>
          </ul>
        </div>
      </div>
    // </div>
  );
}
