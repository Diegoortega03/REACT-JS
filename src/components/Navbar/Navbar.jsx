import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();


  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setSelectedCategory(""); // Restablecer la categoría seleccionada cuando se abre el menú desplegable
    setShowDropdown(!showDropdown);
  };
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };
  
  const [selectedCategory, setSelectedCategory] = useState("");


  return (
    <div>
      <div className={styles.Navbar}>
        <Link to="/">
          <img
            className={styles.Logo}
            src="https://res.cloudinary.com/dpiruiu8g/image/upload/v1680231031/300563414_492426726216373_1979476721746182268_n.jpg_fhxuld.jpg"
            alt="logo de choupo"
          />
        </Link>

        <ul>
          <Link to="/" onClick={closeDropdown}>
            INICIO
          </Link>

          <li>
            <Link to="/SHOP" onClick={toggleDropdown}>
              SHOP
            </Link>
            {showDropdown && selectedCategory === "" && (
  <div className={styles.dropdown}>
    <Link
      to="/category/roja"
      className={styles.dropdownLink}
      onClick={() => handleCategorySelect("roja")}
    >
      Cerveza Roja
    </Link>
    <Link
      to="/category/rubia"
      className={styles.dropdownLink}
      onClick={() => handleCategorySelect("rubia")}
    >
      Cerveza Rubia
    </Link>
  </div>
            )}
          </li>

          <Link to="/contact" onClick={closeDropdown}>
            CONTACTO
          </Link>
        </ul>

        <CartWidget />
      </div>

      <Outlet />
    </div>
  );
};
