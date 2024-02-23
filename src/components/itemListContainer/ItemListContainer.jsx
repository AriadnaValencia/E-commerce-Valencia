import ItemCount from '../itemCount/ItemCount'
import './itemListContainer.css'
const ItemListContainer = ({greeting}) => {
    return (
        <div className='cartel'>
            <h1>{greeting}</h1>
            <ItemCount stock={8}/>
        </div>
    )
}

export default ItemListContainer