import React from 'react'
import {Heading} from "@chakra-ui/react";
import ItemCount from "../components/ItemCount"

const ItemListContainer = ({greeting}) => {
  return (
    <section>
      <Heading as='h4' size='md'>{greeting}</Heading>
      <ItemCount stock={5} initial={1}/> 

    </section>
  )
}

export default ItemListContainer