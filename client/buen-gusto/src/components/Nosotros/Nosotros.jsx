import style from "./Nosotros.module.css";
import { useMediaQuery } from "@react-hook/media-query";
import nosotros from "../../utils/img/nosotros/nosotros.json";

const Nosotros = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className={`text-center bg-black ${style.container}`} id="nosotros">
      {isDesktop ? (
        /* Pantalla Grande */
        <div>
          <h3 className={`${style.subTitulo}`}>
            Más de 20 años agasajando{" "}
            <img
              className={style.logo}
              src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1704724552/FB_IMG_1704724008401-fotor-bg-remover-20240108113434_s330vw.png"
              alt="Logo"
            />
          </h3>
          <div className="row">
            <div className="col">
              <h4 className={style.titulo}>
                Desde{" "}
                <span className={`${style.buenGusto}`}>"El buen Gusto"</span>{" "}
                sabemos que cada evento es <b>único y especial.</b>
              </h4>
              <br />
              <p className={style.texto}>
                Desde 1999, hemos estado comprometidos con la excelencia en la
                prestación de servicios de catering en todo el país. Nos
                enorgullece ofrecer experiencias culinarias excepcionales que
                cautivan los sentidos y crean recuerdos inolvidables.
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
              {/* <h4 className={style.titulo}>
              Desde{" "}
              <span className={`${style.buenGusto}`}>"El buen Gusto"</span>{" "}
              sabemos que cada evento es <b>único y especial.</b>
            </h4>
            <br />
            <p className={style.texto}>
              Nuestro catering no se limita a un lugar fijo; llegamos a donde
              nos necesites.
              <br />
              <br />
              Realizamos <b>eventos de todo tipo</b>; ya sea bodas, cumpleaños,
              conferencias empresariales o reuniones. Nuestro equipo tiene la
              experiencia para brindarte un servicio de alta calidad en
              cualquier ocasión.
              <br />
              <br /> Estamos preparados para ofrecerte diferentes{" "}
              <b>opciones gastronómicas</b>; trabajamos para crear un menú que
              refleje tus gustos y preferencias.
              <br />
              <br />
              <b>Trabajamos juntos</b> para garantizar que tu evento sea un
              éxito desde el primer hasta el último detalle.
            </p> */}
            </div>
            <div className="col shadow">
              {/* Carrusel pantalla grande */}
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
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Pantalla Chica */
        <div className="row row-cols-1">
          <h3 className={style.subTituloChica}>Más de 20 años agasajando </h3>
          <img
            className={style.logo}
            src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1704724552/FB_IMG_1704724008401-fotor-bg-remover-20240108113434_s330vw.png"
            alt="Logo"
          />
          <div className="col">
            <h4 className={style.titulo}>
              En <span className={`${style.buenGusto}`}>"El buen Gusto"</span>{" "}
              sabemos que cada evento es <b>único y especial.</b>
              <br />
              <br />
              {/* Carrusel pantalla chica */}
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
            </h4>
            <br />
            {/*             <p className={style.texto}>
              Desde 1999, hemos estado comprometidos con la excelencia en la
              prestación de servicios de catering en todo el país. Nos
              enorgullece ofrecer experiencias culinarias excepcionales que
              cautivan los sentidos y crean recuerdos inolvidables.
              <br />
              <br />
              A lo largo de los años, hemos perfeccionado nuestra artesanía
              culinaria, fusionando creatividad, calidad y pasión en cada plato
              que servimos.
              <br />
              <br /> Lo que nos distingue es nuestro compromiso con la
              satisfacción del cliente. Entendemos que cada evento es único, y
              trabajamos estrechamente para personalizar cada detalle y superar
              sus expectativas.
              <br />
              <br />
              ¡Gracias por considerarnos para su próximo evento!
              <br />
              <br />
              <b>El Buen Gusto | Servicio de catering</b>
            </p> */}

            <div
              className={`accordion accordion-flush`}
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button collapsed ${style.acordion}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <h4 className={style.titulo}>Nosotros</h4>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    {" "}
                    <p className={style.texto}>
                      Desde 1999, hemos estado comprometidos con la excelencia
                      en la prestación de servicios de catering en todo el país.
                      Nos enorgullece ofrecer experiencias culinarias
                      excepcionales que cautivan los sentidos y crean recuerdos
                      inolvidables.
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
              <div className="accordion-item"></div>
            </div>
          </div>
          <div className="col shadow"></div>
        </div>
      )}
    </div>
  );
};

export default Nosotros;
