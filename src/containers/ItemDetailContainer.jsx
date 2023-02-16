import ItemDetail from '../components/ItemDetail'
import { useState, useEffect } from "react";
import items from "/items.json";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

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
        setProduct(datosFetched);
      } catch (err) {
        console.log(err);
      }
    }
    fetchingData();
  }, [id]);


  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;




