import { Button } from '@mui/material';
import React from 'react';



const Counter = ({sumar,restar,counter, onAdd}) => {
  return (
    <div style={{marginBottom:"15px", display:"flex", gap:"30px"}}>
        <Button variant="contained" onClick={restar}>Restar</Button>
        <h3>{counter}</h3>
        <Button  variant="contained" onClick={sumar}>Sumar</Button>
        <Button onClick={()=>onAdd(counter)}>Agregar al carrito</Button>
    </div>
  )
}

export default Counter;