import React from 'react'
import './itemListContainer.css'
import {useState, useEffect } from 'react'
import ItemCount from '../itemCount/ItemCount'
import {getProducts} from '../../mock/fakeApi'
import ItemList from '../itemList/ItemList'


function ItemListContainer ({greeting}) {
const [productos, setProductos]=useState([])

//ejemplo de promesa
//const productos =[
//    {id: "1", name:'product1', stock:4},
//    {id: "2", name:'product2', stock:8},
//    {id: "3", name:'product3', stock:14},
//]
//
//const getProducts = () => {
//    let error = false
//    return new Promise ((resolve, reject)=>{
//        setTimeout(()=>{
//            if(error){
//                reject('No hay')
//            }
//            else{
//                resolve(productos)
//            }
//        },2000)
//    })
//}
//
//console.log(getProducts())
//getProducts().then((res)=> console.log(res)).catch((error)=> console.log(error))

useEffect(()=>{
    getProducts()
    .then((respuesta)=> setProductos(respuesta))
    .catch((error)=> console.log(error, 'mal'))
},[])
console.log(productos)

    return (
        <div className='cartel'>
            <h1>{greeting}</h1>
            {
               /* productos.map((producto)=> <p key={producto.id}>{producto.stock}</p>)
            */}
            <ItemList productos={productos}/>
            <ItemCount stock={8}/>
        </div>
    )
}

export default ItemListContainer