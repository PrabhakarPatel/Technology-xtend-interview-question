import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <ul className="inside__ul">
        <h1>Technology-Xtend</h1>
        <li className="nav_li" onClick={() => navigate("/")}>
          Home Page
        </li>
        <li className="nav_li" onClick={() => navigate("/form")}>
          Form Page
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
