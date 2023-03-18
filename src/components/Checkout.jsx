import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Input,
  Container,
  Stack,
  Center,
  InputGroup,
  InputLeftAddon,
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";

const Checkout = () => {
  const { cart, clearCart, priceTotal } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAccept = () => {
    navigate("/catalogue");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      alert("No pueden existir campos vacios");
    } else {
      const db = getFirestore();
      const ordersCollection = collection(db, "order");

      const order = {
        buyer: { name: name, phone: phone, email: email },
        items: cart.map((item) => ({
          id: item.id,
          title: item.title,
          brand: item.brand,
          quantity: item.quantity,
          price: item.price,
        })),
        total: priceTotal(),
      };
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
      setIsModalOpen(true);
    }

    clearCart();
  };

  return (
    <>
      <Box>
        <Center mt={4} mb={6}>
          <Heading>Completa tus datos para confirmar el pedido</Heading>
        </Center>
      </Box>
      <Container>
        <Center>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4} borderColor="green.500">
              <Input
                placeholder="Nombre y Apellido"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGroup>
                <InputLeftAddon children="+011" />
                <Input
                  type="tel"
                  placeholder="Número de teléfono"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </InputGroup>
              <Text size="md">Total de la orden $ {priceTotal()}</Text>
              <Button
                colorScheme="green"
                variant="outline"
                type="submit"
                onClick={handleModal}
                isDisabled={priceTotal() === 0}
              >
                Confirmar Pedido
              </Button>
            </Stack>
          </form>
        </Center>
      </Container>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Pedido n°{orderId} confirmado!</ModalHeader>
            <ModalBody>
              Nuestro equipo te contactará a la brevedad para coordinar el envío
              y el pago. Gracias por elegirnos {name}!
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" onClick={handleAccept}>
                Aceptar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Checkout;
