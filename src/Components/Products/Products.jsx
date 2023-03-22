import axios from "axios";
import React, { useEffect, useState } from "react";

export const Products = () => {
  const [items, setItems] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    img: "",
  });
  const [isProductCreated, setIsProductCreated] = useState(false);

  //Bring the items from DB only once. All querys need to go inside UseEffect
  useEffect(() => {
    const products = axios.get("http://localhost:5000/products");
    products.then((res) => setItems(res.data)).catch((err) => console.log(err));
  }, [isProductCreated]);

  //Send form information to API
  const handleSubmit = (e) => {
    e.preventDefault();

    //Prepare data for Database
    let data = {
      name: newProduct.name,
      price: Number(newProduct.price),
      img: newProduct.img,
    };

    //Send to API
    axios.post("http://localhost:5000/products", data);
    //create.then((res) => console.log(res)).catch((err) => console.log(err)); If I need to manage the post errors

    //Inform there is a new product to render
    setIsProductCreated(true);
    console.log(setIsProductCreated);
  };

  //Save input information in the states
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: [e.target.value] });
  };

  console.log(items);

  return (
    //Render each product
    <div>
      {items.map((element) => (
        <h1 key={element.id}>{element.name}</h1>
      ))}

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Precio del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="img"
          placeholder="url de la imagen"
          onChange={handleChange}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};