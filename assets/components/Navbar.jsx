import React from "react";
import ReactDom from 'react-dom';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/categories">categories</Link>
        </li>
        <li>
          <Link to="/languages">Languages</Link>
        </li>
        <li>
          <Link to="/hourly-rate">Hourly-rate</Link>
        </li>
      </ul>
    </nav>
  );
}
