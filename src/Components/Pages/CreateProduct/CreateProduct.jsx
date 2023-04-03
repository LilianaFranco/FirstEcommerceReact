import React from "react";

export const CreateProduct = ({ handleSubmit, handleChange }) => {
  console.log();
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="nombre del producto"
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        placeholder="precio del producto"
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
  );
};
