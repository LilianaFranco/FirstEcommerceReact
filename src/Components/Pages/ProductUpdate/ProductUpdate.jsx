import React from "react";

export const ProductUpdate = ({
  handleSubmit,
  productSelected,
  setProductSelected,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue={productSelected.name}
          onChange={(e) =>
            setProductSelected({
              ...productSelected,
              name: e.target.value,
            })
          }
        />
        <input
          type="text"
          defaultValue={productSelected.price}
          onChange={(e) =>
            setProductSelected({
              ...productSelected,
              name: e.target.value,
            })
          }
        />
        <input
          type="text"
          defaultValue={productSelected.img}
          onChange={(e) =>
            setProductSelected({
              ...productSelected,
              name: e.target.value,
            })
          }
        />
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
};
