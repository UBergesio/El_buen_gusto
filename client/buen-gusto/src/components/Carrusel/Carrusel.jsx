import style from "./Carrusel.module.css"

const Carrusel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide ${style.tamanioCarrusel}`}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1695850045/cld-sample-3.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Primera imagen</h3>
            <p>primera descripcion.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1695850044/cld-sample-2.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Segunda imagen</h3>
            <p>Segunda Descripcion.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1695850045/cld-sample-4.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Tercer imagen</h3>
            <p>Tercer descripcion.</p>
          </div>
        </div>
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
 }
export default Carrusel;