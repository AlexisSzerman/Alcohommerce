import React from "react";
import { Center, Heading, Image, Flex, Divider, Box, Button } from "@chakra-ui/react";
import Banner from "../assets/banner.jpg";



const Home = ({ greeting }) => {

  return (
    <>
    <Center>
      <Flex direction="column" alignItems="center" justifyContent="center" mt="4rem">
        <Heading as="h4" size="lg" mb={4}>
          {greeting}
        </Heading>
        <Image src={Banner} alt="People drinking at home"/>
        <Divider/>
        <Heading as="h6" size="md" mt="3rem" mb="4rem">
          Para que compres tus bebidas desde la comodidad de tu hogar
        </Heading>
      </Flex>
    </Center>
    </>
  );
};

export default Home;

