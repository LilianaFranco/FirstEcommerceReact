import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../../Common/ProductCard";

export const Products = ({ items }) => {
  console.log(items);
  return (
    //Render each product
    <div>
      <Link to="/create">
        <button>Agregar producto</button>
      </Link>
      {items.map((element) => (
        <ProductCard key={element.id} element={element} />
      ))}
    </div>
  );
};
