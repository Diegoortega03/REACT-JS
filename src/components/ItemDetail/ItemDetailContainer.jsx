import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {products} from "../../productsMock"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {


  

   const [product, setProduct ] = useState ({})


  const {id}=useParams()
    

   useEffect(()=>{

  let encontrado= products.find((prod)=> prod.id=== Number(id))

  setProduct(encontrado);

   } ,[id])


   const onAdd=(cantidad)=>{

    let data={
      ...product,
      quantity:cantidad
    }
    console.log(data)
  }



  return (
    <div>
        <ItemDetail product={product} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetailContainer