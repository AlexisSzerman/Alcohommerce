import React from 'react'
import ItemCount from "../components/ItemCount"

const ItemDetail = () => {
  return (
    <div>
    <ItemCount stock={5} initial={1}/>
    </div>
  )
}

export default ItemDetail