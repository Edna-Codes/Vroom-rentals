import '../App.css'

function Navbar () {

    return (
        <>
      <header className='nav-container'>
      <nav className='navigation-bar'>
            <div className='brand-logo'>
                <h1>VROOM</h1>
            </div>
            <div className='nav-menu'>
                <ul className='nav-list'>
                    <li className='nav-item'>About</li>
                    <li className='nav-item'>Contact</li>
                    <li className='nav-item'>FAQs</li>
                </ul>
            </div>
        </nav>
      </header>
        
        </>
    )

}

export default Navbar