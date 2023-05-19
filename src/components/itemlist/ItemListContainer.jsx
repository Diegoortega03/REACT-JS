import { ItemList } from "./ItemList";

import{ useState, useEffect} from "react";
import { useCounter } from "../../utils/hooks/useCounter";
import { useParams , useNavigate} from "react-router-dom";
import './ItemList.module.css';
import { ClipLoader } from "react-spinners";
import {db} from "../../firebaseConfig"
import {getDocs, collection, getDoc, query, where} from "firebase/firestore"


export const ItemListContainer = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate()

    const {counter,increment,decrement,reset} = useCounter()

    const [items, setItems] = useState([]);

    useEffect(() => {
     /*    const itemsCollection = collection(db,"products") */

     let consulta 
     const itemsCollection=collection(db, "products")
     
     if (categoryName){
        
         const itemsCollectionfiltered=query(itemsCollection, where("category", "==", categoryName))
         consulta = itemsCollectionfiltered
        }
         else{
             consulta=itemsCollection

         }
    

         
        getDocs (consulta) 
       

        .then ((res)=>{
           
        const products= res.docs.map (product=>{
            return{    ...product.data(),
            id:product.id
             }
    } )
    setItems (products)
 })

         .catch ((err)=> console.log(err))
    }, [categoryName]);

    if(
        items.length===0
    ){
     return <ClipLoader color="hsla(0, 0%, 0%, 1)"  />
    }


    


    return (
        <div className="item-list-container">
            <ItemList items={items} />
        </div>
    );
};



