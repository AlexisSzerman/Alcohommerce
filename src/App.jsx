import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SocialMedia from "./components/SocialMedia";
import CartContextProvider from "./contexts/CartContext"



const App = () => {
  return (
  <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <SocialMedia/>
      <Routes>
        <Route exact path={'/'} element={<Home greeting={"Bienvenidos a Alcohommerce"} />}/>
        <Route exact path={'/catalogue'} element={<ItemListContainer />}/>
        <Route exact path={'/category/:categoryId'} element={<ItemListContainer />}/>
        <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route exact path={"/cart"} element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
  );
};


export default App;


