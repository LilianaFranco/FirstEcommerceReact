import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { updateProduct } from "../../../services/productService";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [showForm, setShowform] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailContainer;
