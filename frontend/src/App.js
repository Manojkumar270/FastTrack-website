import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Watch from "./pages/Watch";
import Smartwatch from "./pages/Smartwatch";
import Cart from "./pages/Cart";
import Gift from "./pages/Gift";
import Accessory from "./pages/Accessory";
import Upload from "./admin/Upload";
import Edit from "./admin/Edit";
import Update from "./admin/Update";
import Form from "./pages/Form";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watch" element={<Watch />}></Route>
          <Route path="/smartwatches" element={<Smartwatch />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/gift" element={<Gift />}></Route>
          <Route path="/accessories" element={<Accessory />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/update" element={<Update />}></Route>
          <Route
            path="/edit/:id"
            element={<Edit />}
            // loader={({ params }) =>
            //   fetch(`http://localhost:5001/allproducts/${params.id}`)
            // }
          ></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <br />
      <Footer />
    </div>
  );
};

export default App;
