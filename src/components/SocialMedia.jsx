import React from "react";
import { Box, Link } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <Box
      position="fixed"
      bottom="50%"
      left="0"
      transform="translateY(50%)"
      px="2"
      py="4"
      bg="green.200"
      borderRadius="lg"
    >
      <Link href="https://twitter.com/" target="_blank" mx="2" colorScheme='green'_hover={{ color: "green.500" }}>
        <FaTwitter size="24" />
      </Link>

      <Link href="https://www.instagram.com/" target="_blank" mx="2" colorScheme='green'_hover={{ color: "green.500"}}>
        <FaInstagram size="24" />
      </Link>      
      
      <Link href="https://www.facebook.com/" target="_blank" mx="2" colorScheme='green'_hover={{ color: "green.500"}}>
        <FaFacebook size="24" />
      </Link>   
      
    </Box>
  );
};

export default SocialMedia;