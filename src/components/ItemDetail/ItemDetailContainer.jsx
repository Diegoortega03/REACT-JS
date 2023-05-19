import React, { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import {db} from "../../firebaseConfig"
import {getDoc, collection,doc} from "firebase/firestore"
const ItemDetailContainer = () => {


  

   const [product, setProduct ] = useState ({})


   const {agregarAlCarrito ,getQuantityById} =useContext(CartContext) 

  const {id}=useParams()
    

   useEffect(()=>{

    const itemsCollection= collection(db, "products")
    const refDoc=doc (itemsCollection, id)
    getDoc(refDoc)
    .then((res) => setProduct({
      ...res.data(),
      id:res.id
    })
    )
    .catch((err)=> console.log (err))
   } ,[id])


   const onAdd=(cantidad)=>{

    let data={
      ...product,
      quantity:cantidad
    }

    agregarAlCarrito (data)
  }

  let cantidadTotal = getQuantityById (product.id)
console.log (cantidadTotal)


  return (
    <div>
        <ItemDetail product={product} onAdd={onAdd} cantidadTotal={cantidadTotal}/>
    </div>
  )
}

export default ItemDetailContainer;