import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./CartWidget.module.css";

export const CartWidget = () => {
  return (
    <div className={styles.Carrito}>
      <BsFillCartCheckFill size={30} />
      <span>0</span>
    </div>
  );
};
