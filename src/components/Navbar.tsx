import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper purple darken-4 px-1">
      <a href="/" className="brand-logo">
        Logo
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Todos</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
