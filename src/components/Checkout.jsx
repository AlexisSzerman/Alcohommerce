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
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";


const orderNumber = Math.floor(Math.random() * 1000000000);
const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);

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


export default Checkout;



/* 
agregar alerta de chakra UI diciendo pedido completado y que vacie el carrito
Usar context para usar el clearCart ()

function handleClick() {
  functionOne();
  functionTwo();
}

<Button onClick={handleClick}>Click me</Button>


const handleClearCart = () => {
  clearCart();
  showAlert();
};

return (
  <Button onClick={handleClearCart}>Clear Cart</Button>
);


<Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Pedido Confirmado!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Nuestro equipo te contactará a la brevedad para coordinar el envío y el pago. Gracias por elegirnos! 
  </AlertDescription>
</Alert> */
