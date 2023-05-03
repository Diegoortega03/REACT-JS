import { Link, Outlet } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div>
      <div >
      
       <Navbar className={styles.Navbar}>
        
        <Link to="/">
        <img
          className={styles.Logo}
          src="https://res.cloudinary.com/dpiruiu8g/image/upload/v1680231031/300563414_492426726216373_1979476721746182268_n.jpg_fhxuld.jpg"
          alt="logo de choupo"
        />
        </Link>

        <ul>
         <Link to="/">productos</Link>
         <Link to="/category/roja">roja</Link>
         <Link to="/category/rubia">rubia</Link>
        </ul>
       
        <CartWidget />
      
      </Navbar> 
      <Outlet />
        
       
      </div>

     
    </div>
  );
};
