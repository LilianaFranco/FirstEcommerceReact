import React, { useState } from "react";

const ProductDetail = ({ updateProductById, product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <h3>{product.price}</h3>
      <img source></img>
      <button onClick={updateProductById}>Editar</button>
    </div>
  );
};

export default ProductDetail;
