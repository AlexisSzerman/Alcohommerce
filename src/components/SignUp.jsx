import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError("Ha ocurrido un error al crear la cuenta");
      });
  };

  return (
    <Box minH="100vh">
      <Box maxW="sm" mx="auto" mt={20} bg="white" p={8} borderRadius="md">
        <Heading fontSize="2rem">🍸Alcohommerce🍸</Heading>
        <Text fontSize="xl" fontWeight="semibold" textAlign="center" mt={4}>
          Crea tu cuenta
        </Text>
        <form>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              borderColor="green.500"
              type="email"
              name="email"
              required
              placeholder="Email address"
              value={email}
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button

            colorScheme="green"
            onClick={onSubmit}
            style={{ display: "block", margin: "auto", justifyContent: "center" }}
          >
            Crear cuenta
          </Button>
        </form>
        {error && (
          <Text color="red.500" mt={4} textAlign="center">
            {error}
          </Text>
        )}
        <Text fontSize="sm" mt={4} textAlign="center">
          Ya tenés cuenta? <NavLink to="/">Ingresar</NavLink>
        </Text>
      </Box>
    </Box>
  );
};

export default Signup;
