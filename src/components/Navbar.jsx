import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar () {

    return (
        <>
      <header className='nav-container'>
      <nav className='navigation-bar'>
            <div className='brand-logo'>
            <Link to="/">VROOM</Link>
            </div>
            <div className='nav-menu'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link to="/About">About</Link>
                    </li>
                    <li className='nav-item'> 
                    <Link to="/Contact">Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Services">Services</Link>
                    </li>
                </ul>
            </div>
        </nav>
      </header>
        
        </>
    )

}

export default Navbar