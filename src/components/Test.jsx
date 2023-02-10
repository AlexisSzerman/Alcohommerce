import React from "react";
import { Heading, Container } from "@chakra-ui/react";
import ItemList from "./ItemList";
import datos from '../../items.json'

const Test = () => {
  
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
    <Container maxW='container.sm' bg="#E2E8F0" centerContent>
    <div>
        <ItemList/>
      {datos.map((prod) => {
        return (
          <div key={prod.id}>
            <img src={prod.pictureUrl} alt={prod.title + " " + prod.brand} width="180px" height="auto"/>
            <Heading as="h3" size="md">{prod.title}</Heading>
            <Heading as="h4" size="md">{prod.brand}</Heading>
            <p>{prod.description}</p>
            <p>Precio: ${prod.price}</p>
          </div>
        );
      })}
    </div>
    </Container>
    </>
  );
};
            

export default Test;
