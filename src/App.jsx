import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import './App.css'


const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {"Bienvenidos a Alcohommerce"}/>
    </>
  )
}

export default App

