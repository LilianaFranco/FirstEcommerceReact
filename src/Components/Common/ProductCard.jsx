import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ element }) => {
  console.log(element);
  return (
    <div style={{ border: "2px solid black" }}>
      <h2>{element.name}</h2>
      <h3>{element.price}</h3>
      <img src={element.img} alt="" style={{ width: "200px" }} />
      <Link to={`productDetail/${element.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};
