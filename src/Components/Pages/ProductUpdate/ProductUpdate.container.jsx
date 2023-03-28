import React, { useState } from "react";
import { ProductUpdate } from "./ProductUpdate";

export const ProductUpdateContainer = ({ product }) => {
  console.log(product);
  const [productSelected, setProductSelected] = useState({
    name: product?.name,
    price: product?.price,
    img: product?.img,
  });
  console.log(productSelected);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, productSelected);
    setIsUpdated(true);
  };

  return (
    <div>
      <ProductUpdate
        product={product}
        handleSubmit={handleSubmit}
        productSelected={productSelected}
        setProductSelected={setProductSelected}
      />
    </div>
  );
};
