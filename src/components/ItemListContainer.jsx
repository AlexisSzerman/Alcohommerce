import React from 'react'
import {Heading} from "@chakra-ui/react";

const ItemListContainer = ({greeting}) => {
  return (
    <section>
      <Heading as='h4' size='md'>{greeting}</Heading>

    </section>
  )
}

export default ItemListContainer