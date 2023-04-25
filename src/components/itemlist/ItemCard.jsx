
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import {Link} from "react-router-dom"
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";


export const ItemCard = ({item}) => {
  return (
    <Card sx={{ Width: 350 , height:350 }} >
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image= {item.img}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.description}
      </Typography>

      <Typography variant="body2" color="primary">
        {item.price}
      </Typography>




    </CardContent>
    <CardActions style={{height:"100px"}}> 
    <Link to="/item/${item.id}" element ={<ItemDetailContainer/>}>
      <Button variant="contained" size="small">VER DETALLE</Button>
    </Link>
    </CardActions>
  </Card>
    
    
  )
}
