// MODULOS
import style from "./Carrusel.module.css";
import HomeCarru from "../../utils/img/HomeCarru/HomeCarru.json";
import HomeCarruCel from "../../utils/img/HomeCarru/HomeCarruCel.json";

// LIBRERIAS
import { useMediaQuery } from "@react-hook/media-query";


const Carrusel = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const carruselData = isDesktop ? HomeCarru : HomeCarruCel;

  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide carousel-fade ${style.tamanioCarrusel}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {carruselData.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {carruselData.map((item, index) => (
          <div
            key={index}
            className={index === 0 ? "carousel-item active" : "carousel-item"}
            data-bs-interval="8000"
          >
            <img
              src={item.img}
              className={`d-block w-100 border-bottom border-2 border-black ${style.img}`}
              alt="..."
            />
            <div className="carousel-caption  d-md-block">
              <h1 className={style.subTitulosBlanco}>{item.titulo}</h1>
              <h4 className={style.subTitulosBlanco}>{item.subTitulo}</h4>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrusel;