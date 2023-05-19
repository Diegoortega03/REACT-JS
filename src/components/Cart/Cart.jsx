import { Button } from "@mui/material";
import React from "react";
import "./Cart.modules.css";
import { Navigate } from "react-router-dom";

const Cart = ({ cart, clearCart, deleteProductById, total, navigate}) => {
  return (
    <div>
      <h1>Aca el carrito</h1>
      <div className="cart-container">
        {cart.map((product) => {
          return (
            <div key={product.id} className="cart-item">
              <img src={product.img} alt="Cerveza" />
              <div>
                <h3>{product.title}</h3>
                <h4>{product.price}</h4>
                <h4>{product.quantity}</h4>
                <Button
                  variant="contained"
                  onClick={() => deleteProductById(product.id)}
                >
                  eliminar
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <Button variant="contained" onClick={clearCart}>
        Limpiar carrito
      </Button>

      <Button variant="contained"  onClick={()=>navigate("/checkout")} >
        terminar compra
      </Button>

      <h1 className="cart-total">Total a pagar es {total}</h1>
    </div>
  );
};

export default Cart;

