import "./App.css";
import { Login } from "./Components/Pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateProduct } from "./Components/Pages/CreateProduct/CreateProduct";
import { ProductContainer } from "./Components/Pages/Products/Product.container";
import ProductDetailContainer from "./Components/Pages/ProductDetail/ProductDetail.container";
import { Navbar } from "./Components/Layout/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route element={<Navbar />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/products" element={<ProductContainer />} />
        <Route path="/productDetail/:id" element={<ProductDetailContainer />} />
        <Route path="*" element={<h1>Not found</h1>} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
