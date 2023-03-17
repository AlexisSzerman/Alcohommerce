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
} from "@chakra-ui/react";

const orderNumber = Math.floor(Math.random() * 1000000000);
const Checkout = () => {
  return (
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
  );
};
//agregar alerta de chakra UI diciendo pedido completado y que vacie el carrito

export default Checkout;
