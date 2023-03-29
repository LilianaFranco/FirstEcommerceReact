import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../services/productService";
import { CreateProduct } from "./CreateProduct";

export const CreateProductContainer = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    img: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: newProduct.name,
      price: Number(newProduct.price),
      img: newProduct.img,
    };
    console.log(data);

    const create = createProduct(data);
    create.then((res) => console.log(res)).catch((err) => console.log(err));
    navigate("/products");
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <CreateProduct handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
};
