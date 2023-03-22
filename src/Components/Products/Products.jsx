import axios from "axios";
import React, { useEffect, useState } from "react";

export const Products = () => {
  const [items, setItems] = useState([]);

  //Bring the items from DB only once. All querys need to go inside UseEffect
  useEffect(() => {
    const productos = axios.get("http://localhost:5000/products");
    setTimeout(() => {
      productos
        .then((res) => setItems(res.data))
        .catch((err) => console.log(err));
    }, 2000);
  }, []);

  console.log(items);

  return (
    <div>
      {items.map((elemento) => (
        <h1 key={elemento.id}>{elemento.name}</h1>
      ))}
    </div>
  );
};
