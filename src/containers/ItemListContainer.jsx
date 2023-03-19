import React from "react";
import ItemList from "../components/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Flex, CircularProgress } from "@chakra-ui/react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //para utilizar el cicular progress hasta que se complete la carga
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "bebidas");
    getDocs(itemsCollection).then((snapshot) => {
      const doc = snapshot.docs.map((doc) => ({...doc.data(), id:doc.id}));
      setItems(doc);
      setIsLoading(false);
    });
  }, []);
  

  const categoryFilter = items.filter((item) => item.category === categoryId);

  return (
    <>
      {isLoading ? (
        <Flex height="100vh" justifyContent="center" alignItems="center">
          <CircularProgress isIndeterminate color="green.500" />
        </Flex>
      ) : categoryId ? (
        <ItemList items={categoryFilter} />
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
