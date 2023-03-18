import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { DeleteIcon } from '@chakra-ui/icons'
import { BsCart4 } from "react-icons/bs";




const Cart = () => {
  const { cart, cartTotal, clearCart, removeItem, priceTotal, priceSubtotal } =
    useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
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
          <Container>
            <Stack spacing={4} mt={4}>
              {cart.map((item) => {
                return (
                  <Box
                    key={item.id}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    borderBottom="1px solid gray"
                    pb={2}
                  >
                    <Box display="flex" alignItems="center">
                      <Image
                        width={100}
                        src={item.pictureUrl}
                        alt={item.title + " " + item.brand}
                        mr={4}
                      />
                      <Stack>
                        <Heading size="sm">{item.brand}</Heading>
                        <Heading size="sm">{item.title}</Heading>
                      </Stack>
                    </Box>
                    <Box>
                      <Stack>
                        <Text as="b">Cantidad: {item.quantity}</Text>
                        <Text>Subtotal: $ {priceSubtotal(item)}</Text>
                      </Stack>
                    </Box>
                    <Box>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          colorScheme="red"
                          onClick={() => removeItem(item.id)}
                        >
                          <DeleteIcon/>
                        </Button>
                      </motion.div>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Container>
          <Container>
            <Flex justifyContent="center" alignItems="center" mt={4} gap={2}>
              <Box>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button colorScheme="red" onClick={() => setIsOpen(true)}>
                    Vaciar carrito
                  </Button>
                </motion.div>
              </Box>
              <Box>
              <Link to={"/checkout"}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button colorScheme="green">Realizar Pedido</Button>
                </motion.div>
              </Link>
              </Box>
            </Flex>
            <Box mt={4}>
              <Center>
                <Heading size="lg">Precio Total $ {priceTotal()}</Heading>
              </Center>
            </Box>
          </Container>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay />
            <AlertDialogContent>
              <AlertDialogHeader>Vaciar carrito <Icon as={BsCart4} boxSize={6}/></AlertDialogHeader>
              <AlertDialogBody>
                ¿Estás seguro de que querés vaciar el carrito?
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} colorScheme="green" onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme="red" onClick={clearCart} ml={3}>
                  Vaciar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )}
    </>
  );
};

export default Cart;


