import React from 'react'
import './itemCount.css'
import {useState} from 'react'


const ItemCount = ({stock}) => {
    const [count, setCount]= useState (1)
    const onAdd = () => {
        if(stock > 0){

        }
        else {
            alert("¡No hay stock disponible!");
        }
        }

        const onAddToCart = () => {
            alert(`Agregaste ${count} ${count === 1 ? 'producto' : 'productos'} al carrito`);
    }

    const sumar = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 0){
        setCount(count - 1)
    }
}

    return(
        <>
        <div className="botones">
            <button className="btn btn-outline-danger" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-outline-success" onClick={sumar}>+</button>
        </div>
        <div className='btn-carrito'>
        <button className="btn btn-outline-warning" onClick={onAdd}>Quiero!</button>
        <button className="btn btn-outline-warning" onClick={onAddToCart}>Agregar a mi carrito!</button>
        </div>
        </>
    )
}

export default ItemCount