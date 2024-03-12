import {NavLink} from 'react-router-dom'
import './navbar.css'
import CartWidget from '../cartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className='navContainer'>
            <NavLink className="link" to='/'>
                <img alt='logo' src='./images/logo.png' className='logo' />
            </NavLink>
            <div className='linksContainer'>
                <NavLink className="link" to='/categories/combos'>Combos</NavLink>
                <NavLink className="link" to='/categories/productos'>Productos</NavLink>
                <NavLink className="link" to='/categories/salsas'>Salsas</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar