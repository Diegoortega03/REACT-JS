import { useState } from "react";
import Counter from "./Counter";

export const CounterContainer = ({stock,onAdd}) => {
  
  const [counter, setCounter] = useState(0);

 

  const sumar = () => {
    if(counter<stock){

        setCounter(counter+1)
        }
        else{
            alert("Stock maximo alcanzado")
        }
 
  };

  const restar = () => {
    if(counter>0){
        setCounter(counter-1)
    }

    else{alert("seleccione al menos 1 producto")}
   
  };

  return (
    <div>
      <Counter counter={counter} sumar={sumar} restar={restar} onAdd={onAdd} />
    </div>
  );
};
