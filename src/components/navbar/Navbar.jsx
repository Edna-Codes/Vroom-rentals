import './Navbar.css'
import { Link } from "react-router-dom";
import { navData } from '../../data'





function Navbar () {

  

    return (


        <>
           
          <nav>
            <Link className='tittle' to='./'>
                VROOM
            </Link>
                  
                    
                    <div className='nav-menu'>
                        <ul className='nav-list'>
                       
            {navData.map((item, i) => (
                <li key={i} className='nav-item'>
                <Link to={item.href}>{item.title}</Link>
                </li>

            ))}
              
                            
                        </ul>
                    </div>
                
          </nav>
              
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