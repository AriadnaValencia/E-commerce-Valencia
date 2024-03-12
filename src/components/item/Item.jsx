import './item.css'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <div className="cardItem">
            <img src={producto.imagen} className="card-img-top" alt={producto.name}/>
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p>${producto.price}</p>
                <Link to={`/item/${producto.id}`} className="btn btn-warning">Ver más</Link>
            </div>
        </div>
    )
}

export default Item