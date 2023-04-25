import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {
  return (
    <div>
      <img src={product.img} alt="" />
    <h2>{product.title}</h2>
    <h2>{product.price}</h2>

    <Link to="/">volver al home </Link>

    </div>
  )
}

export default ItemDetail