import React from "react";
import { NavLink ,Link } from "react-router-dom";

let activeStyle = {
  textDecoration: "",
  backgroundColor: "#F07DEA"
};
const Header = () => {
  return (
    <div className="m-5">
      <NavLink to={"/home"}style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="btn btn-ghost normal-case text-xl no-underline mr-4 bg-green-300 p-1 rounded-md hover:bg-sky-200">Home</NavLink>
      <NavLink to={"/about"}  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="btn btn-ghost normal-case text-xl no-underline mr-4 bg-green-300 p-1 rounded-md hover:bg-sky-200">About</NavLink>
      <NavLink to={'/friends'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="btn btn-ghost normal-case text-xl no-underline mr-4 bg-green-300 p-1 rounded-md hover:bg-sky-200">Friends</NavLink>
      <NavLink to={'/posts'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="btn btn-ghost normal-case text-xl no-underline mr-4 bg-green-300 p-1 rounded-md hover:bg-sky-200">Posts</NavLink>
      
      <NavLink to={"/services"} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="btn btn-ghost normal-case text-xl no-underline mr-4 bg-green-300 p-1 rounded-md hover:bg-sky-200">Services</NavLink>
    </div>
    
  );
};

export default Header;
