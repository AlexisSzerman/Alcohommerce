import React from 'react';
import {Heading,
  Button
} from "@chakra-ui/react";
import { Link } from 'react-router-dom'



const Item = ({ item }) => {
  return (
    <div>
      <img src={item.pictureUrl} alt={item.title + " " + item.brand} width="180px" height="auto" />
      <Heading as='h3' size='md'>{item.title}</Heading>
      <Heading as='h4' size='md'>{item.brand}</Heading>
      <p>Precio: ${item.price}</p>
      <Button colorScheme='blue'>Ver Detalle</Button>
    </div>
  );
};

export default Item;
      
      


