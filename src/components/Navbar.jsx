import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar () {

    return (
      
      <nav >
            <Link className='tittle' to="/">VROOM</Link>
        
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
    
    
    )

}

export default Navbar