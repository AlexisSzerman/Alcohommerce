import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import Test from './components/Test'  */ /* Una variante de la logica asincronica sin usar useEffect */

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path={'/'} element={<Home greeting={"Bienvenidos a Alcohommerce"} />}/>
        <Route exact path={'/catalogue'} element={<ItemListContainer />} />
        <Route exact path={'/category/:category'} element={<ItemListContainer />} />
        <Route exact path={'/item'} element={<ItemDetailContainer />} />
        <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route exact path={"/cart"} element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
  

