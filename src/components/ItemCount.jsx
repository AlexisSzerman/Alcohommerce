import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Flex, Text, IconButton, useToast, Box } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [sold, setSold] = useState(false);
  const toast = useToast();
  const increase = () => count < itemStock && setCount(count + 1);
  const decrease = () => count > 1 && setCount(count - 1);


 
  //verifica si la cantidad seleccionada (count) es menor o igual al stock actual del artículo (itemStock). Si es así, actualiza los estados de count, itemStock y sold, y llama a la función onAdd con el valor de count
  const addToCart = () => {
    if (count <= itemStock) {
      setCount(1);
      setItemStock(itemStock - count);
      setSold(true);
      onAdd(count);

      toast({
        position: "bottom-right",
        render: () => (
          <Box color="white" p={3} bg="green.500">
            🍸Artículo agregado
          </Box>
        ),
      });
    }
  };
//para actualizar el estado de itemStock cuando cambia la variable stock
  useEffect(() => {
    setItemStock(stock);
  }, [stock]); 

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

      {sold ? (
        <Flex flexDirection="column">
          <Button colorScheme="green" size="sm" fontSize="lg">
            <Link to={"/catalogue"}>Seguir Comprando</Link>
          </Button>
          <Button
            colorScheme="green"
            size="sm"
            fontSize="lg"
            variant="outline"
            mt={2}
          >
            <Link to={"/cart"}>Terminar Compra</Link>
          </Button>
        </Flex>
      ) : (
        <Button colorScheme="green" size="sm" fontSize="lg" onClick={addToCart}>
          Agregar Al Carrito
        </Button>
      )}
    </Flex>
  );
};

export default ItemCount;



