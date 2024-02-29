import Item from "../item/Item"
import './itemList.css'

const ItemList = ({productos}) => {
    /*hago el map acá*/
    return (
        <div className="contProductos">
            {productos.map((producto)=><Item key={producto.id} producto={producto}/>)}
        </div>
    )
}

export default ItemList