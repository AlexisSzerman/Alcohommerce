import React from "react";
import ItemList from "../components/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("../items.json");
      const data = await response.json();
      setTimeout(() => {
        setItems(data);
      }, 2000); 
    };
    fetchItems();
  }, []);

  const categoryFilter = items.filter((item) => item.category === category);

  return (
    <section>
       {category ? <ItemList items={categoryFilter} /> : <ItemList items={items} />}
    </section>
  );
};

export default ItemListContainer;







