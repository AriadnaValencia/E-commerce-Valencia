import './navbar.css'
import CartWidget from '../cartWidget/CartWidget'
const Navbar = () => {
    return(
<nav className='navContainer'>
        <a className="link" href="/">
            <img alt='logo' src='./images/logo.png' className='logo'/>
        </a>
        <div className='linksContainer'>
        <a className="link" href="/">Combos</a>
        <a className="link" href="/">Productos</a>
        <a className="link" href="/">Salsas</a>
        </div>
        <CartWidget/>
    </nav>
    )
}

export default Navbar