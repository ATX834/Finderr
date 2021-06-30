import React from "react";
import { Link } from "react-router-dom";
import Users from "./Users";

export default function Navbar() {
  return (
    <nav>
      <div>
        <ul className="nav-container">
         
          <li>
           Select your criterias:
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/languages">Languages</Link>
          </li>
          <li>
            <Link to="/hourly-rate">Hourly-rate</Link>
          </li>
        </ul>
      </div>
      <div>
        <Users/>
      </div>
    </nav>
  );
}
