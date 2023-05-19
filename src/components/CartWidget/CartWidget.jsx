import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./CartWidget.module.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";


export const CartWidget = () => {
  
  const {getTotalQuantity}= useContext(CartContext)
  let total= getTotalQuantity()
  return (
   <Link to="/cart"> <div className={styles.Carrito}>
      <BsFillCartCheckFill size={30} />
      <span>{total}</span>
    </div>
    </Link>
  );
  };
  
  