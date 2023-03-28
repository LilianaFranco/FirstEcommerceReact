import React, { useEffect, useState } from "react";
import { getProducts } from "../../../services/productService";
import { Products } from "./Products";

export const ProductContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const Products = getProducts();
    Products.then((res) => setItems(res.data)).catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Products items={items} />
    </div>
  );
};
