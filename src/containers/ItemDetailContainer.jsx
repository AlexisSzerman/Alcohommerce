import ItemDetail from '../components/ItemDetail'
import { useState, useEffect } from "react";
import items from "/items.json";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getProductId = () => {
      return new Promise((resolve, reject) => {
        if (items.length === 0) {
          reject(new Error("No hay datos"));
        }
        setTimeout(() => {
          const idFilter = items.filter((item) => item.id == id);
          resolve(idFilter);
        }, 2000);
      });
    };

    async function fetchingData() {
      try {
        const datosFetched = await getProductId();
        setItem(datosFetched);
      } catch (err) {
        console.log(err);
      }
    }
    fetchingData();
  }, [id]);


  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;




