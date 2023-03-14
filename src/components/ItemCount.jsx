import { useState, useContext } from "react";
import { Button, Flex, Text, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../contexts/CartContext";

const ItemCount = ({ stock }) => {
  const { cart, setCart } = useContext(CartContext)
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  
  const isInCart = (id) => {
    return cart.some(x => x.id === id)
}

  const addItem = (item, quantity) => {
    if(isInCart(item.id)){
        let pos = cart.findIndex(x => x.id === item.id)
        cart[ pos ].quantity += quantity
        setCart([...cart])
    }else {
        setCart([...cart, {...item, quantity:quantity}])
    }
}


  
  return (
    <Flex minWidth="max-content" alignItems="center">
      <IconButton
        icon={<MinusIcon />}
        onClick={decrease}
        colorScheme="teal"
        variant="outline"
        mr={4}
      />

      <Text>{count}</Text>

      <IconButton
        icon={<AddIcon />}
        onClick={increase}
        colorScheme="teal"
        variant="outline"
        ml={4}
        mr={4}
      />

      {count <= stock ? (
        <Button colorScheme="green" size="sm" fontSize="lg"  onClick={() => addItem()}>
          Agregar al carrito
        </Button>
      )  : (
        <Button colorScheme="green" size="sm" fontSize="lg" isDisabled>
          Sin stock suficiente
        </Button>
      ) 
      
      }
      
    </Flex>
  );
};

export default ItemCount; 