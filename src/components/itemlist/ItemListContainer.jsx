import { ItemList } from "./ItemList";
import { products } from "../../productsMock";
import{ useState, useEffect} from "react";
import { useCounter } from "../../utils/hooks/useCounter";
import { useParams , useNavigate} from "react-router-dom";






export const ItemListContainer = () => {



 
    const { categoryName } = useParams();
    const navigate = useNavigate ()


  const {counter,increment,decrement,reset} = useCounter ()

  const [items, setItems] = useState([]);



  
 useEffect(()=>{

  const productsFiltered = products.filter(prod => prod.category === categoryName)
  const tarea = new Promise((resolve, reject) => {
    resolve(categoryName ? productsFiltered : products); 
  });

  tarea
  .then((res) => setItems(res))
  .catch((error) => console.log(error));

  
 },[categoryName])



  return (
    <div>
      <ItemList items={items}/>
     
    </div>
  );
};


//counter

{/* <h1>{counter}</h1>
<button onClick={increment}>sumar</button>
<button onClick={decrement}>restar</button>
<button onClick={reset}>resetear</button> */}