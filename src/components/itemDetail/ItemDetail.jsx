import React from 'react'
import './itemDetail.css'
import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({producto}) => {
    return (
        <div className='detalle'>
            <h3>Detalle de: {producto.name}</h3>
            <img alt={producto.name} src= {producto.imagen}/>
            <p className='descriptionDetalle'>{producto.description}</p>
            <ItemCount stock={producto.stock}/>
        </div>
    )
}

export default ItemDetail