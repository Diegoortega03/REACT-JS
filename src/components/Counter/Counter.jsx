import { Button } from '@mui/material';
import React from 'react';
import Swal from 'sweetalert2';

const Counter = ({ sumar, restar, counter, onAdd }) => {
  const handleAddToCart = () => {
    onAdd(counter);
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div style={{ marginBottom: '15px', display: 'flex', gap: '30px' }}>
      <Button variant="contained" onClick={restar}>
        -
      </Button>
      <h3>{counter}</h3>
      <Button variant="contained" onClick={sumar}>
        +
      </Button>
      <Button variant="contained" onClick={handleAddToCart}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
