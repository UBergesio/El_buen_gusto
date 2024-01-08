import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${style.background}`}>
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            <img
              className={style.logo}
              src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1704724552/FB_IMG_1704724008401-fotor-bg-remover-20240108113434_s330vw.png"
              alt="Logo"
            />
          </a>
          <p className={style.titulo}>
            <b>El Buen Gusto</b>
          </p>
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
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Nosotros
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light" href="#">
                  Galeria
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Contacto
                </a>
              </li>
              <li
                className={`nav-item dropdown ${style.disntacias}`}
              >
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Servicios
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
}

export default Navbar;