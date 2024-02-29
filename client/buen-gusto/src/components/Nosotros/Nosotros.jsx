import style from "./Nosotros.module.css";
import { useMediaQuery } from "@react-hook/media-query";
/* import nosotros from "../../utils/img/nosotros/nosotros.json";
 */ import React, { useState, useEffect } from "react";

const Nosotros = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica si el scroll está más abajo de cierta posición
      if (window.scrollY > 15) {
        setAnimate(true); // Activa la animación
      }
    };

    window.addEventListener("scroll", handleScroll); // Agrega el event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpia el event listener al desmontar
    };
  }, []); // El useEffect se ejecuta solo una vez al montar el componente

  return (
    <div className={`text-center bg-black ${style.container}`} id="nosotros">
      {" "}
      {isDesktop ? (
        /* Pantalla Grande */
        <div>
          <div className="row">
            <div className="col">
              <h3 className={`${style.subTitulo}`}>
                Más de 20 años agasajando{" "}
                <img
                  className={style.logo}
                  src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1704724552/FB_IMG_1704724008401-fotor-bg-remover-20240108113434_s330vw.png"
                  alt="Logo"
                />
              </h3>

              <h4 className={style.titulo}>
                Sabemos que cada evento es <b>único y especial.</b>
              </h4>
              <br />
              <p className={style.texto}>
                Estamos comprometidos con la excelencia en servicios de catering
                en todo el país. Nos enorgullece ofrecer experiencias culinarias
                excepcionales que cautivan los sentidos y crean recuerdos
                inolvidables.
                <br />
                <br />
                A lo largo de los años, hemos perfeccionado nuestra artesanía
                culinaria, fusionando creatividad, calidad y pasión en cada
                plato que servimos.
                <br />
                <br /> Lo que nos distingue es nuestro compromiso con la
                satisfacción del cliente. Entendemos que cada evento es único, y
                trabajamos estrechamente para personalizar cada detalle y
                superar sus expectativas.
                <br />
                <br />
                ¡Gracias por considerarnos para su próximo evento!
                <br />
                <br />
                <b>El Buen Gusto | Servicio de catering</b>
              </p>
            </div>
            <div className="col">
              {/* Video pantalla grande */}
              <video
                width="370"
                height="640"
                controls
                autoplay
                /* className={`${animate ? style.reel : ""}`} */
                className={style.reelDest}
              >
                <source
                  src="https://res.cloudinary.com/dp6ojzhsc/video/upload/v1708003718/El%20buen%20gusto/Nuestra_pasi%C3%B3n_es_transformar_eventos_en_experiencias_inolvidables_Cada_bocado_es_una_explosi%C3%B3n_de_sa...b_delicia_celebr%C3%A1_tus_sue%C3%B1os_con_nosotros_ElBuenGusto_Servicio_de_catering_Agasajando_desde_1999_serviciodecateri_pfwxej.mp4"
                  type="video/mp4"
                />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
          </div>
        </div>
      ) : (
        /* Pantalla Chica */
        <div className="row row-cols-1">
          <h3 className={style.subTituloChica}>Más de 20 años agasajando </h3>
          <span>
            <img
              className={style.logo}
              src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1704724552/FB_IMG_1704724008401-fotor-bg-remover-20240108113434_s330vw.png"
              alt="Logo"
            />
          </span>
          <div className="col">
            <h4 className={style.titulo}>
              Sabemos que cada evento es <b>único y especial.</b>
              <br />
              <br />
              {/* Video pantalla chica */}
              <video
                width="390"
                height="640"
                controls
                autoplay
                className={`${style.reel}`}
              >
                <source
                  src="https://res.cloudinary.com/dp6ojzhsc/video/upload/v1708003718/El%20buen%20gusto/Nuestra_pasi%C3%B3n_es_transformar_eventos_en_experiencias_inolvidables_Cada_bocado_es_una_explosi%C3%B3n_de_sa...b_delicia_celebr%C3%A1_tus_sue%C3%B1os_con_nosotros_ElBuenGusto_Servicio_de_catering_Agasajando_desde_1999_serviciodecateri_pfwxej.mp4"
                  type="video/mp4"
                />
                Tu navegador no admite el elemento de video.
              </video>
            </h4>
            <br />
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    className={`accordion-button  ${style.acordion}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <h4 className={style.titulo}>Nosotros:</h4>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse ${style.textoAcordion}`}
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                   {/*  <img
                      src="https://res.cloudinary.com/dtfp8liuv/image/upload/v1708023537/El%20buen%20gusto/28753971_590748827924118_1006629377997275136_n_w4nf7m.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    ></img> */}
                    <p>
                      Estamos comprometidos con la excelencia en servicios de
                      catering en todo el país. Nos enorgullece ofrecer
                      experiencias culinarias excepcionales que cautivan los
                      sentidos y crean recuerdos inolvidables.
                      <br />
                      <br />
                      A lo largo de los años, hemos perfeccionado nuestra
                      artesanía culinaria, fusionando creatividad, calidad y
                      pasión en cada plato que servimos.
                      <br />
                      <br /> Lo que nos distingue es nuestro compromiso con la
                      satisfacción del cliente. Entendemos que cada evento es
                      único, y trabajamos estrechamente para personalizar cada
                      detalle y superar sus expectativas.
                      <br />
                      <br />
                      ¡Gracias por considerarnos para su próximo evento!
                      <br />
                      <br />
                      <b>El Buen Gusto | Servicio de catering</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col shadow"></div>
        </div>
      )}
    </div>
  );
};

export default Nosotros;

/* CARRUCEL PARA CEL */
/* {
 <div
                  id="carouselExampleInterval"
                  className={`carousel slide ${
                    animate ? style.moverDesdeDerecha : ""
                  }`}
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {nosotros.map((item, index) => (
                      <div
                        key={index}
                        className={
                          index === 0 ? "carousel-item active" : "carousel-item"
                        }
                        data-bs-interval="3000"
                      >
                        <img
                          src={item.img}
                          className="d-block w-100 border bg-dark rounded border border-2 border-black"
                          alt="..."
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div> 
} */

/*    CARRUCEL PANTALLA GRANDE
<div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {nosotros.map((item, index) => (
                    <div
                      key={index}
                      className={
                        index === 0 ? "carousel-item active" : "carousel-item"
                      }
                      data-bs-interval="3000"
                    >
                      <img
                        src={item.img}
                        className="d-block w-100 rounded border border-2 border-black"
                        alt="..."
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div> */
