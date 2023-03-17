import ItemDetail from "../components/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Flex, CircularProgress } from "@chakra-ui/react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "bebidas", id);

    getDoc(item).then((snapShot) => {
      if (snapShot.exists()) {
        setItem({ id: snapShot.id, ...snapShot.data() });
        setLoading(false);
      } else {
        console.log("El producto no existe");
      }
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <Flex height="100vh" justifyContent="center" alignItems="center">
          <CircularProgress isIndeterminate color="green.500" />
        </Flex>
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
};

export default ItemDetailContainer;
