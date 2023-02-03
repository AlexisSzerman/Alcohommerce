import React from "react";
import { Icon } from "@chakra-ui/react"; 
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>     
        <Icon as={BsCart4} boxSize={6}/>
        <span>5</span>
    </div>
  );
};

export default CartWidget;
