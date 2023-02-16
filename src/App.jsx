import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Welcome from "./components/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import Test from './components/Test'  */ /* Una variante de la logica asincronica sin usar useEffect */

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Welcome greeting={"Bienvenidos a Alcohommerce"} />}
        />
        <Route exact path="/catalogue" element={<ItemListContainer />} />
        <Route exact path="/item" element={<ItemDetailContainer />} />
      </Routes>
      {/* <Test/>  */}
    </BrowserRouter>
  );
};

export default App;
