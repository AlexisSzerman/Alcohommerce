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
  Spacer,
  Text,
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
    <Card maxW="sm">
      <CardBody bg="#E2E8F0">
        <Flex minWidth="max-content" alignItems="center">
          <Button
            colorScheme="teal"
            variant="outline"
            size="xs"
            fontSize="lg"
            onClick={restar}>
            -
          </Button>
          <Spacer />
          <p>{count}</p>
          <Spacer />
          <Button
            colorScheme="teal"
            variant="outline"
            size="xs"
            fontSize="lg"
            onClick={sumar}>
            +
          </Button>
          <Spacer />
          {count >= initial && (
            <Button colorScheme="teal" size="sm"  fontSize="lg" onClick={() => onAdd(count)}>
              Agregar al carrito
            </Button>
          )}
          <Spacer />
        </Flex>
      </CardBody>
    </Card>
  );
}

export default ItemCount;
