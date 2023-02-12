import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
/* import Test from './components/Test'  */ /* Una variante de la logica asincronica sin usar useEffect */



const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {"Bienvenidos a Alcohommerce"}/>
      <ItemDetailContainer/>
      {/* <Test/>  */}
    </>
  )
}

export default App

