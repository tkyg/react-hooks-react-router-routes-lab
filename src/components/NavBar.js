import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "list-item",
  color: "blue",
}

function NavBar() {
  return (
  <div>
    <NavLink
      to="/"
      exact style={linkStyles}
      activeStyle={{
        color: "purple"
      }}
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      exact style={linkStyles}
      activeStyle={{
        color: "purple"
      }}
    >
      Movies
    </NavLink>
    <NavLink
      to="/directors"
      exact style={linkStyles}
      activeStyle={{
        color: "purple"
      }}
    >
      Directors
    </NavLink>
    <NavLink
      to="/actors"
      exact style={linkStyles}
      activeStyle={{
        color: "purple"
      }}
    >
      Actors
    </NavLink>
    
  </div>
  )
}

export default NavBar;
