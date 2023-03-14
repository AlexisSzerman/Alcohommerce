import { useContext } from "react";
import { Link } from 'react-router-dom'
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
import { CartContext } from "../contexts/CartContext";
import { motion } from 'framer-motion';


const orderNumber = Math.floor(Math.random() * 1000000000);

const Cart = () => {
  const { cart, cartTotal, priceTotal,  clearCart, removeItem } = useContext(CartContext)

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
        <>
          <Box>
            <Center mt={4} mb={6}>
              <Heading>Completa tus datos para confirmar el pedido</Heading>
            </Center>
          </Box>

          <Container>
            <Center>
              <Stack spacing={4}>
                <Input placeholder="Nombre y Apellido" />
                <Input type="email" placeholder="Correo electrónico" />
                <Input placeholder="Dirección" />
                <Checkbox>Envío en el día</Checkbox>
                <InputGroup>
                  <InputLeftAddon children="+011" />
                  <Input type="tel" placeholder="Número de teléfono" />
                </InputGroup>
                <Box color="grey">Pedido Número: {orderNumber}</Box>
                <Button colorScheme="green" variant="outline">
                  Confirmar Pedido
                </Button>
              </Stack>
            </Center>
          </Container>
        </>
      )}
    </>
  );
};

export default Cart;
