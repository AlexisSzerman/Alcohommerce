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
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaBeer, FaWineBottle, FaCocktail } from "react-icons/fa";


const NavBar = () => {
  return (
    <nav>
      <Box p={3}>
        <Box>
          <Flex minWidth="max-content" alignItems="center">
            <Box />
            
            <Spacer />
            <Link to="/">
              <Heading>🍸 Alcohommerce</Heading>
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

       
            

