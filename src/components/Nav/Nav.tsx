import { Link } from "react-router-dom";
import "./Nav.scss";
import ticketIcon from "../../assets/images/ticket.png";

const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/" className="nav__logo">
                <img
                    src={ticketIcon}
                    alt="Ticket Icon"
                    className="nav__logo-icon"
                />
                <h3 className="nav__logo-text">Ticket Tracker</h3>
            </Link>
            <ul className="nav__items">
                <li className="nav__item">
                    <Link to="/" className="nav__link">
                        Home
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/tickets" className="nav__link">
                        Tickets
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
