import style from "./Servicios.module.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import React, { useState, useEffect } from "react";


const Servicios = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [animate, setAnimate] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        // Verifica si el scroll está más abajo de cierta posición
        if (window.scrollY > 800) {
          setAnimate(true); // Activa la animación
        } 
      };

      window.addEventListener('scroll', handleScroll); // Agrega el event listener

      return () => {
        window.removeEventListener('scroll', handleScroll); // Limpia el event listener al desmontar
      };
    }, []); // El useEffect se ejecuta solo una vez al montar el componente
  

  return (
    <div className={`container-fluid text-center p-0`}>
      {/* PANTALLA GRANDE */}
      {isDesktop ? (
        <div className={`row align-items-start m-0 ${style.container}`}>
          <div className="col-lg col-12 p-4">
            <h1 className={style.h1}>Bodas</h1>
            <img
              src="https://res.cloudinary.com/dtfp8liuv/image/upload/c_fill,w_1031,h_600,g_auto/v1708023714/El%20buen%20gusto/FB_IMG_1704895444217_jc9jga.jpg"
              alt=""
              className={style.img}
            />
            <p className={style.p}>
              En el día más especial de tu vida, permítenos elevar la
              experiencia culinaria y hacer que tu boda sea aún más inolvidable
              con nuestro servicio de catering exclusivo para bodas. En "El Buen
              Gusto", entendemos que cada boda es única, y nos comprometemos a
              ofrecerte un servicio personalizado que refleje tu estilo y cree
              recuerdos que perdurarán toda la vida.
            </p>
            <Link to="/bodas">
              <button
                type="button"
                className={`btn btn-outline-danger btn-sm ${style.botones}`}
              >
                Más info
              </button>
            </Link>
          </div>
          <div className={`vr bg-light p-0 ${style.separadores}`}></div>
          <div className="col-lg col-12 p-4">
            <h1 className={style.h1}>Eventos Corporativos</h1>
            <img
              src="https://res.cloudinary.com/dtfp8liuv/image/upload/c_fill,w_1031,h_600,g_auto/v1708023537/El%20buen%20gusto/El_pasado_Viernes_23_de_Febrero_nos_encontramos_en_la_localidad_de_General_Roca_realizando_los_15_a%C3%B1os_de_Luisina_Aliprandi_Gracias_por_confiar_en_nuestros_servicios_un_placer_agasajarlos._ElBuenGusto_rqp74r.jpg"
              alt=""
              className={style.img}
            />
            <p className={style.p}>
              Nuestro servicio de catering para eventos corporativos está
              diseñado para elevar tu ocasión de negocios a través de
              experiencias gastronómicas excepcionales. Ya sea una conferencia,
              una presentación de productos o una reunión ejecutiva, nuestro
              equipo se esfuerza por ofrecer una fusión de sabores deliciosa y
              presentación elegante.
            </p>
            <Link to="/corporativos">
              <button
                type="button"
                className={`btn btn-outline-danger btn-sm ${style.botones}`}
              >
                Más info
              </button>
            </Link>
          </div>
          <div className={`vr bg-light p-0 ${style.separadores}`}></div>
          <div className="col-lg col-12 p-4">
            <h1 className={`${style.h1}`}>Eventos Sociales</h1>
            <img
              src="https://res.cloudinary.com/dtfp8liuv/image/upload/c_fill,w_1031,h_600/v1708023535/El%20buen%20gusto/O1-1O_Casamiento_alfoponze_fbrusss_Recepci%C3%B3n_mesas_islas_Colita_de_cuadrid_mechada_con_papas_cubo_y_espinaca_a_la_crema_Brownie_con_helado_Un_placer_agasajarlos_en_su_noche_ElBuenGusto_q75qp0.jpg"
              alt=""
              className={style.img}
            />
            <p className={style.p}>
              Entendemos que los eventos sociales requieren un enfoque especial
              y personalizado. Nuestro servicio de catering para eventos
              sociales está diseñado para hacer de cada ocasión un festín
              memorable. Desde celebraciones familiares hasta reuniones entre
              amigos, nos esforzamos por crear experiencias gastronómicas que se
              adapten a la alegría y diversión de tus eventos sociales.
            </p>
            <Link to="/sociales">
              <button
                type="button"
                className={`btn btn-outline-danger btn-sm ${style.botonesFuera}`}
              >
                Más info
              </button>
            </Link>
          </div>
        </div>
      ) : (
        /* PANTALLA CHICA */
        <div
          className={`container-fluid text-center ${style.container}`}
          id="servicios"
        >
          {animate ? (
            <nav>
              <div
                className={`nav nav-tabs ${style.nav} ${
                  animate ? style.moverDesdeDerecha : ""
                }`}
                id="nav-tab"
                role="tablist"
              >
                <button
                  className={`nav-link active ${style.botonesNav}`}
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  <h1 className={style.h1Nav}>Bodas</h1>
                </button>
                <button
                  className={`nav-link ${style.botonesNav}`}
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <h1 className={style.h1Nav}>Corporativos</h1>
                </button>
                <button
                  className={`nav-link ${style.botonesNav}`}
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  <h1 className={`${style.h1Nav}`}>Sociales</h1>
                </button>
              </div>
            </nav>
          ) : (
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          )}

          <div
            className={`tab-content ${animate ? style.animate2 : ""}`}
            id="nav-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabIndex="0"
            >
              <img
                src="https://res.cloudinary.com/dtfp8liuv/image/upload/c_fill,w_1031,h_600,g_auto/v1708023714/El%20buen%20gusto/FB_IMG_1704895444217_jc9jga.jpg"
                alt=""
                className={style.img}
              />
              <p className={style.p}>
                En el día más especial de tu vida, permítenos elevar la
                experiencia culinaria y hacer que tu boda sea aún más
                inolvidable con nuestro servicio de catering exclusivo para
                bodas. En "El Buen Gusto", entendemos que cada boda es única, y
                nos comprometemos a ofrecerte un servicio personalizado que
                refleje tu estilo y cree recuerdos que perdurarán toda la vida.
              </p>
              <Link to="/bodas">
                <button
                  type="button"
                  className={`btn btn-outline-danger btn-sm ${style.botones}`}
                >
                  Más info
                </button>
              </Link>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabIndex="0"
            >
              <img
                src="https://res.cloudinary.com/dtfp8liuv/image/upload/c_fill,w_1031,h_600,g_auto/v1708023537/El%20buen%20gusto/El_pasado_Viernes_23_de_Febrero_nos_encontramos_en_la_localidad_de_General_Roca_realizando_los_15_a%C3%B1os_de_Luisina_Aliprandi_Gracias_por_confiar_en_nuestros_servicios_un_placer_agasajarlos._ElBuenGusto_rqp74r.jpg"
                alt=""
                className={style.img}
              />
              <p className={style.p}>
                Nuestro servicio de catering para eventos corporativos está
                diseñado para elevar tu ocasión de negocios a través de
                experiencias gastronómicas excepcionales. Ya sea una
                conferencia, una presentación de productos o una reunión
                ejecutiva, nuestro equipo se esfuerza por ofrecer una fusión de
                sabores deliciosa y presentación elegante.
              </p>
              <Link to="/corporativos">
                <button
                  type="button"
                  className={`btn btn-outline-danger btn-sm ${style.botones}`}
                >
                  Más info
                </button>
              </Link>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
              tabIndex="0"
            >
              <img
                src="https://res.cloudinary.com/dtfp8liuv/image/upload/c_fill,w_1031,h_600/v1708023535/El%20buen%20gusto/O1-1O_Casamiento_alfoponze_fbrusss_Recepci%C3%B3n_mesas_islas_Colita_de_cuadrid_mechada_con_papas_cubo_y_espinaca_a_la_crema_Brownie_con_helado_Un_placer_agasajarlos_en_su_noche_ElBuenGusto_q75qp0.jpg"
                alt=""
                className={style.img}
              />
              <p className={style.p}>
                Entendemos que los eventos sociales requieren un enfoque
                especial y personalizado. Nuestro servicio de catering para
                eventos sociales está diseñado para hacer de cada ocasión un
                festín memorable. Desde celebraciones familiares hasta reuniones
                entre amigos. <br /> <br />
                <br />
              </p>
              <Link to="/sociales">
                <button
                  type="button"
                  className={`btn btn-outline-danger btn-sm ${style.botones}`}
                >
                  Más info
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Servicios;
