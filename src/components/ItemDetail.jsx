/* import { useContext, useEffect, useState } from "react";
import ItemCount from "../components/ItemCount";
import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import {CartContext} from "../contexts/CartContext"

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext)
  const [ itemStock, setItemStock] = useState(0)

  const onAdd = (quantity) => {
      setItemStock(itemStock - quantity)
      addItem(item, quantity)
  }

  useEffect(() => {
      setItemStock(item.stock)
  }, [item]);
  
  return (
    <div>
      {item.map((item) => (
        <div key={item.id}>
          <Center p="1rem">
            <Card>
              <CardBody>
                <Image
                  borderRadius="lg"
                  src={item.pictureUrl}
                  alt={item.title + " " + item.brand}
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.title}</Heading>
                  <Heading size="xl">{item.brand}</Heading>
                  <Text>
                    {item.description}
                  </Text>

                  <Text color="red.600">
                    Stock disponible: {item.stock} u.
                  </Text>
                  <Text fontSize="xl">
                   Precio: ${item.price}
                  </Text>
                </Stack>
              </CardBody>

              <CardFooter>
                <Center flex={1} justifyContent="center">
                  <ItemCount stock={item.stock} onAdd={onAdd} />
                </Center>
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail; */

import { useContext, useEffect, useState } from "react";
import ItemCount from "../components/ItemCount";
import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import {CartContext} from "../contexts/CartContext"

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext)
  const [ itemStock, setItemStock] = useState(0)

  const onAdd = (quantity) => {
      setItemStock(itemStock - quantity)
      addItem(item, quantity)
  }

  useEffect(() => {
      setItemStock(item.stock)
  }, [item]);
  
  return (
    <div>
      <div key={item.id}>
        <Center p="1rem">
          <Card>
            <CardBody>
              <Image
                borderRadius="lg"
                src={item.pictureUrl}
                alt={item.title + " " + item.brand}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.title}</Heading>
                <Heading size="xl">{item.brand}</Heading>
                <Text>
                  {item.description}
                </Text>

                <Text color="red.600">
                  Stock disponible: {item.stock} u.
                </Text>
                <Text fontSize="xl">
                 Precio: ${item.price}
                </Text>
              </Stack>
            </CardBody>

            <CardFooter>
              <Center flex={1} justifyContent="center">
                <ItemCount stock={item.stock} onAdd={onAdd} />
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  );
};

export default ItemDetail;



