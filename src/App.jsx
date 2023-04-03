import "./App.css";
import { Login } from "./Components/Pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductContainer } from "./Components/Pages/Products/Product.container";
import ProductDetailContainer from "./Components/Pages/ProductDetail/ProductDetail.container";
import { Navbar } from "./Components/Layout/Navbar/Navbar";
import { CreateProductContainer } from "./Components/Pages/CreateProduct/CreateProduct.container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route element={<Navbar />} />
        <Route path="/create" element={<CreateProductContainer />} />
        <Route path="/products" element={<ProductContainer />} />
        <Route path="/productDetail/:id" element={<ProductDetailContainer />} />
        <Route path="*" element={<h1>Not found</h1>} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
