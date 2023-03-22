import { width } from "@mui/system";
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
  const [isProductDeleted, setIsProductDeleted] = useState(false);
  const [isProductUpdated, setIsProductUpdated] = useState(false);

  //Bring the items from DB only once. All querys need to go inside UseEffect
  useEffect(() => {
    setIsProductCreated(false);
    setIsProductDeleted(false);
    setIsProductUpdated(false);
    const products = axios.get("http://localhost:5000/products");
    products.then((res) => setItems(res.data)).catch((err) => console.log(err));
  }, [isProductCreated, isProductDeleted, isProductUpdated]);

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

  //Delete an item from Products
  const deleteById = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`);
    setIsProductDeleted(true);
  };

  //Update an item
  const updateById = (id) => {
    axios.patch(`http://localhost:5000/products/${id}`, {
      price: 600,
      name: "zapas x",
    });
    setIsProductUpdated(true);
  };
  console.log(items);

  return (
    //Render each product
    <div>
      {items.map((element) => (
        <div key={element.id}>
          <h2>{element.name}</h2>
          <h3>{element.price}</h3>
          <img src={element.img} alt="" style={{ width: "200px" }} />
          <button
            onClick={() => {
              deleteById(element.id);
            }}
          >
            Eliminar producto
          </button>
          <button
            onClick={() => {
              updateById(element.id);
            }}
          >
            Guardar cambios
          </button>
        </div>
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
