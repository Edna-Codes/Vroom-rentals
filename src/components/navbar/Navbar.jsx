import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { navData } from "../../data";
import { IconContext } from "react-icons";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <Link className="tittle" to="./">
          VROOM
        </Link>

        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="nav-links">
          <div className="nav-menu">
            <ul className={menuOpen ? "open" : ""}>
              {navData.map((item, i) => (
                <li key={i} className="nav-item">
                  <Link to={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-icons">
            <div className="icon">
              <IconContext.Provider value={{ color: "black", size: "1.8em" }}>
                <CiSearch />
              </IconContext.Provider>
            </div>
            <div className="icon">
              <IconContext.Provider value={{ color: "black", size: "1.8em" }}>
                <IoIosNotifications />
              </IconContext.Provider>
            </div>
          </div>
          <div>
            <button className="navButton">Contact us</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
