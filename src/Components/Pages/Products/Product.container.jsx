import React from "react";
import { Products } from "./Products";

export const ProductContainer = () => {
  const [items, setItems] = useState([]);
  const [isProductDeleted, setIsProductDeleted] = useState(false);
  const [isProductUpdated, setIsProductUpdated] = useState(false);

  //Bring the items from DB only once. All querys need to go inside UseEffect
  useEffect(() => {
    setIsProductDeleted(false);
    setIsProductDeleted(false);
    setIsProductUpdated(false);
    const products = axios.get("http://localhost:5000/products");
    products.then((res) => setItems(res.data)).catch((err) => console.log(err));
  }, [isProductDeleted, isProductUpdated]);

  //Delete an item from Products
  const deleteProductById = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`);
    setIsProductDeleted(true);
  };

  //Update an item
  const updateProductById = (id) => {
    axios.patch(`http://localhost:5000/products/${id}`, {
      price: 600,
      name: "zapas x",
    });
    setIsProductUpdated(true);
  };

  console.log(items);

  return (
    <div>
      <Products
        updateProductById={updateProductById}
        deleteProductById={deleteProductById}
        items={items}
      />
    </div>
  );
};
