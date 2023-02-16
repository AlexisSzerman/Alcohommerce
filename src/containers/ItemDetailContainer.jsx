import React from 'react'
import ItemDetail from '../components/ItemDetail'
import items from '/items.json'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [itemsData, setItemsData] = useState([]);
  const { id } = useParams();

  const getItemById = (id) => {
    return new Promise((resolve, reject) => {
      const item = items.find((item) => item.id === id);
      if (!item) {
        reject(new Error("No se encontró el item"));
      }
      setTimeout(() => {
        resolve(item);
      }, 2000);
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const item = await getItemById(id);
        setItemsData([item]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      <ItemDetail items={itemsData} />;
    </>
  );
};

export default ItemDetailContainer;


/* import React from 'react'
import ItemDetail from '../components/ItemDetail'
import items from '/items.json'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (items.length === 0) {
        reject(new Error("No hay items"));
      }
      setTimeout(() => {
        const productFilter = items.filter((item) => item.id === id);
        resolve(productFilter);
      }, 2000);
    });
  };

  
  useEffect(() => {
  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      setProduct(datosFetched);
    } catch (error) {
      console.log(error);
    }
  }

  fetchingData();
}, []);
  
  
  return <ItemDetail product={product} />;
};

export default ItemDetailContainer; */


