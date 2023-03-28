import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        activeStyle={{color:"pink"}}
        padding="12px"
      > HOME </NavLink>
      <NavLink 
        to="/directors"
        exact
        activeStyle={{color:"pink"}}
        padding="12px"
      > DIRECTORS </NavLink>
      <NavLink
        to="/actors"
        exact
        activeStyle={{color:"pink"}}
        padding="12px"
      > ACTORS </NavLink>
      <NavLink
        to="/movies"
        exact
        activeStyle={{color:"pink"}}
        padding="12px"
      > MOVIES </NavLink>
    </div>
  )
}

export default NavBar;
