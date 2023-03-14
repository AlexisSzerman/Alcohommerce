import React from "react";
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


const ItemDetail = ({ product }) => {
  return (
    <div>
      {product.map((item) => (
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
                  <ItemCount stock={item.stock} />
                </Center>
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
