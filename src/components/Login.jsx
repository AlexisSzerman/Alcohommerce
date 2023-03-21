import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Heading
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useToast } from "@chakra-ui/react";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const toast = useToast();

  const onLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
        toast({
            position: "top",
            title: `Bienvenido ${user.email}!`,
            status: "success",
            duration: 5000,
            isClosable: false,
          });
        })
      .catch((error) => {
        setError("Email o contraseña incorrectos");
      });
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Box minH="100vh">
      <Box maxW="sm" mx="auto" mt={20} bg="white" p={8} borderRadius="md">
        <Heading fontSize="2rem">🍸Alcohommerce🍸</Heading>
        <Text fontSize="xl" fontWeight="semibold" textAlign="center" mt={4}>
          Ingresá con tu usuario
        </Text>
        <form>
          <FormControl mt={4}>
            <FormLabel>Correo electrónico</FormLabel>
            <Input
              borderColor="green.500"
              type="email"
              name="email"
              required
              placeholder="Correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Contraseña</FormLabel>
            <Input
            mb={4}
              borderColor="green.500"
              type="password"
              name="password"
              required
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button

            colorScheme="green"
            onClick={onLogin}
            style={{ display: "block", margin: "auto", justifyContent: "center" }}
          >
            Ingresar
          </Button>
        </form>
        {error && (
          <Text color="red.500" mt={4} textAlign="center">
            {error}
          </Text>
        )}
        <Text fontSize="sm" mt={4} textAlign="center">
          No tenés cuenta? <NavLink to="/signup">Crear usuario</NavLink>
        </Text>
      </Box>
    </Box>
    </motion.div>
  );
};

export default Login;
