import React from 'react'
import ItemDetail from '../components/ItemDetail'
import datos from '/items.json'
import { useState,useEffect } from "react";

/* const ItemDetailContainer = () => {
  return (
    <div>
      <ItemDetail/>
    </div>
  )
} */
/* const ItemDetailContainer = () => {
  
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (datos.length === 0) {
        reject(new Error("No hay datos para mostrar"));
      } 
      setTimeout (()=> {
        resolve(datos);
      }, 2000); 
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      console.log(datosFetched);
    } catch (error) {
      console.log(error);
    }
  }

  fetchingData();

  return (
    <>
    <ItemDetail items = {items}/>
    </>
  );
};
    */    
   

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);


  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (datos.length === 0) {
        reject(new Error("No hay datos para mostrar"));
      } 
      setTimeout (()=> {
        resolve(datos);
      }, 2000); 
    });
  };

  useEffect(() => {
    async function fetchingData() {
      try {
        const datosFetched = await getDatos();
        setItems(datosFetched);
      } catch (error) {
        console.log(error);
      }
    }
    fetchingData();
  }, []);

  return (
    <>
      <ItemDetail items={items} />;
    </>
     
  );
};
     

export default ItemDetailContainer

