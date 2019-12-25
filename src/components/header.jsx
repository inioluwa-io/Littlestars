import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div id="logo">
          <Link to="/">Logo</Link>
        </div>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/connection?q=pending">Connection</Link>
          </li>
          <li>More</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
