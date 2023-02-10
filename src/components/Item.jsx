import React from 'react';
import {Heading} from "@chakra-ui/react";

const Item = ({ item }) => {
  return (
    <div>
      <img src={item.pictureUrl} alt={item.title + " " + item.brand} width="180px" height="auto" />
      <Heading as='h3' size='md'>{item.title}</Heading>
      <Heading as='h4' size='md'>{item.brand}</Heading>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
};

export default Item;
      


