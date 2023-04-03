import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ProductDetail = ({
  product,
  showForm,
  setShowForm,
  productSelected,
  setProductSelected,
  handleSubmit,
}) => {
  return (
    <div>
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
            <Button size="small" onClick={() => setShowForm(true)}>
              Editar
            </Button>
            <Button size="small">Eliminar</Button>
          </CardActions>
        </Card>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            defaultValue={product?.name}
            onChange={(e) =>
              setProductSelected({
                ...productSelected,
                name: e.target.value,
              })
            }
          />
          <input
            type="text"
            defaultValue={product?.price}
            onChange={(e) =>
              setProductSelected({
                ...productSelected,
                price: e.target.value,
              })
            }
          />
          <input
            type="text"
            defaultValue={product?.img}
            onChange={(e) =>
              setProductSelected({
                ...productSelected,
                img: e.target.value,
              })
            }
          />
          <button type="submit">Guardar cambios</button>
        </form>
      )}
    </div>
  );
};

export default ProductDetail;
