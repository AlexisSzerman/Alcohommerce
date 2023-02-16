import React from "react";
import CartWidget from "./CartWidget";
import {
  Box,
  Flex,
  Spacer,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { FaBeer, FaWineBottle, FaCocktail } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav>
      <Box bg="black" w="100%" p={3} color="white" >
        <Box>
          <Flex minWidth="max-content" alignItems="center">
            <Box />
            <Link to="/">
              <Heading>Alcohommerce</Heading>
            </Link>
            <Spacer />

            <Menu>
             
            <Link to="/catalogue">
              <Button colorScheme="dark" _hover={{ bg: "grey", color: "white" }} mr={4} variant="outline">
                Todos los productos
              </Button>
              </Link>
              

              <MenuButton
                as={Button}
                colorScheme="dark"
                rightIcon={<ChevronDownIcon />}
                _hover={{ bg: "grey", color: "white" }}
                variant="outline"
              >
                Categorías
              </MenuButton>
              <MenuList color="black">
              <Link to={`/category/${"Cervezas"}`}>
                <MenuItem
                  _hover={{ bg: "grey", color: "white" }}
                  _focus={{ outline: "none" }}
                >
                  <Icon as={FaBeer} boxSize={4} mr={2} />
                  Cervezas
                </MenuItem>
              </Link>
              <Link to={`/category/${"Vinos y Espumantes"}`}>
                <MenuItem _hover={{ bg: "grey", color: "white" }}>
                  <Icon as={FaWineBottle} boxSize={4} mr={2} />
                  Vinos y Espumantes
                </MenuItem>
                </Link>
                <Link to={`/category/${"Espirituosas"}`}>
                <MenuItem _hover={{ bg: "grey", color: "white" }}>
                  <Icon as={FaCocktail} boxSize={4} mr={2} />
                  Espirituosas
                </MenuItem>
                </Link>
              </MenuList>
            </Menu>
            <Spacer />
           
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
