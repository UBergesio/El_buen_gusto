import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${style.background}`}>
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="#">
            LOGO
          </a>
          <p className={style.titulo}>El Buen Gusto</p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Nosotros
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-light" href="#">
                  Galeria
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Contacto
                </a>
              </li>
              <li class="nav-item dropdown" className={style.disntacias}>
                <a
                  class="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Servicios
                </a>
                <ul className={`dropdown-menu ${style.background}`}>
                  <li>
                    <a class="dropdown-item text-light" href="#">
                      Catering empresarial
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-light" href="#">
                      Bodas
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-light" href="#">
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