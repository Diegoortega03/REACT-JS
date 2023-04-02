import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    
    <div className={styles.ContainerNavbar}>
      <nav className={styles.Navbar}>
        <img
          className={styles.Logo}
          src="https://res.cloudinary.com/dpiruiu8g/image/upload/v1680231031/300563414_492426726216373_1979476721746182268_n.jpg_fhxuld.jpg"
          alt="logo de choupo"
        />

        <ul>
          <a href="">Productos</a>
          <a href="">Sobre Nostros</a>
          <a href="">Contacto</a>
        </ul>

        <CartWidget />
      </nav>
    </div>
  );
};
