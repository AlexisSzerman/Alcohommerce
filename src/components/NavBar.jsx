import React from "react";
import CartWidget from "./CartWidget";
import {
  Box,
  Flex,
  Spacer,
  Heading,
  Icon,
  Tabs, 
  TabList, 
  Tab,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaBeer, FaWineBottle, FaCocktail } from "react-icons/fa";
import { motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../main";
import { useToast } from "@chakra-ui/react";



const CocktailIcon = () => {
  return (
    <motion.span
      animate={{ rotate: [0, 10, -15, 15, -10, 0] }}
      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
      style={{ display: "inline-block" }}
    >
      <span role="img" aria-label="cocktail">
        🍸
      </span>
    </motion.span>
  );
};

const NavBar = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        toast({
          position: "top",
          title: `Cerraste sesión correctamente`,
          status: "info",
          duration: 5000,
          isClosable: false,
        });
      })
      .catch((error) => {
        navigate("/");
        alert("Ocurrió un error");
      });
  };
  return (
    <nav>
      <Box p={3}>
        <Box>
          <Flex minWidth="max-content" alignItems="center">
            <Box />
            
            <Spacer />
            <Link to="/home">
              <Heading><CocktailIcon /> Alcohommerce</Heading>
            </Link>
            <Spacer />
            
      <Tabs variant='soft-rounded' colorScheme='green' aria-selected='true'>
        <TabList>
           
            <Link to="/catalogue">
              <Tab>Todos los productos</Tab>
            </Link>
            
            <Link to={`/category/${"Cervezas"}`}>
              <Tab> 
                <Icon as={FaBeer} boxSize={4} mr={2} />
                Cervezas
              </Tab>
            </Link>
    
            <Link to={`/category/${"Vinos y Espumantes"}`}>
              <Tab> 
                <Icon as={FaWineBottle} boxSize={4} mr={2} /> 
              Vinos y Espumantes
              </Tab>
            </Link>

            <Link to={`/category/${"Espirituosas"}`}>
              <Tab> 
                <Icon as={FaCocktail} boxSize={4} mr={2} />
                Espirituosas
                </Tab>
            </Link>
        
        </TabList>
      </Tabs>
    
            <Spacer />
            <Box>
          <Button colorScheme="green" onClick={handleLogout} mr="2">Cerrar Sesión</Button>
        </Box>
           
          <Link to="/cart">
            <CartWidget />
          </Link>
         
            </Flex>
          </Box>
        </Box>
    </nav>
  );
};

export default NavBar;