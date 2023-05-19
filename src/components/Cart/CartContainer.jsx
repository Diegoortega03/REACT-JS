import React, { useContext } from 'react'
import Cart from './Cart'
import { CartContext } from '../../Context/CartContext'
import { useNavigate } from 'react-router-dom'
const CartContainer = () => {
  const {cart , clearCart,deleteProductById, getTotalPrice} = useContext(CartContext)

  let total= getTotalPrice()
  const navigate =useNavigate()
  return (

    <div>
        <Cart navigate={navigate} total={total} cart={cart} clearCart={clearCart} deleteProductById={deleteProductById}/>
    </div>
  )
}

export default CartContainer;