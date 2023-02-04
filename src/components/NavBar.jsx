import React from "react";
import CartWidget from "./CartWidget";
import {
  Breadcrumb,
  Box,
  Flex,
  Spacer,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <nav>
      <Box bg="black" w="100%" p={3} color="white">
        <Box>
          <Flex minWidth="max-content" alignItems="center">
            <Box />
            <Heading>Alcohommerce</Heading>
            <Spacer />

            <Breadcrumb>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">🏠Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">🍷Vinos</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">🍺Cervezas</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">🍸Espirituosas</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Spacer />
            <CartWidget />
          </Flex>
        </Box>
      </Box>
    </nav>
  );
};

export default NavBar;
