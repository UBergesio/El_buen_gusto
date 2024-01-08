import { useMediaQuery } from "@react-hook/media-query";
import style from "./Navbar.module.css";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg ${style.background}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            <img
              className={style.logo}
              src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1704724552/FB_IMG_1704724008401-fotor-bg-remover-20240108113434_s330vw.png"
              alt="Logo"
            />
          </a>
          <div>
            {isDesktop ? null : (
              <p className={style.titulo}>
                <b>El Buen Gusto</b>
              </p>
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
                  href="#"
                >
                  <b>Nosotros</b>
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className={`nav-link active text-light ${style.text}`}
                  href="#"
                >
                  <b>Galeria</b>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link active text-light ${style.text}`}
                  href="#"
                >
                  <b>Contacto</b>
                </a>
              </li>
              <div>
                {isDesktop ? (
                  <p className={style.titulo}>
                    <b>El Buen Gusto</b>
                  </p>
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
                    <a className="dropdown-item text-light" href="#">
                      Catering empresarial
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-light" href="#">
                      Bodas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-light" href="#">
                      Cumpleaños
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
