import React from 'react'
import { Link, } from 'react-router-dom'
import {CounterContainer} from '../Counter/CounterContainer'
import { Button } from '@mui/material'


const ItemDetail = ({product, onAdd}) => {
  return (
    <div>
    <img src={product.img} alt="" />
    <h2>{product.title}</h2>
    <h2>{product.price}</h2>
    <CounterContainer stock={product.stock} onAdd={onAdd}/>
    <Link to="/"><Button variant="contained">Regresar a inicio</Button></Link>

    </div>
  )
}

export default ItemDetail