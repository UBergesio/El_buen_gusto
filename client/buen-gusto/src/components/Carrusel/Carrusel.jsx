import style from "./Carrusel.module.css";
import HomeCarru from "../../utils/img/HomeCarru/HomeCarru.json";
import styleG from "../Styles/Styles.module.css"

const Carrusel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide carousel-fade ${style.tamanioCarrusel}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions "
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner ">
        {HomeCarru.map((item, index) => (
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
            <div className="carousel-caption d-none d-md-block">
              <h1 className={styleG.subTitulosBlanco}>{item.titulo}</h1>
              <h4 className={styleG.subTitulosBlanco}>{item.subTitulo}</h4>
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
