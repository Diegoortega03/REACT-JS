import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const  [ data, setData] = useState([]);
  const [ dataById, setDataById] = useState({});


  useEffect(() => {
    const obetenerPost = fetch("https://jsonplaceholder.typicode.com/users");
    obetenerPost.then((res) => res.json()).then((res) =>setData(res));

    const obtenerPorId= fetch ("https://jsonplaceholder.typicode.com/users/2")

    obtenerPorId.then ((res)=> res.json()) .then((res)=>setDataById(res))
  }, []);
 


const crearNuevopost = ()=>{

const crearPost= fetch ("https://jsonplaceholder.typicode.com/posts" ,
{
method: "POST",
body: JSON.stringify({
    userId:7 , 
    name: "Diego",
    edad: 12,

})
}) 

crearPost.then(res=> res.json()).then (res=> console.log(res))  };
  console.log(data);
  console.log(dataById);

  return (
    <div>
      <h1>Peticiones</h1>
      <button onClick={crearNuevopost}>Crear productos</button>
    </div>
  );
};

export default FetchingData;
