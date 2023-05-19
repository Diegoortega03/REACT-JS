import { Grid, TextField,Button } from '@mui/material'

const FormCheckout= ({handleSubmit, handleChange,errors, values}) => {

   
  return (

    <div> 
    <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} m={2} flex justifyContent={"center"}>   
       <Grid item xs={11} sm={7} >
      
      <TextField id="outlined-basic" label="Nombre y Apellido" variant="outlined" fullWidth onChange={handleChange} 
      name="nombre"  error={errors.nombre? true: false} helperText={errors.nombre}/>
      
    </Grid>

    <Grid item xs={11} sm={7} >
<TextField id="outlined-basic" label="Email" variant="outlined" fullWidth  onChange={handleChange} name="mail" error={errors.mail? true : false} helperText={errors.mail}/>

    </Grid>
    
    <Grid item xs={11} sm={7} >
    <TextField id="outlined-basic" label="Telefono" variant="outlined" fullWidth onChange={handleChange} 
      name="telefono"  error={errors.telefono? true: false} helperText={errors.telefono}/>
    </Grid>

    <Grid item xs={11} sm={7}>
        <TextField id="outlined-basic" label="Contraseña" variant="outlined" fullWidth onChange={handleChange} name="password" error={errors.password? true: false} helperText={errors.password} TextField/>

    </Grid>

      {
      values.password.length > 0 && (
         <Grid item xs={11} sm={7}>
         <TextField id="outlined-basic" label="Confirmar Contraseña" variant="outlined" fullWidth onChange={handleChange} name="confirmPassword" error={errors.confirmpassword? true: false} helperText={errors.confirmPassword} TextField/>
 
     </Grid>
      )}
   
    <Grid xs={6}>
        <Button variant='contained' type='submit' sx={{marginTop:2}}>
        COMPRAR
        </Button>
    </Grid>
    </Grid>  

    </form>
      </div> 
  )
}

export default FormCheckout;

