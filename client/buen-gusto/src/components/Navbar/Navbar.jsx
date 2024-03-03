import { useMediaQuery } from "@react-hook/media-query";
import style from "./Navbar.module.css";

//LIBRERIAS
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useState } from "react"; // Importa useState para manejar el estado del menú desplegable

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

  const navClasses = classNames(
    "navbar",
    "navbar-expand-lg",
    style.background,
    {
      [style.backgroundCel]: !isDesktop,
    }
  );

  const handleLinkClick = () => {
    if (!isDesktop) {
      // Si no es un escritorio, cierra el menú después de hacer clic en un enlace
      setIsMenuOpen(false);
    }
  };

  const handleDropdownClick = (e) => {
    if (!isDesktop) {
      // Si no es un escritorio, previene la propagación del evento para evitar que se cierre automáticamente
      e.stopPropagation();
    }
  };

  return (
    <div>
      <nav className={navClasses}>
        {" "}
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">
            <img
              className={style.logo}
              src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1704724552/FB_IMG_1704724008401-fotor-bg-remover-20240108113434_s330vw.png"
              alt="Logo"
            />
          </a>
          <div>
            {/* Pantalla Chica */}
            {isDesktop ? null : (
              <a href="/">
                <p className={style.titulo}>
                  <b>El Buen Gusto</b>
                </p>
              </a>
            )}
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Cambia el estado del menú al hacer clic en el botón
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNavDropdown" onClick={() => setIsMenuOpen(false)}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" onClick={handleLinkClick}>
                <a
                  className={`nav-link active text-light ${style.text}`}
                  aria-current="page"
                  href="#nosotros"
                >
                  <b>Nosotros</b>
                </a>
              </li>
              <li className="nav-item" onClick={handleLinkClick}>
                <a
                  className={`nav-link active text-light ${style.text}`}
                  href="#contacto"
                >
                  <b>Contacto</b>
                </a>
              </li>
              <div>
                {/* Pantalla Grande */}
                {isDesktop ? (
                  <a href="/">
                    <p className={style.titulo}>
                      <b>El Buen Gusto</b>
                    </p>
                  </a>
                ) : null}
              </div>
              <li className={`nav-item dropdown ${style.disntacias}`} onClick={handleLinkClick}>
                <a
                  className={`nav-link dropdown-toggle text-light ${style.text}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={handleDropdownClick} // Evita que se cierre automáticamente en dispositivos móviles
                >
                  <b>Servicios</b>
                </a>
                <ul className={`dropdown-menu ${style.background}`}>
                  <li>
                    <a
                      className={`dropdown-item text-light ${style.customDropdownItem}`}
                      href=""
                    >
                      <Link to="/bodas" className={style.servicios}>
                        Bodas
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item text-light ${style.customDropdownItem}`}
                      href=""
                    >
                      <Link to="/corporativos" className={style.servicios}>
                        {" "}
                        Eventos Corporativos
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item text-light ${style.customDropdownItem}`}
                      href=""
                    >
                      <Link to="/sociales" className={style.servicios}>
                        {" "}
                        Eventos Sociales
                      </Link>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
