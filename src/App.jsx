import "./App.css";
import { Login } from "./Components/Pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./Components/Pages/Products/Products";
import { Navbar } from "./Components/Layout/Navbar/Navbar";
import { CreateProduct } from "./Components/Pages/CreateProduct/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<h1>I'm the cart</h1>} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
