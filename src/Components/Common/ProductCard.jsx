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
import ProductDetail from "../Pages/ProductDetail/ProductDetail";

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
          <Link to={`/productDetail/${element.id}`}>
            <Button
              onClick={() => {
                <ProductDetail element={element} />;
              }}
              size="small"
            >
              Ver detalle
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
