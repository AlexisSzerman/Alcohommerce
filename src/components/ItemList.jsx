import React from "react";
import Item from "./Item";
import {Container} from "@chakra-ui/react";

const ItemList = ({ items }) => {
    
  return (
    <>
    <Container>
    <div>
     {items.map((item) => (
        <Item key={item.id} item={item} />
      ))} 
    </div>
    </Container>
    </>
  );
}; 


export default ItemList;
