import "./Navbar.css";
import { Link } from "react-router-dom";
import { navData } from "../../data";

function Navbar() {
  return (
    <>
      <nav>
        <Link className="tittle" to="./">
          VROOM
        </Link>

        <div className="nav-menu">
          <ul className="nav-list">
            {navData.map((item, i) => (
              <li key={i} className="nav-item">
                <Link to={item.href}>{item.title}</Link>
              </li>
            
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
