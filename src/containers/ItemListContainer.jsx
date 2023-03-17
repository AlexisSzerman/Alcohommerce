import React from "react";
import ItemList from "../components/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Flex, CircularProgress } from "@chakra-ui/react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("../items.json");
        const data = await response.json();
        setTimeout(() => {
          setItems(data);
          setIsLoading(false);
        }, 2000); 
        if (data.length === 0) {
          return new Error("No hay datos");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  const categoryFilter = items.filter((item) => item.category === categoryId);

  return (
    <>
      {isLoading ? (
        <Flex
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress
          isIndeterminate
          color="green.500"
        />
      </Flex>
      ) : (
        categoryId ? <ItemList items={categoryFilter} /> : <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;











