import React from 'react';
import { Heading } from "@chakra-ui/react";

const Home = ({ greeting }) => {
  return (
    <Heading as="h4" size="md">{greeting}</Heading>
  )
}

export default Home