import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProductById,
  updateProduct,
} from "../../../services/productService";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [showForm, setShowform] = useState([false]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [productSelected, setProductSelected] = useState({
    name: product.name,
    price: product.price,
    img: product.img,
  });

  const { id } = useParams();

  useEffect(() => {
    setIsUpdated(false);
    setShowform(false);
    let producto = getProductById(id);
    producto.then((res) => setProduct(res.data));
  }, [isUpdated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, productSelected);
    setIsUpdated(true);
  };

  return (
    <div>
      <ProductDetail
        product={product}
        showForm={showForm}
        setShowForm={setShowform}
        handleSubmit={handleSubmit}
        productSelected={productSelected}
        setProductSelected={setProductSelected}
      />
    </div>
  );
};

export default ProductDetailContainer;
