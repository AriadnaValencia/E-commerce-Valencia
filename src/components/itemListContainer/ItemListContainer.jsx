import React from 'react'
import './itemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../mock/fakeApi'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'


function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (categoryId) {
                    setProductos(res.filter((prod) => prod.category === categoryId))
                } else {
                    setProductos(res)
                }
            })

            .catch((error) => console.log(error, 'mal'))
    }, [categoryId])

    return (
        <div className='cartel'>
            {
                categoryId
                    ? <h1> {greeting} <span>{categoryId}</span></h1>
                    : <h1>{greeting}</h1>
            }
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer