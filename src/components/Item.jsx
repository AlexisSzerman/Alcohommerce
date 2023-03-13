import React from 'react';
import { Heading, Button, Flex, Box, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const Item = ({ item }) => {
  const rotateAnimation = {
    rotate: [0, 1, -1, 0],
    transition: { duration: 0.5, repeat: 1 }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <motion.div whileHover={rotateAnimation}>
        <Box w="180px" h="180px">
          <img src={item.pictureUrl} alt={item.title + " " + item.brand} width="100%" height="100%" />
        </Box>
      </motion.div>
      <Heading size='xs' mt={4}>{item.title}</Heading>
      <Heading size='md' mb={4}>{item.brand}</Heading>
      <Text mb={6}>Precio: ${item.price}</Text>
      <Flex justify="center" mt="auto">
        <Link to={"/item/" + item.id}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button colorScheme='green'>Ver Detalle</Button>
          </motion.div>
        </Link>
      </Flex>
    </Box>
  );
};

export default Item;



