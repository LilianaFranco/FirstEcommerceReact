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

const ProductDetail = ({ product }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, p: 1, m: 3 }}>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image={product.img}
          margin="2px"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product?.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              <ProductUpdate product={product} />;
            }}
            size="small"
          >
            Actualizar
          </Button>

          <Button size="small">Eliminar</Button>
        </CardActions>
      </Card>{" "}
    </div>
  );
};

export default ProductDetail;
