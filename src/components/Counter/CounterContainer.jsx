import { useEffect, useState } from "react";
import Counter from "./Counter";

export const CounterContainer = ({stock,onAdd,initial=1}) => {
  
  const [counter, setCounter] = useState(initial);



  useEffect(()=>{
    setCounter(initial)
   },[initial])

   

  const sumar = () => {
   
    counter < stock ? setCounter (counter  + 1 ): alert("stock maximo alcanzado");
 
  };

  const restar = () => {
    if(counter>1){
        setCounter(counter-1)
    }

    else{alert("Debes seleccionar al menos 1 producto")}
   
  };

  return (
    <div>
      <Counter counter={counter} sumar={sumar} restar={restar} onAdd={onAdd}  />
    </div>
  );
};
