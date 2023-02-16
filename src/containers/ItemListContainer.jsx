import React from "react";

import ItemList from "../components/ItemList";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    /* const fetchItems = async () => {
      const response = await fetch("../items.json");
      const data = await response.json();
      setItems(data);
    }; */
    const fetchItems = async () => {
      const response = await fetch("../items.json");
      const data = await response.json();
      setTimeout(() => {
        setItems(data);
      }, 2000); 
    };
    

    fetchItems();
  }, []);

  return (
    <section>
      <ItemList items={items} />;
    </section>
  );
};

export default ItemListContainer;
      
