import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { Password } from '@mui/icons-material';
import { CartContext } from '../../Context/CartContext';
import { db } from '../../firebaseConfig';
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import FormCheckout from './FormCheckout';

const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const total = getTotalPrice();
  const [orderId, setOrderId] = useState(null);

  const checkoutFn = async (data) => {
    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    try {
      const ordersCollection = collection(db, 'orders');
      const docRef = await addDoc(ordersCollection, dataOrder);
      setOrderId(docRef.id);

      cart.forEach((product) => {
        updateDoc(doc(db, 'products', product.id), { stock: product.stock - product.quantity });
      });

      clearCart();
      Swal.fire({
        title: 'Tu id de compra es ' + docRef.id,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
     
    } catch (error) {
      console.log('Error al realizar el checkout:', error);
    }
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: '',
      mail: '',
      telefono: null,
      password: '',
      confirmPassword: '',
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      // ...validations
    }),
    validateOnChange: false
  });

  return (
    <div>
      (
        <FormCheckout handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} values={values} />
      )
    </div>
  );
};

export default FormCheckoutContainer;
