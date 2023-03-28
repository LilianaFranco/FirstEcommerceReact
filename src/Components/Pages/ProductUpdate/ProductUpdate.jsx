import React from "react";

export const ProductUpdate = ({
  product,
  handleSubmit,
  productSelected,
  setProductSelected,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue={product?.name}
          onChange={(e) =>
            setProductSelected({
              ...productSelected,
              name: e.target.value,
            })
          }
        />
        <input
          type="text"
          defaultValue={product?.price}
          onChange={(e) =>
            setProductSelected({
              ...productSelected,
              name: e.target.value,
            })
          }
        />
        <input
          type="text"
          defaultValue={product?.img}
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
