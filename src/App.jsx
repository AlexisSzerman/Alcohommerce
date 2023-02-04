import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'



const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {"Bienvenidos a Alcohommerce"}/>
    </>
  )
}

export default App

