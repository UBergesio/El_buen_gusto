import { useMediaQuery } from "@react-hook/media-query";
import style from "./Navbar.module.css";

//LIBRERIAS
import classNames from "classnames";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const navClasses = classNames(
    "navbar",
    "navbar-expand-lg",
    style.background,
    {
      [style.backgroundCel]: !isDesktop,
    }
  );

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
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className={`nav-link active text-light ${style.text}`}
                  aria-current="page"
                  href="#nosotros"
                >
                  <b>Nosotros</b>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link active text-light ${style.text}`}
                  href="#valores"
                >
                  <b>Valores</b>
                </a>
              </li>
              <li className="nav-item">
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
              <li className={`nav-item dropdown ${style.disntacias}`}>
                <a
                  className={`nav-link dropdown-toggle text-light ${style.text}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Servicios</b>
                </a>
                <ul className={`dropdown-menu ${style.background}`}>
                  <li>
                    <a
                      className={`dropdown-item text-light ${style.customDropdownItem}`}
                      href="#servicios"
                    >
                      Bodas
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item text-light ${style.customDropdownItem}`}
                      href="#servicios"
                    >
                      Eventos Corporativos
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item text-light ${style.customDropdownItem}`}
                      href="#servicios"
                    >
                      Eventos Sociales
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
