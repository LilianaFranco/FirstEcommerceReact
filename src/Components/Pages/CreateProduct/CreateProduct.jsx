export const CreateProduct = (handleSubmit, handleChange) => {
  return (
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
  );
};
