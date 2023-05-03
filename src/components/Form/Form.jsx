import { useState } from "react";

export const Form = () => {
  const [userData, setUserData] = useState({
    nombre:"",
    apellido:"",
    telefono:"",
    mail:""
  });

  const envioDeFormulario =(evento)=>{
    evento.preventDefault()

    
  }

  const handleChange = (e) => { 
    setUserData ({...userData,[e.target.name]:e.target.value});
  }

  return (
    <div>
      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingresa tu apellido"
          nombre="apellido"
          value={userData.apellido}
          onChange={handleChange}
        />
           <input
          type="text"
          placeholder="Ingresa tu telefono"
          name="telefono"
          value={userData.telefono}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingresa tu mail"
          nombre="mail"
          value={userData.mail}
          onChange={handleChange}
        />

        <button type="submit">Enviar</button>
         <button type="button">Cancelar</button>
      </form>
    </div>
  );
};
