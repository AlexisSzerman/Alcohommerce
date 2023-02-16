import React from "react";
import { Icon, Box } from "@chakra-ui/react"; 
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
  return (
   
   <Box position="relative" display="inline-block" mr={4}>
      <Icon as={BsCart4} boxSize={6} />
      <Box
        position="absolute"
        top="-10px"
        right="-10px"
        bg="red.500"
        color="white"
        borderRadius="50%"
        w="20px"
        h="20px"
        textAlign="center"
        fontSize="sm"
        fontWeight="bold"
        lineHeight="1.2"
      >
        2
      </Box>
    </Box>
  );
};
export default CartWidget;
