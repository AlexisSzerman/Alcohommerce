import {
  Box,
  Input,
  Container,
  Stack,
  Center,
  InputGroup,
  InputLeftAddon,
  Button,
  Checkbox,
  Heading,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, cartTotal, clearCart, removeItem} =
    useContext(CartContext);
  console.log(cart);

  return (
    <>
      {cartTotal() === 0 ? (
        <Center height="80vh">
          <Flex flexDirection="column" alignItems="center">
            <Heading>Todavía no agregaste productos</Heading>
            <Link to={"/catalogue"}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button colorScheme="green" variant="outline" mt={6}>
                  Ir al catálogo completo
                </Button>
              </motion.div>
            </Link>
          </Flex>
        </Center>
      ) : (
        
        <Stack spacing={4} mt={4}>
          {cart.map((item) => {
            return (
              <div key={item.id}>
              <Container>
                <Card maxW="sm">
                  <CardHeader>
                    <Heading size="md">{item.title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text as="b">Quantity: {item.quantity}</Text>
                    <Text>Price: U$D {item.price}</Text>
                  </CardBody>
                  <CardFooter>
                    <Button
                      colorScheme="red"
                      onClick={() => removeItem()}
                    >
                      Delete from cart
                    </Button>
                  </CardFooter>
                  <Button
                      colorScheme="red"
                      onClick={() => clearCart()}
                    >
                      Vaciar carrito
                    </Button>
                </Card>
              </Container>
              </div>
            );
          })}
        </Stack>
      
    )}
  </>
);
};

export default Cart;
       



