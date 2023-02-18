import React from 'react';
import { Grid, Container } from "@chakra-ui/react";
import Item from './Item';

const ItemList = ({ items }) => {
  
  return (
    <Container maxW='container.lg'>
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Grid>
    </Container>
    
  );
};

export default ItemList;




