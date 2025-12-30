import { Link } from "react-router-dom";

import logo from "../../../assets/logoMRConFondo.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow"
        id="section-nav"
      >
        <div className="container">
          <img src={logo} className="img-small me-5" alt="Logo Matías Regaló" />
          <a className="navbar-brand fw-bold text-dark" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#matiasRegaloNavbar"
            aria-controls="matiasRegaloNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="matiasRegaloNavbar"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link text-dark" to="/home" id="link-home">
                  Home
                </Link>
              </li>
            </ul>
            <div className="navbar-icons">
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
