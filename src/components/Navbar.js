import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <span className="navbar-logo">✈️ TravelTasks</span>
            <div className="navbar-links">
                <Link to="/">🏠 Accueil</Link>
                <Link to="/apropos">ℹ️ À propos</Link>
            </div>
        </nav>
    );
}

export default Navbar;