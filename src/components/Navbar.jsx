import './Navbar.css'
import { Link } from "react-router-dom";
import { NavData } from './data'

function Navbar () {

    

    return (
      
      <nav >
            <Link className='tittle' to="/">VROOM</Link>
        
            <div className='nav-menu'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link to="/about">About</Link>
                    </li>
                    {/* <li className='nav-item'> 
                    <Link to="/contact">Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/services">Services</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    
    
    )

}

export default Navbar