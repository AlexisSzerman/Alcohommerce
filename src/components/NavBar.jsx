import React from "react";
import CartWidget from "./CartWidget";
import { Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";


const NavBar = () => {
  return (
     
      <nav >
        <Heading>Alcohommerce</Heading>
      
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

        <CartWidget />
      </nav>
      
   
    
  );
};


export default NavBar;


