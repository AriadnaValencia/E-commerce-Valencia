import './cartWidget.css'

const CartWidget = () => {
    return (
        <div className='container-widget'>
            <img className='cart' src='./images/carrito.png' alt='carrito'/>
            <span className='badge-widget'>4</span>
        </div>
    )
}

export default CartWidget