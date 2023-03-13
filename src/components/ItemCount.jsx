import React from "react";
import { useState } from "react";
import {
  Button,
  Flex,
  Spacer,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { Icon,
  AddIcon,
  MinusIcon 
} from '@chakra-ui/icons'


function ItemCount({ stock, initial}) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count - 1 >= initial) setCount(count - 1);
  };

  return (
    

        <Flex minWidth="max-content" alignItems="center">
          <IconButton icon={<MinusIcon /> } onClick={decrease} colorScheme="teal"
            variant="outline" mr={4}/>
    
          <Text>{count}</Text>
      
          <IconButton icon={<AddIcon/>} onClick={increase} colorScheme="teal"
            variant="outline" ml={4} mr={4}/>
      
          {count >= initial && (
            <Button colorScheme='green' size="sm"  fontSize="lg">
              Agregar al carrito
            </Button>
          )}
      
        </Flex>

      
  
  );
}

export default ItemCount;



