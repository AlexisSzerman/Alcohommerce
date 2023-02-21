import React from 'react';
import { Heading, Button, Flex, Box, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box w="180px" h="180px">
        <img src={item.pictureUrl} alt={item.title + " " + item.brand} width="100%" height="100%" />
      </Box>
      <Heading  size='xs' mt={4}>{item.title}</Heading>
      <Heading  size='md' mb={4}>{item.brand}</Heading>
      <Text mb={6}>Precio: ${item.price}</Text>
      <Flex justify="center" mt="auto">
        <Link to={"/item/" + item.id}>
          <Button  colorScheme='green'>Ver Detalle</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Item;













