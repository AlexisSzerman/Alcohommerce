import React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Flex,
  Spacer
} from "@chakra-ui/react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };

  const restar = () => {
    if (count - 1 >= initial) setCount(count - 1);
  };

  return (
    <Card maxW='sm'>
      <CardBody bg='#E2E8F0'>
      <Flex minWidth="max-content" alignItems="center">
          <Button colorScheme="teal" variant="outline" size="xs">
            <button onClick={restar}>-</button>
          </Button>
          <Spacer />
          <p>{count}</p>
          <Spacer />
          <Button colorScheme="teal" variant="outline" size="xs">
            <button onClick={sumar}>+</button>
          </Button>
          <Spacer />
          <Button c colorScheme="teal" size="sm">
            {count >= initial && (
              <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            )}
          </Button>
          <Spacer />
        </Flex>
      </CardBody>
    </Card>
  );
}

export default ItemCount;
