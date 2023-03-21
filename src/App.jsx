import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SocialMedia from "./components/SocialMedia";
import CartContextProvider from "./contexts/CartContext"
import Checkout from "./components/Checkout";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { auth } from './main.jsx'; // import auth from main.jsx

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => { // use auth from main.jsx
      if (user) {
        // User is signed in
        setIsLoggedIn(true);
      } else {
        // User is signed out
        setIsLoggedIn(false);
      }
    });

    // Unsubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <CartContextProvider>
      <BrowserRouter>
        {isLoggedIn && <NavBar />}
        <SocialMedia/>
        <Routes>
          <Route exact path={'/home'} element={<Home greeting={"Bienvenidos a Alcohommerce"} />}/>
          <Route exact path={'/catalogue'} element={<ItemListContainer />}/>
          <Route exact path={'/category/:categoryId'} element={<ItemListContainer />}/>
          <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route exact path={"/cart"} element={<Cart/>} />
          <Route exact path={"/checkout"} element={<Checkout/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
