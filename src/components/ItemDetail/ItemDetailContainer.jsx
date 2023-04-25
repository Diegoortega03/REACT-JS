import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {products} from "../../productsMock"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {


  

   const [product, setProduct ] = useState ({})


   let id=2;


     /* const (x)=useParams()
    console.log(x) */

   useEffect(()=>{

let encontrado= products.find(prod => prod.id===id)

  setProduct(encontrado);

   } ,[id])



  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer