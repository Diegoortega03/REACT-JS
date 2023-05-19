import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Styles  from "../Navbar/Navbar.module.css";

const Footer = () => {
  return (
    <div>
           <Outlet />
       <footer className="footer">
      <div className="footer-left">
        <ul>
          <Link to="/SHOP">Productos</Link>
          <Link to="/Rubias">Rubias</Link>
          <Link to="/Rojas">Rojas</Link>
        </ul>
      </div>
      <div className="footer-center">
        <a href="https://www.instagram.com">Instagram</a>
        <a href="https://www.facebook.com">Facebook</a>
      </div>
      <div className="footer-right">
      <img
            className={Styles.Logo}
            src="https://res.cloudinary.com/dpiruiu8g/image/upload/v1680231031/300563414_492426726216373_1979476721746182268_n.jpg_fhxuld.jpg"
            alt="logo de choupo"
          />
      </div>
    </footer>



    
    </div>
    
  );
};

export default Footer;
