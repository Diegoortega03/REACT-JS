import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./CartWidget.module.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


export const CartWidget = () => {
  
  const { cart}= useContext(CartContext)
  
  return (
    <div className={styles.Carrito}>
      <BsFillCartCheckFill size={30} />
      <span>{}</span>
    </div>
  );
  };
  
  