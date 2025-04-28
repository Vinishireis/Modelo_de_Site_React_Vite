import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src="./src/assets/images/react.svg" alt="Logo" width="50" />
                    Meu Site React
                </Link>
                
                <div className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <i className="fas fa-times"></i>
                    ) : (
                        <i className="fas fa-bars"></i>
                    )}
                </div>
                
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-links" onClick={closeMobileMenu}>
                            Cadastre-se
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;