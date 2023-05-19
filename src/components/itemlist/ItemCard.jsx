import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import {Link} from "react-router-dom";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import styles from "./ItemList.module.css";

export const ItemCard = ({item}) => {
  return (
    <Card className={styles.card}>
    <CardMedia
  component="img"
  image={item.img}
  title={item.title}
  sx={{objectFit: "contain", width: "100%", height: "auto"}}
/>

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {item.description}
        </Typography>
        <Typography variant="h6" color="primary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${item.id}`} element={<ItemDetailContainer/>}>
          <Button variant="contained" size="small" color="primary">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
