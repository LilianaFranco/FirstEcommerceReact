import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ element }) => {
  console.log(element);
  return (
    <div>
      <Card sx={{ maxWidth: 345, p: 1, m: 3 }}>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image={element.img}
          margin="2px"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {element.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver detalle</Button>
          <Button size="small">Eliminar</Button>
        </CardActions>
      </Card>
    </div>
  );
};
