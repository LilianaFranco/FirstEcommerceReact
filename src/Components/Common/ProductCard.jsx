import React from "react";

export const ProductCard = () => {
  return (
    <div>
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
  );
};
