import './Navbar.css'
import { Link } from "react-router-dom";
import { NavData } from '../data'





function Navbar () {

  

    return (


    
            <>
            {NavData.map((Navitems, index) => {
              return (
                <div key={index}>
                    <div className='nav-menu'>
                      <Link to={Navitems.href}>{Navitems.title}</Link>
                    </div>
                </div>
              )
            })}
            </>
      
    //   <nav >
    //         {/* <Link className='tittle' to="/">{NavData.title}</Link>
        
    //         <div className='nav-menu'>
    //             <ul className='nav-list'>
    //                 <li className='nav-item'>
    //                     <Link to="/about">About</Link>
    //                 </li>
    //                 <li className='nav-item'> 
    //                 <Link to="/contact">Contact</Link>
    //                 </li>
    //                 <li className='nav-item'>
    //                     <Link to="/services">Services</Link>
    //                 </li> 
    //             </ul>
    //         </div> */}
    //     </nav>
    
    
    )

}

export default Navbar