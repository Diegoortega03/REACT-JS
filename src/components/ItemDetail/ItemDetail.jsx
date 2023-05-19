import React from 'react';
import { Link } from 'react-router-dom';
import { CounterContainer } from '../Counter/CounterContainer';
import { Button } from '@mui/material';
import './ItemDetail.css';

const ItemDetail = ({ product, onAdd, initial,cantidadTotal }) => {
  return (
    <div className="item-detail">
      <img src={product.img} alt="" />
      <h2 className="product-title">{product.title}</h2>
      <h2 className="product-price">{product.price}</h2>

      {
        product.stock>0? <div>
          
          <CounterContainer stock={product.stock} onAdd={onAdd} initial={cantidadTotal} />
   
          
            </div>: <h2>"no hay stock" </h2> 
      }
         <Link to="/">
        <Button variant="contained" >Regresar a inicio</Button>
      </Link>
    </div>
  );
};

export default ItemDetail;
