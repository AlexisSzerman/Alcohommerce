import React from 'react'
import ItemCount from "../components/ItemCount"


const ItemDetail = ({ product }) => {
  return (
    <div>
      {product.map(item => (
     <div key={item.id}>
      <img src={item.pictureUrl} alt={item.title + " " + item.brand} width="180px" height="auto" />
      <h2>{item.title}</h2> 
      <h3>{item.brand}</h3>
      <b>${item.price}</b>
      <h6>Stock disponible: {item.stock}</h6>
      <p>{item.description}</p>
      <ItemCount stock={item.stock} initial={1} />
      </div>
      
      ))}
      
    </div>
  )
} 

export default ItemDetail

