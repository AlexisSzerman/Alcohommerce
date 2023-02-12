import React from 'react'
import ItemCount from "../components/ItemCount"


const ItemDetail = ({ items }) => {
  return (
    <div>
      {items.map(item => (
     <div key={item.id}>
      <img src={item.pictureUrl} alt={item.title + " " + item.brand} width="180px" height="auto" />
      <h2>{item.title}</h2> 
      <h3>{item.brand}</h3>
      <h4>{item.price}</h4>
      <p>{item.description}</p>
      <ItemCount stock={5} initial={1} />
      </div>
      
      ))}
      
    </div>
  )
} 

export default ItemDetail
